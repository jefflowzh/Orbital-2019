import React from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" id="autocomplete-input" class="autocomplete" />
              <label for="autocomplete-input">Search for a caregiver</label>
              <i class="material-icons prefix">search</i>
              <div>
                Or, sign up as one <Link to="/listings/new">here</Link>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
