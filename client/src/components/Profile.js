import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  logoutUser,
  resetCaregiver,
  deactivateAccount
} from "../actions/authActions";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
      isBefriender: "",
      isMedicalEscort: "",
      isNurse: "",
      languages: "",
      race: "",
      religion: "",
      photo: ""
    };
  }
  componentDidMount() {
    console.log(this.props.userId);
    const id = {
      userId: this.props.userId
    };
    console.log(id);
    axios.post("/api/users/currentUser", id).then(res =>
      this.setState({
        name: res.data.name,
        email: res.data.email,
        description: res.data.description,
        isBefriender: res.data.isBefriender,
        isMedicalEscort: res.data.isMedicalEscort,
        isNurse: res.data.isNurse,
        languages: res.data.languages,
        race: res.data.race,
        religion: res.data.religion,
        photo: res.data.photo
      })
    );
  }

  onDeactivateClick = e => {
    e.preventDefault();
    this.props.resetCaregiver();
    this.props.logoutUser();
    axios.post("/api/users/deleteAccount", { id: this.props.userId });
  };

  // deactivate = () => {
  //   this.props.deactivateAccount({ id: this.props.userId });
  // };

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
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          onClick={this.onDeactivateClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Deactivate Account
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id
});

export default connect(
  mapStateToProps,
  { logoutUser, resetCaregiver, deactivateAccount }
)(Profile);
