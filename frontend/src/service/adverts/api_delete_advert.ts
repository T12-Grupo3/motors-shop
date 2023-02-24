import api from "../api";

const api_delete_advert = async (id_adverts: string) => {
  try {
    const res = await api.delete(`/adverts/${id_adverts}/`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default api_delete_advert;
