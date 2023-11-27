import axios from "axios";

const baseUrl = "https://gateway.czlondon.com/entegration";

const getFilter = async () => {
  const { data } = await axios.post(baseUrl + "/getFilter");
  return data[0];
};

const apiService = {
  getFilter,
};

export default apiService;
