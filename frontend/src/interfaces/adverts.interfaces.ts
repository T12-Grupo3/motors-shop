export interface iAdvertProduct {
  title_adverts: string;
  description_adverts: string;
  year_adverts: string;
  kilometers_adverts: string;
  price_adverts: number;
}

export interface iAdvertRequest extends iAdvertProduct {
  type_adverts: "sell" | "auction";
  type_veicule: "car" | "motorcycle";
}

export interface IRequestAdverts {
  type_adverts: string;
  title_adverts: string;
  year_adverts: string
  type_veicule: string
  kilometers_adverts: string
  description_adverts: string
  image_adverts: Array<string>
  price_adverts: number

};

export interface iAdvertUpdate {
  title_adverts?: string;
  year_adverts?: number;
  type_adverts?: string;
  type_veicule?: string;
  price_adverts?: number
  kilometers_adverts?: number;
  description_adverts?: string;
  isAvailable?: boolean
  image_adverts?: Array<string>
}

export interface iImageAdvertRequest {
  image_adverts: string;
  description_image: string;
  advertsId: string;
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
  createdAt_adverts: Date;
  updatedAt_adverts: Date;
}

export interface iIdAdvert {
  id_adverts: string
}