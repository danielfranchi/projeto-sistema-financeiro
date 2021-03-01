import axios from "axios";

const moedas = {
  getMoedas: () => axios.get("https://v2.api.forex/infos/currencies.json"),
};

export default moedas;
