import React from "react";
import "./../styles.css";
import ImageCard from "./ImageCard";
const DogList = props => {
  const images = props.imageList.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="dog-list">{images}</div>;
};
export default DogList;
