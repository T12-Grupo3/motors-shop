import api from "../api";

const api_read_id_advert = async (id_advert: string) => {
  try {
    const res = await api.get(`/adverts/${id_advert}/`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default api_read_id_advert;
