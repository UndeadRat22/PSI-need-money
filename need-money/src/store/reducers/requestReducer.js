import { BORROW_SUCCESS, BORROW_FAILURE, LEND } from "../actions/types";

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

const requestReducer = (state = initialState, action) => {
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
    case LEND: {
      const { request } = action;
      const { requests } = state;
      requests.splice(request.id, 1);
      return {
        ...state,
        requests
      };
    }
    default:
      return state;
  }
};

export default requestReducer;
