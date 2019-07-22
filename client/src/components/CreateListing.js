import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateListings } from "../actions/listingActions";

class CreateListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isMedicalEscort: false,
      isBefriender: false,
      isNurse: false,
      race: "",
      religion: "",
      languages: "",
      description: ""
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "text" ? target.value : target.checked;
    const id = target.id;

    this.setState({
      [id]: value
    });
  };

  handleTextAreaChange = event => {
    this.setState({ description: event.target.value });
  };

  handleRadioChange = event => {
    this.setState({ race: event.target.id });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userData = {
      race: this.state.race,
      religion: this.state.religion,
      languages: this.state.languages,
      description: this.state.description,
      isMedicalEscort: this.state.isMedicalEscort,
      isBefriender: this.state.isBefriender,
      isNurse: this.state.isNurse,
      email: this.state.email
    };
    axios
      .post("/api/users/listings/new", userData)
      .then(user => updateListings(user));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register as a Caregiver</b>
              </h4>
            </div>
            <form noValidate onSubmit={this.handleSubmit}>
              <div className="input-field col s12">
                <h5>Services</h5>
                <p>
                  <label>
                    <input
                      type="checkbox"
                      id="isMedicalEscort"
                      checked={this.state.isMedicalEscort}
                      onChange={this.handleInputChange}
                    />
                    <span>Medical Escort</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      type="checkbox"
                      id="isBefriender"
                      checked={this.state.isBefriender}
                      onChange={this.handleInputChange}
                    />
                    <span>Befriending</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      type="checkbox"
                      id="isNurse"
                      checked={this.state.isNurse}
                      onChange={this.handleInputChange}
                    />
                    <span>Nursing</span>
                  </label>
                </p>
              </div>
              <div className="input-field col s12">
                <h5>Race</h5>
                <div>
                  <label>
                    <input
                      type="radio"
                      id="Chinese"
                      checked={this.state.race === "Chinese"}
                      onChange={this.handleRadioChange}
                    />
                    <span>Chinese</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      id="Indian"
                      checked={this.state.race === "Indian"}
                      onChange={this.handleRadioChange}
                    />
                    <span>Indian</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      id="Malay"
                      checked={this.state.race === "Malay"}
                      onChange={this.handleRadioChange}
                    />
                    <span>Malay</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      id="Others"
                      checked={this.state.race === "Others"}
                      onChange={this.handleRadioChange}
                    />
                    <span>Others</span>
                  </label>
                </div>
              </div>
              <div className="input-field col s12">
                <input
                  type="text"
                  id="religion"
                  value={this.state.religion}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="languages">Religion</label>
              </div>
              <div className="input-field col s12">
                <input
                  type="text"
                  id="languages"
                  value={this.state.languages}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="languages">Languages Spoken</label>
              </div>

              <div>
                <div className="input-field col s12">
                  <h5>Description</h5>
                  <textarea
                    type="text"
                    id="description"
                    value={this.state.description}
                    onChange={this.handleTextAreaChange}
                    placeholder="Tell us more about yourself!"
                  />
                </div>
              </div>
              <div>
                <div className="input-field col s12">
                  <h5>Please upload your relevant caregiving certificate</h5>
                  <input type="file" />
                </div>
              </div>
              <div className="input-field col s12">
                <input
                  type="text"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="languages">Verify your email</label>
              </div>
              <div className="col s12">
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateListing;
//export default connect()(CreateListing);
