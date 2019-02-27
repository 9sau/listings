export const loadImages = imageList => {
  return {
    type: "LOAD_IMAGES",
    payload: imageList
  };
};

export const selectImage = image => {
  return {
    type: "SELECT_IMAGE",
    payload: image
  };
};

export const openModal = showModal => {
  return {
    type: "OPEN_MODAL",
    payload: showModal
  };
};

export const setSpans = span => {
  return {
    type: "SET_SPAN",
    payload: span
  };
};
