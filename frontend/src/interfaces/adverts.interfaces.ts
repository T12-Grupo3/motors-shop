import { iComments } from "./comments.interfaces";
import { iImageAdverts } from "./image_adverts.interface";
import { iUserResponse } from "./user.interface";

export interface iAdvertProduct {
  title_adverts: string;
  description_adverts: string;
  year_adverts: string;
  kilometers_adverts: string;
  price_adverts: number;
  cover_image_adverts: string;
  id?: string;
}

export interface iAdvertRequest extends iAdvertProduct {
  type_adverts: "sell" | "auction";
  type_veicule: "car" | "motorcycle";
}

export interface IRequestAdverts {
  type_adverts: string;
  title_adverts: string;
  year_adverts: string;
  type_veicule: string;
  kilometers_adverts: string;
  description_adverts: string;
  cover_image_adverts: string;
  galery_image: string[];
  price_adverts: number;
}

export interface IRequestAdvertsExtended extends IRequestAdverts {
  tipoAnuncio: string;
  tipoVeiculo: string;
}

export interface iAdvertUpdate {
  title_adverts?: string;
  year_adverts?: number;
  type_adverts?: string;
  type_veicule?: string;
  price_adverts?: number;
  kilometers_adverts?: number;
  description_adverts?: string;
  isAvailable?: boolean;
  image_adverts?: Array<string>;
  cover_image_advert?: string;
}

export interface iAdvertUpdateExtended extends iAdvertUpdate {
  tipoAnuncio: string;
  tipoVeiculo: string;
  tipoPublicado: boolean;
}

export interface iImageAdvertRequest {
  galery_image: string[];
}

export interface iAdvert {
  id: string;
  title_adverts: string;
  year_adverts: string;
  type_adverts: "sell" | "auction";
  type_veicule: "car" | "motorcycle";
  kilometers_adverts: string;
  description_adverts: string;
  price_adverts: number;
  isAvailable: boolean;
  cover_image_adverts: string;
  createdAt_adverts: Date;
  updatedAt_adverts: Date;
  imageAdverts: iImageAdverts[];
  user: iUserResponse;
  comments: iComments[];
}

export interface iIdAdvert {
  id_adverts: string;
}

export interface iDeleteAdverts extends iIdAdvert {
  handleCloseEdit: () => void;
}

export interface iEditAdvertModal {
  advert: iAdvert;
}
