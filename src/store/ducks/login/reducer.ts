import { Reducer } from "redux";
import { UserTypes } from "./types";

const INITIAL_STATE = {
  dataLogin: [],
  dataCadastro: [],
  loading: false,
  error: false,
};

const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.GET_LOGIN_REQUEST:
      return { ...state, loading: true };

    case UserTypes.GET_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        dataLogin: action.payload,
      };

    case UserTypes.GET_LOGIN_FAILURE:
      return { ...state, loading: false, error: true };

    case UserTypes.GET_CADASTRO_REQUEST:
      return { ...state, loading: true };

    case UserTypes.GET_CADASTRO_SUCCESS:
      return {
        ...state,
        loading: false,
        dataCadastro: action.payload,
      };

    case UserTypes.GET_CADASTRO_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
