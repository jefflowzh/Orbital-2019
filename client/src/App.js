import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {
  setCurrentUser,
  logoutUser,
  setCaregiver
} from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Profile from "./components/Profile";
import CreateListing from "./components/CreateListing";
import SearchResults from "./components/SearchResults";
import ListingDetails from "./components/ListingDetails";
import axios from "axios";
// import setCaregiver from "./actions/authActions";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  console.log(decoded);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
  // const userID = { id: decoded.id };
  // axios
  //   .post("/api/users/caregiverCheck", userID)
  //   .then(res => (res.data ? setCaregiver() : console.log()));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/faq" component={FAQ} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute
              exact
              path="/searchResults"
              component={SearchResults}
            />
            <PrivateRoute
              exact
              path="/listings/new"
              component={CreateListing}
            />
            <PrivateRoute
              exact
              path="/listingDetails"
              component={ListingDetails}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
