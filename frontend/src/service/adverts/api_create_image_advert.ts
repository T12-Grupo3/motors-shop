import { iImageAdvertRequest } from "../../interfaces/adverts.interfaces";
import api from "../api";

const api_create_image_advert = async (data: iImageAdvertRequest) => {
  try {
    const res = await api.post("/imageadverts", data);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default api_create_image_advert;
