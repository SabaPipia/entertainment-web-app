import { combineReducers } from "redux";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["user", "isAuthenticated"],
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
// export const rootReducer = combineReducers({
//   auth: authReducer,
// });
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});
export const store = createStore(rootReducer);
export const persistor = persistStore(store);
// export const store = createStore(rootReducer);
