import { all, takeLatest } from "redux-saga/effects";

import { UserTypes } from "./login/types";
import { getLogin, getCadastro } from "./login/sagas";

import { MoedasTypes } from "./moeda/types";
import { getMoeda, infMoeda } from "./moeda/sagas";

import {DespesasTypes} from './financa/types'
import {postDespesa, despesaTela} from './financa/sagas'

export default function* rootSaga(): any {
  return yield all([
    takeLatest(UserTypes.GET_LOGIN_REQUEST, getLogin),
    takeLatest(UserTypes.GET_CADASTRO_REQUEST, getCadastro),

    takeLatest(MoedasTypes.GET_REQUEST, getMoeda),
    takeLatest(MoedasTypes.INF_REQUEST, infMoeda),

    takeLatest(DespesasTypes.POST_DESPESAS_REQUEST, postDespesa),
    takeLatest(DespesasTypes.GET_DESPESA_REQUEST, despesaTela),


  ]);
}


