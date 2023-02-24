import { iAdvertUpdate } from "../../interfaces/adverts.interfaces";
import api from "../api";

const api_update_advert = async (id_advert: string, data: iAdvertUpdate) => {
    try {
        const res = await api.patch(`/adverts/${id_advert}/`, data)

        return res.data
    } catch (error) {
        console.log(error)
    }
};

export default api_update_advert;
