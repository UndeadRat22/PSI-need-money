import { BORROW_SUCCESS, BORROW_FAILURE } from "../actions/types";

const initialState = {
  requests: [
    {
      username: "Barock",
      amount: 10
    },
    {
      username: "Barock",
      amount: 15
    }
  ]
};

const borrowReducer = (state = initialState, action) => {
  switch (action.type) {
    case BORROW_SUCCESS: {
      const { request } = action;
      return {
        ...state,
        requests: [...state.requests, request],
        success: {
          value: true
        }
      };
    }
    case BORROW_FAILURE: {
      const { reason } = action;
      return {
        ...state,
        success: {
          value: false,
          reason
        }
      };
    }
    default:
      return state;
  }
};

export default borrowReducer;
