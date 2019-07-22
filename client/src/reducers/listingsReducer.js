import { SET_CURRENT_LISTINGS, UPDATE_LISTINGS } from "../actions/types";

const initialState = {
  listings: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_LISTINGS:
      return {
        ...state,
        listings: action.payload
      };
    default:
      return state;
  }
}
