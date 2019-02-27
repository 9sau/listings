import "./../styles.css";
import React from "react";
import ImageCard from "./ImageCard";
import { connect } from "react-redux";

const ImageList = props => {
  const images = props.imageList.map((image, id) => {
    return <ImageCard key={id} image={image} />;
  });

  return <div className="dog-list">{images}</div>;
};

const mapStateToProps = state => {
  if (state && state.imageList) {
    return {
      imageList: state.imageList
    };
  }
};
export default connect(mapStateToProps)(ImageList);
