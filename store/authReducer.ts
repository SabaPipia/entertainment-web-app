import { combineReducers } from "redux";
import { createStore } from "redux";

const initialState = {
  user: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "CLEAR_USER":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case "CHECK_USER":
      return state;
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  auth: authReducer,
});
export const store = createStore(rootReducer);
