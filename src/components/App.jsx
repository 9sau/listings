import React from 'react';
import SearchBar from './SearchBar';
import DogList from './DogList';
import axios from 'axios';
class App extends React.Component {
  state = { imageList: [] }; 
  onSearchSubmit = async searchValue => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: searchValue },
        headers: {
            Authorization: 'Client-ID 9f236289b764ec3e884027087a199b0ff583d30869d00bb5ea8751956de72a61'
        }
    });
    
    if(response && response.data && response.data.results)
      this.setState({ imageList: response.data.results});
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <DogList imageList={this.state.imageList}/>
      </div>
    );
  }
}

export default App;
