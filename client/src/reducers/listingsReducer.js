import { SET_CURRENT_LISTINGS, UPDATE_LISTINGS } from "../actions/types";

const initialState = {
  listings: [],
  searchResults: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_LISTINGS:
      return {
        ...state,
        listings: action.payload
      };
    case UPDATE_LISTINGS:
      return [...state, action.payload];
    case SEARCH_LISTINGS:
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
}
