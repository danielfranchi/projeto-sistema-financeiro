import { call, put } from "redux-saga/effects";
import {Financa} from './types'


import { successDespesas, failureDespesas, getSuccess, getFailure } from '../../../store/ducks/financa/actions'

import gastos from '../../../services/financa/service'

import { AxiosResponse } from "axios";

export function* postDespesa(action: any) {
  console.log(action)
  try {
    const response: Financa = yield call(gastos.despesasGastos, action.payload);
    console.log(action.payload)

    yield put(successDespesas(response));
  } catch (err) {
    console.log(err);
    yield put(failureDespesas());
  }
}


export function* despesaTela() {
  try {
    const response: Financa = yield call(gastos.getDespesas);
    console.log(response);

    yield put(getSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(getFailure());
  }
}