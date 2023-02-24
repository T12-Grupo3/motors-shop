import { createContext, ReactNode, useEffect, useState, Dispatch, SetStateAction } from "react";
import { iAdvert, iAdvertUpdate, iImageAdvertRequest, IRequestAdverts } from "../interfaces/adverts.interfaces";
import api from "../service/api";

export interface IContext {
  auctions: iAdvert[];
  cars: iAdvert[];
  motorcycles: iAdvert[];
  adverts: iAdvert[]
  api_create_adverts: (props: IRequestAdverts)=>void;
  api_create_image_advert: (props: iImageAdvertRequest)=>void;
  api_delete_advert: (props: string)=>void;
  api_read_adverts: ()=> Promise<iAdvert[]>;
  api_read_id_advert: (props: string)=>Promise<iAdvert>;
  api_update_advert: (idProps: string, props: iAdvertUpdate)=>void;
  setAdverts: Dispatch<SetStateAction<iAdvert[]>>
}

export interface IProviderProps {
  children: ReactNode;
}

export const AdvertContext = createContext<IContext>({} as IContext);

const AdvertProvider = ({ children }: IProviderProps) => {
  const [adverts, setAdverts] = useState<iAdvert[]>([]);

  useEffect(() => {
    const getAdverts = async () => {
      const res = await api_read_adverts();

      setAdverts(res);
    };

    getAdverts();
  }, []);

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
      console.log("CONSEGUIMOS, ADVERTS CRIADO!")
  
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const api_create_image_advert = async (data: iImageAdvertRequest) => {
    try {
      const res = await api.post("/imageadverts", data);
      console.log(res)
  
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const api_delete_advert = async (id_adverts: string) => {
    try {
      const res = await api.delete(`/adverts/${id_adverts}/`);
  
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
        const res = await api.patch(`/adverts/${id_advert}/`, data)

        return res.data
    } catch (error) {
        console.log(error)
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
        setAdverts
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

export default AdvertProvider;
