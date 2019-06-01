import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOAD_USERS,
  BORROW_SUCCESS,
  LEND,
  BORROW_FAILURE,
  UPDATE_USER
} from "./types";

export const borrow = (username, users, amount) => {
  return function(dispatch, getState) {
    const user = users.find(registered => registered.username === username);
    if (user !== undefined && user.rating - amount > 0) {
      dispatch({
        type: BORROW_SUCCESS,
        request: {
          username,
          amount
        }
      });
      user.rating -= amount;
      dispatch({
        type: UPDATE_USER,
        user
      });
    } else
      dispatch({
        type: BORROW_FAILURE,
        request: null,
        reason: "Rating too low"
      });
  };
};

export const lend = request => {
  return function(dispatch, getState) {
    const { login, registration } = getState();
    const { users } = registration;
    console.log(login);
    const user = users.find(r => r.username === login.user.username);
    user.rating += request.data.amount;
    dispatch({ type: LEND, request });
    dispatch({ type: UPDATE_USER, user });
  };
};

export const login = (username, password, users) => {
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
