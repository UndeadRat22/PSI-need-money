import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOAD_USERS,
  UPDATE_USER
} from "../actions/types";
const initialState = {
  users: [
    {
      username: "Barock",
      email: "obamer@hotmail.com",
      password: "123",
      rating: 10
    },
    {
      username: "Barock2",
      email: "obamer2@hotmail.com",
      password: "123",
      rating: 10
    },
    {
      username: "PepeREEE",
      email: "obamer3@hotmail.com",
      password: "123",
      rating: 10
    },
    {
      username: "WesAnderson",
      email: "kekistan@gadfg.com",
      password: "123",
      rating: 50
    }
  ]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return state;
    case UPDATE_USER: {
      const { user } = action;
      const without = state.users.filter(u => u.username == user.username);
      return {
        ...state,
        users: [...without, user],
        error: null
      };
    }
    case REGISTER_SUCCESS: {
      const { user } = action.payload;
      return {
        ...state,
        users: [...state.users, { ...user, rating: 0 }],
        error: null
      };
    }
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.message
      };
    default:
      return state;
  }
};

export default userReducer;
