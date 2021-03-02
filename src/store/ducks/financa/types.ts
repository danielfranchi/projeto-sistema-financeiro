export enum DespesasTypes {
  POST_DESPESAS_REQUEST = "POST_DESPESAS_REQUEST",
  POST_DESPESAS_SUCCESS = 'POST_DESPESAS_SUCCESS',
  POST_DESPESA_FAILURE = 'POST_DESPESA_FAILURE',


  GET_REQUEST = 'GET_REQUEST',
  GET_DESPESA = 'GET_DESPESA',
  GET_FAILURE= 'GET_FAILURE',

  GET_DESPESA_REQUEST = 'GET_DESPESA_REQUEST',
  GET_DESPESA_SUCCESS = 'GET_DESPESA_SUCCESS',
  GET_DESPESA_FAILURE = 'GET_DESPESA_FAILURE'


  
}

export interface itemDespesa {
  id: number
  amount: string
  type: string
}

export interface Despesa {
  despesa: itemDespesa[];
  recebimento: string[];
  loading: boolean;
  error: boolean;
}


export interface Financa {
  despesasTotal: Despesa;
}
