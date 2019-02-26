import React from "react";

const Modal = props => {
  if (!props.image) return null;

  const className = props.showModal
    ? "modal-wrapper flex-center"
    : " modal-wrapper display-none";

  return (
    <div className={className}>
      <div className="custom-modal">
        <span
          className="custom-modal-close"
          onClick={() => props.onClickClose()}
        >
          &times;
        </span>
        <div className="custom-modal-body">
          <img src={props.image.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
