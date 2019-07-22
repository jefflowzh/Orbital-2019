import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { searchListings } from "../../actions/listingActions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    searchListings(this.state.query);
    this.props.history.push("/about");
  };

  render() {
    return (
      <div class="container">
        <form onSubmit={this.handleSubmit}>
          <div class="row">
            <div class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input
                    type="text"
                    id="autocomplete-input"
                    class="autocomplete"
                    value={this.state.query}
                    onChange={this.handleChange}
                  />
                  <label for="autocomplete-input">Search for a caregiver</label>
                  <i class="material-icons prefix">search</i>
                  <div>
                    Or, sign up as one <Link to="/listings/new">here</Link>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
