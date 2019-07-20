import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="z-depth-0">
        <div class="nav-wrapper white">
          <Link
            to="/dashboard"
            style={{
              fontFamily: "monospace"
            }}
            className="col s5 brand-logo center black-text"
          >
            <i className="material-icons">add_location</i>
            Orbital Care
          </Link>
          <ul id="nav-mobile" class="right left hide-on-med-and-down">
            <li>
              <Link
                to="/Profile"
                style={{
                  fontFamily: "monospace"
                }}
                className="col s5 black-text"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                style={{
                  fontFamily: "monospace"
                }}
                className="col s5 black-text"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/FAQ"
                style={{
                  fontFamily: "monospace"
                }}
                className="col s5 black-text"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
