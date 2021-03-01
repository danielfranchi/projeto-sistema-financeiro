import api from "./api";

const information = {
  informationMoeda: (moeda: any) => api.get(`/${moeda}.json?lang=pt`),
};

export default information;
