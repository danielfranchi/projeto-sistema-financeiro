import { action } from "typesafe-actions"
import { MoedasTypes } from "./types"

export const MoedaRequest = () => action(MoedasTypes.GET_REQUEST)

export const MoedaSuccess = (data: any) => action(MoedasTypes.GET_SUCCESS, data)

export const MoedaFailure = () => action(MoedasTypes.GET_FAILURE)





export const infRequest = (moeda: any) => action(MoedasTypes.INF_REQUEST, moeda)

export const infSuccess = (data: any) => action(MoedasTypes.INF_SUCCESS, data)

export const infFailure = () => action(MoedasTypes.INF_FAILURE)
