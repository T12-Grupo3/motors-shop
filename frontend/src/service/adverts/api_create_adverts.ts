import { iAdvert } from "../../interfaces/adverts.interfaces";
import api from "../api";

const api_create_adverts = async (data: iAdvert) => {
  try {
    const res = await api.post(`/adverts`, data);

    console.log(res.data);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export default api_create_adverts;
