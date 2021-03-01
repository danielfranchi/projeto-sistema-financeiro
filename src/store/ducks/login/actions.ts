import { action } from "typesafe-actions";
import { UserTypes } from "./types";

export const loginRequest = (login: any) =>
  action(UserTypes.GET_LOGIN_REQUEST, login);

export const loginSuccess = (data: any) =>
  action(UserTypes.GET_LOGIN_SUCCESS, data);

export const loginFailure = () => action(UserTypes.GET_LOGIN_FAILURE);

export const CadastroRequest = (cadastro: any) =>
  action(UserTypes.GET_CADASTRO_REQUEST, cadastro);

export const CadastroSuccess = (data: any) =>
  action(UserTypes.GET_CADASTRO_SUCCESS, data);

export const CadastroFailure = () => action(UserTypes.GET_CADASTRO_FAILURE);
