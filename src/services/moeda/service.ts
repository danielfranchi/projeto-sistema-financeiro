import api from "./api";

const information = {
  informationMoeda: (moeda: any) => api.get(`/currency/${moeda}.json?lang=pt`),
};

export default information;
