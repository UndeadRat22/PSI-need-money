import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/types";
const initialState = {
  user: null,
  error: null,
  success: undefined
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { user } = action.payload;
      return {
        ...state,
        user,
        error: null,
        success: true
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        user: null,
        error: action.error,
        success: false
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
