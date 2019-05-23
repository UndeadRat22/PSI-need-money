import { LOGIN_SUCCESS } from "../actions/types";
const initialState = {
  username: null,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { username } = action.payload;
      return {
        ...state,
        username,
        error: null
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
