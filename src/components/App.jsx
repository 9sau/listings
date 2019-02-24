import React from "react";
import SearchBar from "./SearchBar";
import DogList from "./DogList";
import axiosInstance from "../api/axios.cofig";
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
        <SearchBar onSubmit={this.onSearchSubmit} />
        <DogList imageList={this.state.imageList} />
      </div>
    );
  }
}

export default App;
