import React, { Component } from "react";
import { connect } from "react-redux";
import Listing from "./Listing";

class ListingContainer extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h3>
          <b>Latest listings</b>
        </h3>
        <div class="row">
          {this.props.listings.listings.reverse().map(listing => (
            <div class="col s4">
              <div class="center">
                <Listing
                  name={listing.name}
                  description={listing.description}
                />
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
