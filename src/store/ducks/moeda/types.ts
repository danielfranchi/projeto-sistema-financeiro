
export enum MoedasTypes {
  GET_REQUEST = 'GET_REQUEST',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_FAILURE = 'GET_FAILURE',


  INF_REQUEST = 'INF_REQUEST',
  INF_SUCCESS = 'INF_SUCCESS',
  INF_FAILURE = 'INF_FAILURE',

}


export interface DataMoeda {
    currency_code: string
    name: string
    country_name: string
}

export interface ReduxMoeda {
  moedas: DataMoeda[]
  inf: Inf[]
  loading: boolean
  error: boolean
}

export interface Inf{
  name: string,
  symbol: string
  currency_code: string
}

export interface MoedasMundo{
  moedasMundo: ReduxMoeda
}