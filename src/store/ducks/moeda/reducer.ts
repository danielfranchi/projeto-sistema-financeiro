import { Reducer } from "redux"
import { MoedasTypes } from "./types"


const INITIAL_STATE = {
  moedas: [],
  inf: [],
  loading: false,
  error: false
}

const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {

  
  switch (action.type) {

    case MoedasTypes.GET_REQUEST:
      return { ...state, loading: true }

    case MoedasTypes.GET_SUCCESS:


      return {
        ...state,
        loading: false,
        moedas: Object.values(action.payload.data)
      }
      
    case MoedasTypes.GET_FAILURE:
      return { ...state, loading: false, error: true }





      case MoedasTypes.INF_REQUEST:
      return { ...state, loading: true }

      case MoedasTypes.INF_SUCCESS:
        return {
          ...state,
          loading: false,
          inf: Object.values(action.payload.data)
        }
      
    case MoedasTypes.INF_FAILURE:
      return { ...state, loading: false, error: true }

    default:
      return state
  }
}

export default reducer
