import axios from "axios";

const baseUrl = "https://gateway.czlondon.com/entegration";

const getFilter = async (body: null | object = null) => {
  const { data } = await axios.post(baseUrl + "/getFilter", body ? body : {});
  return data[0];
};

const apiService = {
  getFilter,
};

export default apiService;
