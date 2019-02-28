import React from "react";
import { connect } from "react-redux";
import { searchBarQuery } from "../action-creators";

class SearchBar extends React.Component {
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit();
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
              value={this.props.searchValue}
              onChange={e => {
                this.props.searchBarQuery(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (state)
    return {
      searchValue: state.searchValue
    };
}
export default connect(
  mapStateToProps,
  { searchBarQuery }
)(SearchBar);
