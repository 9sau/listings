import React from "react";

class ImageCard extends React.Component {
  state = { spans: 0 };
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
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
        <img ref={this.imageRef} src={src} alt="Dog" />
      </div>
    );
  }
}

export default ImageCard;
