import React, { Component } from "react";

class ListingDetails extends Component {
  state = {
    name: this.props.location.state.name,
    email: this.props.location.state.email,
    description: this.props.location.state.description,
    isBefriender: this.props.location.state.isBefriender,
    isMedicalEscort: this.props.location.state.isMedicalEscort,
    isNurse: this.props.location.state.isNurse,
    languages: this.props.location.state.languages,
    race: this.props.location.state.race,
    religion: this.props.location.state.religion,
    photo: this.props.location.state.photo
  };
  render() {
    return (
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col s12">
            <br />
            <h3 className="center-align">
              <b>{this.state.name}</b>
            </h3>
            <br />
            <div className="center-align">
              <img
                src={this.state.photo}
                style={{ height: "320px", width: "400px" }}
              />
            </div>
            <div>
              <h5 style={{ padding: "0px", margin: "0px", border: "0px" }}>
                <b>Email:</b>
              </h5>
              <p
                style={{ padding: "0px", marginTop: "0px", border: "0px" }}
                className="flow-text grey-text text-darken-1"
              >
                <small>{this.state.email}</small>
              </p>
            </div>
            <div>
              <h5 style={{ padding: "0px", margin: "0px", border: "0px" }}>
                <b>Services:</b>
              </h5>
              <p
                style={{ padding: "0px", marginTop: "0px", border: "0px" }}
                className="flow-text grey-text text-darken-1"
              >
                {this.state.isMedicalEscort ? (
                  <p style={{ padding: "0px", margin: "0px", border: "0px" }}>
                    <small>Medical Escort</small>
                  </p>
                ) : null}
                {this.state.isBefriender ? (
                  <p style={{ padding: "0px", margin: "0px", border: "0px" }}>
                    <small>Befriending</small>
                  </p>
                ) : null}
                {this.state.isNurse ? (
                  <p style={{ padding: "0px", margin: "0px", border: "0px" }}>
                    <small>Nursing</small>
                  </p>
                ) : null}
              </p>
              <div>
                <h5 style={{ padding: "0px", margin: "0px", border: "0px" }}>
                  <b>Description:</b>
                </h5>
                <p
                  style={{ padding: "0px", marginTop: "0px", border: "0px" }}
                  className="flow-text grey-text text-darken-1"
                >
                  <small>{this.state.description}</small>
                </p>
              </div>
              <div>
                <h5 style={{ padding: "0px", margin: "0px", border: "0px" }}>
                  <b>Languages Spoken:</b>
                </h5>
                <p
                  style={{ padding: "0px", marginTop: "0px", border: "0px" }}
                  className="flow-text grey-text text-darken-1"
                >
                  <small>{this.state.languages}</small>
                </p>
              </div>
              <div>
                <h5 style={{ padding: "0px", margin: "0px", border: "0px" }}>
                  <b>Race:</b>
                </h5>
                <p
                  style={{ padding: "0px", marginTop: "0px", border: "0px" }}
                  className="flow-text grey-text text-darken-1"
                >
                  <small>{this.state.race}</small>
                </p>
              </div>
              <div>
                <h5 style={{ padding: "0px", margin: "0px", border: "0px" }}>
                  <b>Religion:</b>
                </h5>
                <p
                  style={{ padding: "0px", marginTop: "0px", border: "0px" }}
                  className="flow-text grey-text text-darken-1"
                >
                  <small>{this.state.religion}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingDetails;
