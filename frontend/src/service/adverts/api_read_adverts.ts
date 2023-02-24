import api from "../api";

const api_read_adverts = async () => {
  const res = await api.get("/adverts");

  return res.data;
};

export default api_read_adverts;
