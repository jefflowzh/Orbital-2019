import React, { Component } from "react";
import { connect } from "react-redux";
import Listing from "./Listing";

class ListingContainer extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        Latest listings
        {this.props.listings.listings.map(listing => (
          <Listing name={listing.name} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listings: state.listings
});

export default connect(mapStateToProps)(ListingContainer);
