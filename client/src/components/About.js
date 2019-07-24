import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Orbital Care</b> is a listings web-app that aims to connect
              available caregivers to those who need them 🙆‍
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
