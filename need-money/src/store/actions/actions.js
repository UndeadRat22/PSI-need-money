import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOAD_USERS
} from "./types";

export const login = (username, password, users) => {
  console.log(users);
  if (username == undefined || password == undefined) {
    return {
      type: LOGIN_FAILURE,
      error: "Not all fields filled"
    };
  }
  const user = users.find(registered => registered.username === username);
  if (user === undefined) {
    return {
      type: LOGIN_FAILURE,
      error: "No user found"
    };
  }
  if (user.password !== password) {
    return {
      type: LOGIN_FAILURE,
      error: "Invalid password"
    };
  }
  return {
    type: LOGIN_SUCCESS,
    payload: { user }
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
