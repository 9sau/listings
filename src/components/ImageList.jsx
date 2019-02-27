import "../styles.css";
import React from "react";
import ImageCard from "./ImageCard";
import { connect } from "react-redux";

const ImageList = props => {
  const images = props.imageList.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

const mapStateToProps = state => {
  if (state && state.imageList) {
    return {
      imageList: state.imageList
    };
  }
};
export default connect(mapStateToProps)(ImageList);
