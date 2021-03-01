import moedasMundo from "./moeda/reducer";
import cadastroUser from "./login/reducer";
import { combineReducers } from "redux";

const createRootReducer = () =>
  combineReducers({
    cadastroUser,
    moedasMundo,
  });

export default createRootReducer;
