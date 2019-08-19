import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Profile extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     email: "",
  //     description: "",
  //     isBefriender: "",
  //     isMedicalEscort: "",
  //     isNurse: "",
  //     languages: "",
  //     race: "hel",
  //     religion: "",
  //     photo: ""
  //   };
  // }
  // componentDidMount() {
  //   console.log(this.props.userId);
  //   const id = {
  //     userId: this.props.userId
  //   };
  //   console.log(id);
  //   axios
  //     .post("/api/users/currentUser", id)
  //     .then(res => this.setState({ race: res }));
  //   console.log(this.state.race);
  // }
  render() {
    return (
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col s12">
            <br />
            <h3 className="center-align">
              <b>Bryan Soh</b>
            </h3>
            <br />
            <div className="center-align">
              <img
                src="photo-1564414661900.jpeg"
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
                <small>bryansoh95@gmail.com</small>
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
                {true ? (
                  <p style={{ padding: "0px", margin: "0px", border: "0px" }}>
                    <small>Medical Escort</small>
                  </p>
                ) : null}
                {true ? (
                  <p style={{ padding: "0px", margin: "0px", border: "0px" }}>
                    <small>Befriending</small>
                  </p>
                ) : null}
                {false ? (
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
                  <small>
                    Hi I am Bryan. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Mauris egestas sapien purus. Etiam vitae
                    mauris consectetur, pretium justo vitae, fringilla mauris.
                    Nam porta tristique eros, eu iaculis augue semper ac. Morbi
                    rutrum semper urna ut efficitur. Suspendisse tortor augue,
                    convallis ut condimentum sed, laoreet non lacus. Ut
                    tincidunt eu arcu eu volutpat. Nam fermentum facilisis
                    massa, quis aliquam mauris vulputate a. In egestas risus ex.
                    Quisque consectetur lacus et porta imperdiet. Cras sit amet
                    ex varius, fringilla velit vitae, dapibus sem.
                  </small>
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
                  <small>English, Mandarin</small>
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
                  <small>Chinese</small>
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
                  <small>Catholic</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   userId: state.auth.user.id
// });

// export default connect(mapStateToProps)(Profile);
export default Profile;
