import moedasMundo from "./moeda/reducer";
import cadastroUser from "./login/reducer";
import despesasTotal from './financa/reducer'
import { combineReducers } from "redux";

const createRootReducer = () =>
  combineReducers({
    cadastroUser,
    moedasMundo,
    despesasTotal
  });

export default createRootReducer;
