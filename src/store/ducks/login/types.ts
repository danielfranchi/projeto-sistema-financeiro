export enum UserTypes {
  GET_LOGIN_REQUEST = "GET_LOGIN_REQUEST",
  GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS",
  GET_LOGIN_FAILURE = "GET_LOGIN_FAILURE",

  GET_CADASTRO_REQUEST = "GET_CADASTRO_REQUEST",
  GET_CADASTRO_SUCCESS = "GET_CADASTRO_SUCCESS",
  GET_CADASTRO_FAILURE = "GET_CADASTRO_FAILURE",
}

export interface Cadastro {
  dataLogin: Response;
  loading: boolean;
  error: boolean;
}

export interface LoginUser {
  cadastroUser: Cadastro;
}

export interface Response {
  data: {
    accessToken: string;
  };
  status: number;
}
