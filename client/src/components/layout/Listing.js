import React, { Component } from "react";

class Listing extends Component {
  render() {
    return (
      <div class="card medium">
        <div class="card-image">
          <img src="http://www.sclance.com/pngs/image-placeholder-png/image_placeholder_png_698412.png" />
          <span class="card-title black-text">
            <b>{this.props.name}</b>
          </span>
        </div>
        <div class="card-content">
          <p>{this.props.description}</p>
        </div>
        <div class="card-action">
          <a href="#">View more</a>
        </div>
      </div>
    );
  }
}

export default Listing;
