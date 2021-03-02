import { action } from "typesafe-actions";
import { DespesasTypes } from "./types";

export const requestDespesas = (despesa: any) =>
  action(DespesasTypes.POST_DESPESAS_REQUEST, despesa);

  export const successDespesas = (despesa: any) =>
  action(DespesasTypes.POST_DESPESAS_SUCCESS, despesa);

  export const failureDespesas = () => action(DespesasTypes.POST_DESPESA_FAILURE);



  export const getDespesa = () => action(DespesasTypes.GET_DESPESA_REQUEST)

  export const getSuccess = (data: any) =>
  action(DespesasTypes.GET_DESPESA_SUCCESS, data);

export const getFailure = () => action(DespesasTypes.GET_DESPESA_FAILURE);