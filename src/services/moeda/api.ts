import axios from "axios";

const baseApiURL = "https://v2.api.forex/infos";

const api = axios.create({
  baseURL: baseApiURL,
});

export default api;
