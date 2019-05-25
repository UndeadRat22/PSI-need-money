import {
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOAD_USERS
} from "./types";

export const login = (username, password) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { username }
  };
};

export const register = (email, username, password, confirm, users) => {
  if (password !== confirm) {
    return {
      type: REGISTER_FAILURE,
      message: "passwords do not match"
    };
  }
  //duplicate username
  if (users.find(user => user.username == username) !== undefined) {
    return {
      type: REGISTER_FAILURE,
      message: "user already exists"
    };
  }

  return {
    type: REGISTER_SUCCESS,
    payload: {
      user: {
        email,
        username,
        password
      }
    }
  };
};

export const loadUsers = () => {
  return { type: { LOAD_USERS } };
};
