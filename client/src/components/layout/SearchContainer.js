import React, { Component } from "react";
import { connect } from "react-redux";
import Listing from "./Listing";

class SearchContainer extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        Search Results:
        <div class="row">
          {this.props.searchResults.reverse().map(listing => (
            <div class="col s4">
              <div class="center">
                <Listing name={listing.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.listings.searchResults
});

export default connect(mapStateToProps)(SearchContainer);
