import React from "react";
import SearchBar from "./SearchBar";
import DogList from "./DogList";
import axiosInstance from "../api/axios.cofig";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  state = { imageList: [] };
  onSearchSubmit = async searchValue => {
    const response = await axiosInstance.get("/search/photos", {
      params: { query: searchValue }
    });
    if (response && response.data && response.data.results)
      this.setState({ imageList: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <DogList imageList={this.state.imageList} />
        <Footer />
      </div>
    );
  }
}

export default App;
