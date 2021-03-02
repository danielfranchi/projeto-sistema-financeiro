import { access } from "fs";
import { Reducer } from "redux";
import { DespesasTypes, Despesa } from "./types";

const INITIAL_STATE: Despesa  = {
  despesa: [],
  recebimento: [],
  loading: false,
  error: false,
};

const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {
  
  console.log(access)

  switch (action.type) {
    
    case DespesasTypes.POST_DESPESAS_REQUEST:
      return { ...state, loading: true };

    case DespesasTypes.POST_DESPESAS_SUCCESS:
      return {
        ...state,
        loading: false,
        despesa: [... state.despesa, action.payload.data]

      };

      case DespesasTypes.POST_DESPESA_FAILURE:
      return { ...state, loading: false, error: true };





      case DespesasTypes.GET_DESPESA_REQUEST:
      return { ...state, loading: true };

    case DespesasTypes.GET_DESPESA_SUCCESS:
      return {
        ...state,
        loading: false,
        despesa: action.payload.data
      };

      case DespesasTypes.GET_DESPESA_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default reducer;


