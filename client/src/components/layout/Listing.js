import React, { Component } from "react";
import { Link } from "react-router-dom";

class Listing extends Component {
  render() {
    console.log(this.props.isBefriender);
    return (
      <div class="card medium">
        <div class="card-image">
          <img src={this.props.photo} />
        </div>
        <div class="card-content" style={{ padding: "0.1px" }}>
          <span class="card-title black-text">
            <b>{this.props.name}</b>
          </span>
          <p>Medical Escort: {this.props.isMedicalEscort ? "Yes" : "No"}</p>
          <p>Befriender: {this.props.isBefriender ? "Yes" : "No"}</p>
          <p>Nurse: {this.props.isNurse ? "Yes" : "No"}</p>
        </div>
        <div class="card-action">
          <Link
            to={{
              pathname: "/listingDetails",
              state: {
                name: this.props.name,
                email: this.props.email,
                description: this.props.description,
                isBefriender: this.props.isBefriender,
                isMedicalEscort: this.props.isMedicalEscort,
                isNurse: this.props.isNurse,
                languages: this.props.languages,
                race: this.props.race,
                religion: this.props.religion,
                photo: this.props.photo
              }
            }}
          >
            View more
          </Link>
        </div>
      </div>
    );
  }
}

export default Listing;
