import { SET_CURRENT_USER, GET_USER_DATA } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case GET_USER_DATA:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
