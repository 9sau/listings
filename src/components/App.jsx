import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import axios from "../api/axios.cofig";
//import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import { connect } from "react-redux";
import { loadImages } from "./../action-creators";

class App extends React.Component {
  state = { imageList: [], selectedImage: null, showModal: false };
  /* url = process.env.PUBLIC_URL + "/assets/json/dogs.json"; */
  url = "/search/photos";

  async componentDidMount() {
    /* 
    const response = await axios.get(this.url);
    if (response && response.data) {
      this.props.loadImages(response.data.dogs);
    }
    */

    this.onSearchSubmit(this.props.searchValue);
  }

  onSearchSubmit = async () => {
    const response = await axios.get(this.url, {
      params: { query: this.props.searchValue }
    });
    this.props.loadImages(response.data.results);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Header />
        <div className="main-wrapper">
          <div className="main">
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
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
  console.log("App state", state);
  if (state) {
    return {
      imageList: state.imageList,
      searchValue: state.searchValue
    };
  }
}
export default connect(
  mapStateToProps,
  { loadImages }
)(App);
