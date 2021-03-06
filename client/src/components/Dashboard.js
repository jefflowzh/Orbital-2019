import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, resetCaregiver } from "../actions/authActions";
import ListingContainer from "./layout/ListingContainer";
import Carousel from "nuka-carousel";
import SearchBar from "./layout/SearchBar";
import { setCurrentListings } from "../actions/listingActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.setCurrentListings();
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.resetCaregiver();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div className="container">
          <SearchBar />
          <Carousel>
            <img src="http://albionalumni.org/wp-content/uploads/2015/01/welcome_to_our_new_website.jpg" />
            <img src="http://www.wraptite.com/images/news-announcements-banner.jpg" />
          </Carousel>
        </div>
        <ListingContainer />
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into{" "}
                  <span style={{ fontFamily: "monospace" }}>Orbital Care</span>!
                  😄
                </p>
              </h4>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, setCurrentListings, resetCaregiver }
)(Dashboard);
