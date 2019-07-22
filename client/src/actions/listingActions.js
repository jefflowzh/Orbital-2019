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
