import { createContext, ReactNode, useEffect, useState } from "react";
import { iAdvert } from "../interfaces/adverts.interfaces";
import api_read_adverts from "../service/adverts/api_read_adverts";

export interface IContext {
  auctions: iAdvert[];
  cars: iAdvert[];
  motorcycles: iAdvert[];
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

  return (
    <AdvertContext.Provider
      value={{
        auctions,
        cars,
        motorcycles,
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

export default AdvertProvider;
