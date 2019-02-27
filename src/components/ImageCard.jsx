import React from "react";
import lozad from "lozad";
import { connect } from "react-redux";

import { selectImage, openModal } from "../action-creators";

class ImageCard extends React.Component {
  state = { spans: 0 };
  constructor(props) {
    console.log("Imagecard props", props);
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    const observer = lozad();
    observer.observe();
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  onClickImage = () => {
    this.props.selectImage(this.props.image);
    this.props.openModal(true);
  };

  render() {
    //const src = process.env.PUBLIC_URL + this.props.image.image;
    const { urls, description } = this.props.image;
    return (
      <div
        className="image-card"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        onClick={this.onClickImage}
      >
        <img
          className="lozad"
          ref={this.imageRef}
          data-src={urls.regular}
          alt={description}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { selectImage, openModal }
)(ImageCard);
