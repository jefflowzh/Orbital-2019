import React, { Component } from "react";
import SearchBar from "./layout/SearchBar";
import SearchContainer from "./layout/SearchContainer";

class SearchResults extends Component {
  state = {};
  render() {
    return (
      <div>
        <SearchBar />
        <SearchContainer />
      </div>
    );
  }
}

export default SearchResults;
