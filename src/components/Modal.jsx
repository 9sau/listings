import React from "react";
import { connect } from "react-redux";
import { openModal, selectImage } from "../action-creators";

const Modal = props => {
  if (!props.image) return null;

  const className = props.showModal
    ? "modal-wrapper flex-center"
    : " modal-wrapper display-none";

  const onClickClose = () => {
    props.openModal(false);
    props.selectImage(null);
  };

  const { urls, description } = props.image;
  return (
    <div className={className}>
      <div className="custom-modal">
        <span className="custom-modal-close" onClick={onClickClose}>
          &times;
        </span>
        <div className="custom-modal-body">
          <img src={urls.regular} alt={description} />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  if (state) {
    return {
      showModal: state.showModal,
      image: state.selectedImage
    };
  }
}
export default connect(
  mapStateToProps,
  { openModal, selectImage }
)(Modal);
