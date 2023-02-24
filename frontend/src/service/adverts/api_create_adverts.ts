import { iAdvertRequest } from "../../interfaces/adverts.interfaces";
import api from "../api";

const api_create_adverts = async (data: iAdvertRequest) => {
  try {
    const res = await api.post(`/adverts`, data);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default api_create_adverts;
