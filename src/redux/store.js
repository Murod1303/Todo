import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { tokenReducer } from "./token/tokeReducer";
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  token: tokenReducer,
  userinfo: userReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
