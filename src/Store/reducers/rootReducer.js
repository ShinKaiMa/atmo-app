import { sidenavInfoReducer } from "./sidenavInfoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sidenavInfo: sidenavInfoReducer
});

export default rootReducer;
