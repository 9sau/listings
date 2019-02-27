import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
//import axios from "../api/axios.cofig";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import { connect } from "react-redux";
import { loadImages, selectImage, openModal } from "./../action-creators";

class App extends React.Component {
  state = { imageList: [], selectedImage: null, showModal: false };

  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    const response = await axios.get(
      process.env.PUBLIC_URL + "/assets/json/dogs.json"
    );
    if (response && response.data) {
      this.props.loadImages(response.data.dogs);
    }

    //this.onSearchSubmit("dogs");
  }

  onSearchSubmit = async searchValue => {
    const response = await axios.get("/search/photos", {
      params: { query: searchValue }
    });
    console.log(response);
    //this.props.loadImages(response);
  };

  onClickImage = image => {
    this.props.selectImage(image);
    this.props.showModal(true);
  };

  onClickClose = () => {
    this.props.showModal(false);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Header />
        <div className="main-wrapper">
          <div className="main">
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList />
            <div className="flex-center">
              <Modal />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (state) {
    return {
      imageList: state.imageList,
      selectedImage: state.selectedImage,
      showModal: state.openModal
    };
  }
}
export default connect(
  mapStateToProps,
  { loadImages, selectImage, showModal: openModal }
)(App);
