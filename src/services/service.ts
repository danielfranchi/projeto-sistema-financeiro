import api from "./api";

export const service = {
  getCadastro: (cadastro: any) => api.post("/register", cadastro),
};

export const service2 = {
  getLogin: (cadastro: any) => api.post("/login", cadastro),
};
