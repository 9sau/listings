import React from "react";

const DogList = props => {
  return props.imageList.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
};
export default DogList;
