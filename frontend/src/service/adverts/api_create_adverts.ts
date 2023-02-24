import { IRequestAdverts } from "../../interfaces/adverts.interfaces";
import api from "../api";

const api_create_adverts = async (data: IRequestAdverts) => {
  try {
    const res = await api.post(`/adverts`, data);
    console.log("CONSEGUIMOS, ADVERTS CRIADO!")

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default api_create_adverts;
