import { call, put } from "redux-saga/effects";

import { loginSuccess, loginFailure } from "./actions";
import { service, service2 } from "../../../services/service";

import { Response } from "./types";

export function* getLogin(action: any) {
  try {
    const response: Response = yield call(service2.getLogin, action.payload);
    console.log(response.status);
    localStorage.setItem("token", response.data.accessToken);

    yield put(loginSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(loginFailure());
  }
}

export function* getCadastro(action: any) {
  try {
    const response: Response = yield call(service.getCadastro, action.payload);
    yield put(loginSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(loginFailure());
  }
}
