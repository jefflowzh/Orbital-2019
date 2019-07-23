import { SET_CURRENT_USER, SET_CAREGIVER } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  isCaregiver: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log(state);
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
        //isCaregiver:
      };
    case SET_CAREGIVER:
      return {
        ...state,
        isCaregiver: action.payload
      };
    default:
      return state;
  }
}
