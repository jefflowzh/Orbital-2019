import React, { Component } from "react";
import axios from "axios";
class Profile extends Component {
  state = {
    image: ""
  };
  // componentWillMount() {
  //   this.getImages();
  // }
  // getImages = () => {
  //   var self = this;
  //   axios
  //     .get("/api/users/image")
  //     .then(res => self.setState({ image: res.imageName }));
  //   console.log("AFTER AXIOS CALL" + this.state.image);
  //   console.log("RESDATA CHECK" + this.state.image.data);
  // };
  render() {
    return (
      <div>
        <img alt="Poster" id="poster" src="/photo-1564217904112.jpeg" />

        {/* <img src={this.state.image} /> */}
        <h2>Profile</h2>
      </div>
    );
  }
}

export default Profile;
