import "./../styles.css";
import React from "react";
import ImageCard from "./ImageCard";

const DogList = props => {
  const images = props.imageList.map((image, id) => {
    return (
      <ImageCard key={id} image={image} onClickImage={props.onClickImage} />
    );
  });

  return <div className="dog-list">{images}</div>;
};
export default DogList;
