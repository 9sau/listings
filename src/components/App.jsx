import React from "react";
import SearchBar from "./SearchBar";
import DogList from "./DogList";
import axios from "../api/axios.cofig";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";

class App extends React.Component {
  state = { imageList: [], selectedImage: null, showModal: false };

  async componentDidMount() {
    const response = await axios.get("/dogs.json");
    if (response && response.data)
      this.setState({ imageList: response.data.dogs });
  }

  /* onSearchSubmit = async searchValue => {
    const response = await axios.get("/search/photos", {
      params: { query: searchValue }
    });
  }; */

  onClickImage = image => {
    this.setState({ selectedImage: image, showModal: true });
  };

  onClickClose = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Header />
        <div className="main-wrapper">
          <div className="main">
            {/* <SearchBar onSubmit={this.onSearchSubmit} /> */}
            <DogList
              imageList={this.state.imageList}
              onClickImage={this.onClickImage}
            />
            <div className="flex-center">
              <Modal
                showModal={this.state.showModal}
                image={this.state.selectedImage}
                onClickClose={this.onClickClose}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
