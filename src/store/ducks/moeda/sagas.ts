import { call, put } from "redux-saga/effects"

import {MoedaFailure, MoedaSuccess, infSuccess, infFailure } from "../moeda/actions"
import  moedas from "../../../services/serviceMoeda"
import information from '../../../services/moeda/service'

import { AxiosResponse } from "axios"

export function* getMoeda() {
  try {
    const response: AxiosResponse = yield call(moedas.getMoedas)
    console.log(response)
    
    yield put(MoedaSuccess(response))

  } catch (err) {
  
    console.log(err)
    yield put(MoedaFailure())
  }
}



export function* infMoeda(action: any) {
  try {
    const response: AxiosResponse = yield call(information.informationMoeda, action.payload)
    console.log(response)
    
    yield put(infSuccess(response))

  } catch (err) {
  
    console.log(err)
    yield put(infFailure())
  }
}


