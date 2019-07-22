import React, { Component } from "react";
import { connect } from "react-redux";
import Listing from "./Listing";

class ListingContainer extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        Latest listings
        <div class="row">
          {this.props.listings.listings.reverse().map(listing => (
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
  listings: state.listings
});

export default connect(mapStateToProps)(ListingContainer);
