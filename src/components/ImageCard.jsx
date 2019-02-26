import React from "react";
import lozad from "lozad";

class ImageCard extends React.Component {
  state = { spans: 0 };
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    const observer = lozad();
    observer.observe();
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  onClickImage = () => {
    console.log(this.props.image.image, this.imageRef);
    this.setState({ showModal: true });
  };

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const src = process.env.PUBLIC_URL + this.props.image.image;
    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        onClick={() => this.props.onClickImage(this.props.image)}
      >
        <img className="lozad" ref={this.imageRef} data-src={src} alt="Dog" />
      </div>
    );
  }
}

export default ImageCard;
