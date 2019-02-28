import { combineReducers } from "redux";

const loadImagesReducer = (imageList = [], action) => {
  if (action.type === "LOAD_IMAGES") return action.payload;
  return imageList;
};

const selectedImageReducer = (selectedImage = null, action) => {
  if (action.type === "SELECT_IMAGE") return action.payload;
  return selectedImage;
};

const openModalReducer = (showModal = false, action) => {
  if (action.type === "OPEN_MODAL") return action.payload;
  return showModal;
};

const searchBarQueryReducer = (query = "dogs", action) => {
  if (action.type === "SEARCH_QUERY") return action.payload;
  return query;
};
export default combineReducers({
  imageList: loadImagesReducer,
  selectedImage: selectedImageReducer,
  showModal: openModalReducer,
  searchValue: searchBarQueryReducer
});
