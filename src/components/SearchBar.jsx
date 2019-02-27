import React from "react";

class SearchBar extends React.Component {
  state = { searchValue: "" };

  constructor(props) {
    super(props);
    console.log("Searchbar", props);
  }
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchValue);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div>
            <input
              type="text"
              id="search"
              placeholder="Search..."
              value={this.state.searchValue}
              onChange={e => this.setState({ searchValue: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
