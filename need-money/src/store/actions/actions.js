import { LOGIN_SUCCESS } from "./types";

export const login = (username, password) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { username }
  };
};
