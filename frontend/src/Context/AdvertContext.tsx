import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
// import { toast } from "react-toastify";
import { AxiosError } from "axios";

import {
  iAdvert,
  iAdvertUpdate,
  iImageAdvertRequest,
  IRequestAdverts,
} from "../interfaces/adverts.interfaces";
import { iComments, iCommentsRequest } from "../interfaces/comments.interfaces";
import api from "../service/api";
import { IError } from "../interfaces/iError";
import { iCommentsPreview } from "../interfaces/commentsPreiew";

export interface IContext {
  auctions: iAdvert[];
  cars: iAdvert[];
  motorcycles: iAdvert[];
  adverts: iAdvert[];
  api_create_adverts: (data: IRequestAdverts) => Promise<iAdvert>;
  api_create_image_advert: (data: iImageAdvertRequest) => void;
  api_delete_advert: (id_adverts: string) => void;
  api_read_adverts: () => Promise<iAdvert[]>;
  api_read_id_advert: (id_adverts: string) => Promise<iAdvert>;
  api_update_advert: (id_adverts: string, data: iAdvertUpdate) => void;
  api_create_comments: (data: iCommentsRequest) => void;
  api_read_id_comments: (id_comments: string) => Promise<iComments>;
  api_read_coments_advert: (id_advert: string) => Promise<iComments[]>;
  setAdverts: Dispatch<SetStateAction<iAdvert[]>>;
}

export interface IProviderProps {
  children: React.ReactNode;
}

export const AdvertContext = createContext<IContext>({} as IContext);

const AdvertProvider = ({ children }: IProviderProps) => {
  const [adverts, setAdverts] = useState<iAdvert[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const token = localStorage.getItem("MOTORSSHOP:TOKEN");
  const userId = localStorage.getItem("MOTORSSHOP:USERID");

  useEffect(() => {
    const getAdverts = async () => {
      const res = await api_read_adverts();

      setAdverts(res);
    };

    getAdverts();
  }, [refreshKey]);

  const sells = adverts.filter(
    (advert) => advert.type_adverts.toLowerCase() === "sell"
  );

  const auctions = adverts.filter(
    ({ type_adverts }) => type_adverts.toLowerCase() === "auction"
  );

  const cars = sells.filter(({ type_veicule }) => type_veicule === "car");

  const motorcycles = sells.filter(
    ({ type_veicule }) => type_veicule === "motorcycle"
  );

  const api_create_adverts = async (data: IRequestAdverts) => {
    try {
      const res = await api.post(`/adverts`, data);

      setRefreshKey((oldKey) => oldKey + 1);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const api_create_image_advert = async (data: iImageAdvertRequest) => {
    try {
      const res = await api.post("/imageadverts", data);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const api_create_comments = async (data: iCommentsRequest) => {
    try {
      const res = await api.post("/comments", data);

      setRefreshKey((oldKey) => oldKey + 1);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const api_read_coments_advert = async (
    id_advert: string
  ): Promise<iComments[]> => {
    const res = await api.get(`/comments/advert/${id_advert}`);

    return res.data;
  };

  // const api_create_comments = async(data:iCommentsPreview) => {

  //   api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  //   await api
  //   .post<iComments>("/comments", data)
  //   .then((response) => {

  //   toast.success("Comentário efetuado com sucesso");

  //   const { data: comment } = response;
  //   setComments([...comments, comment]);

  //   // getContactsByUser()
  //   // navigate("/dashboard")

  //   })
  //   .catch((error: AxiosError<IError>) => {
  //     toast.error("Ops, Algo deu errado")
  //     console.log(error)
  //   })
  //   };

  const api_read_id_comments = async (id_comments: string) => {
    try {
      const res = await api.get(`/comments/${id_comments}/`);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const api_delete_advert = async (id_adverts: string) => {
    console.log(id_adverts)
    // const response = await api.delete('/', {
    //   headers: { Authorization: `Bearer ${userToken}` },
    // });
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await api.delete(`/adverts/${id_adverts}`);

      setRefreshKey((oldKey) => oldKey + 1);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const api_read_adverts = async () => {
    const res = await api.get("/adverts");

    return res.data;
  };

  const api_read_id_advert = async (id_advert: string) => {
    try {
      const res = await api.get(`/adverts/${id_advert}/`);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const api_update_advert = async (id_advert: string, data: iAdvertUpdate) => {
    try {
      const res = await api.patch(`/adverts/${id_advert}/`, data);

      setRefreshKey((oldKey) => oldKey + 1);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdvertContext.Provider
      value={{
        auctions,
        cars,
        motorcycles,
        adverts,
        api_create_adverts,
        api_create_image_advert,
        api_delete_advert,
        api_read_adverts,
        api_read_id_advert,
        api_update_advert,
        api_create_comments,
        api_read_id_comments,
        api_read_coments_advert,
        setAdverts,
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

export default AdvertProvider;
