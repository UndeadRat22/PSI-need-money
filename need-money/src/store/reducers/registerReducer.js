import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOAD_USERS
} from "../actions/types";
const initialState = {
  users: [
    {
      username: "Barock",
      email: "obamer@hotmail.com",
      password: "123"
    },
    {
      username: "Barock2",
      email: "obamer@hotmail.com",
      password: "123"
    },
    {
      username: "PepeREEE",
      email: "obamer@hotmail.com",
      password: "123"
    },
    {
      username: "WesAnderson",
      email: "kekistan@gadfg.com",
      password: "123"
    }
  ]
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return state;
    case REGISTER_SUCCESS: {
      const { user } = action.payload;
      console.log(user);
      console.log(state);
      return {
        ...state,
        users: [...state.users, user]
      };
    }
    case REGISTER_FAILURE:
    default:
      return state;
  }
};

export default registerReducer;
