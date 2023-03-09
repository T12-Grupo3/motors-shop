import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

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
import { SetOptional } from "type-fest";
import { toast } from 'react-toastify'


export interface IContext {
  auctions: iAdvert[];
  cars: iAdvert[];
  motorcycles: iAdvert[];
  adverts: iAdvert[];
  handleDelete: boolean;
  refreshKey: number;
  setHandleDelete: Dispatch<SetStateAction<boolean>>;
  api_create_adverts: (data: IRequestAdverts) => Promise<iAdvert>;
  api_create_image_advert: (data: iImageAdvertRequest) => void;
  api_delete_advert: (id_adverts: string) => void;
  api_read_adverts: () => Promise<iAdvert[]>;
  api_read_id_advert: (id_adverts: string) => Promise<iAdvert>;
  api_update_advert: (id_adverts: string, data: iAdvertUpdate) => void;
  api_create_comments: (data: iCommentsRequest) => void;
  api_read_id_comments: (id_comments: string) => Promise<iComments>;
  api_read_coments_advert: (id_advert: string) => Promise<iComments[]>;
  api_delete_comments: (id_adverts: string) => void;
  api_update_comments: (id_comments: string, data: iCommentsRequest) => void;
  setAdverts: Dispatch<SetStateAction<iAdvert[]>>;
  comments: iComments[];
  setcomments: Dispatch<SetStateAction<iComments[]>>;
}

export interface IProviderProps {
  children: React.ReactNode;
}

export const AdvertContext = createContext<IContext>({} as IContext);

const AdvertProvider = ({ children }: IProviderProps) => {
  const [adverts, setAdverts] = useState<iAdvert[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [handleDelete, setHandleDelete] = useState(false)
  const [comments, setcomments] = useState<iComments[]>([]);

  const token = localStorage.getItem("MOTORSSHOP:TOKEN");

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
      toast.success('Anúncio criado com sucesso!', { autoClose: 1000 })

      setRefreshKey((oldKey) => oldKey + 1);

      return res.data;
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao criar seu anúncio, verifique todos os campos preenchidos')
    }
  };

  const api_create_image_advert = async (data: iImageAdvertRequest) => {
    try {
      const res = await api.post("/imageadverts", data);

      return res.data;
    } catch (error) {
      toast.error('ocorreu algum erro na criação das imagens')

      console.log(error);
    }
  };
  
  const api_create_comments = async (data: iCommentsRequest) => {
    try {
      const res = await api.post("/comments", data);
      toast.success('Seu comentário foi enviado com sucesso!', { autoClose: 1000 })

      setRefreshKey((oldKey) => oldKey + 1);

      return res.data;
    } catch (error) {
      toast.error('ocorreu algum erro na criação de seu comentário')
      console.log(error);
    }
  };

  const api_read_coments_advert = async (
    id_advert: string
  ): Promise<iComments[]> => {
    const res = await api.get(`/comments/advert/${id_advert}`);

    return res.data;
  };

  
  const api_read_id_comments = async (id_comments: string) => {
    try {
      const res = await api.get(`/comments/${id_comments}/`);

      return res.data;
    } catch (error) {
      toast.error('ocorreu algum erro na visualização de seus comentários, recarregue a página')
      console.log(error);
    }
  };

  const api_delete_comments = async (id_comments: string) => {
    try {
      const res = await api.delete(`/comments/${id_comments}`);
      toast.success('Seu comentário foi deletado com sucesso!', { autoClose: 1000 })

      setHandleDelete(false)
      setRefreshKey(oldKey=>oldKey + 1)
      return res.data;
    } catch (error) {
      toast.error('ocorreu algum erro na deleção de seu comentário, atualize a página e tente novamente')
      console.log(error);
    }
  };

  const api_update_comments = async (id_comments: string, data: iCommentsRequest) => {
    try {
      const res = await api.patch(`/comments/${id_comments}/`, data);
      toast.success('Seu comentário foi editado com sucesso!', { autoClose: 1000 })
      setRefreshKey(oldKey=>oldKey + 1)

      return res.data;
    } catch (error) {
      toast.error('Ocorreu algum erro na edição de seu comentário, verifique se todos os campos foram preenchidos e tente novamente')
      console.log(error);
    }
  };

  const api_delete_advert = async (id_adverts: string) => {
    try {
      const res = await api.delete(`/adverts/${id_adverts}`);
      toast.success('Seu anúncio foi excluído com sucesso!', { autoClose: 1000 })

      setHandleDelete(false)
      setRefreshKey((oldKey) => oldKey + 1);

      return res.data;
    } catch (error) {
      toast.error('ocorreu algum erro ao excluir seu anúncio, atualize a página e tente novamente')

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
      toast.error('ocorreu algum erro na visualização de seus anúncios')
      console.log(error);
    }
  };

  const api_update_advert = async (id_advert: string, data: iAdvertUpdate) => {
    try {
      const res = await api.patch(`/adverts/${id_advert}/`, data);
      toast.success('Seu anúncio foi editado com sucesso!', { autoClose: 1000 })

      setRefreshKey((oldKey) => oldKey + 1);

      return res.data;
    } catch (error) {
      toast.error('ocorreu algum erro na edição de seu anúncio, verifique se todos os campos estão preenchidos e tente novamente')
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
        handleDelete,
        refreshKey,
        setHandleDelete,
        api_create_adverts,
        api_create_image_advert,
        api_delete_advert,
        api_read_adverts,
        api_read_id_advert,
        api_update_advert,
        api_create_comments,
        api_read_id_comments,
        api_delete_comments,
        api_update_comments,
        api_read_coments_advert,
        comments, 
        setcomments,
        setAdverts,
      }}
    >
      {children}
    </AdvertContext.Provider>
  );
};

export default AdvertProvider;
