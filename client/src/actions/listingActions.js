import axios from "axios";
import { SET_CURRENT_LISTINGS, UPDATE_LISTINGS } from "../actions/types";

export const setCurrentListings = () => dispatch => {
  axios.get("/api/users/dashboard").then(res =>
    dispatch({
      type: SET_CURRENT_LISTINGS,
      payload: res.data
    })
  );
};

export const updateListings = user => dispatch => {
  //console.log(user.data);
  dispatch({
    type: UPDATE_LISTINGS,
    payload: user.data
  });
};

export const searchListings = query => dispatch => {
  axios.get("/api/users/dashboard/search", query).then(res =>
    dispatch({
      type: SEARCH_LISTINGS,
      payload: res.data
    })
  );
};
