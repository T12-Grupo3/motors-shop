export interface iUser {
  name: string;
}

export interface iProduct extends iAdvertRequest {
  user: iUser;
  price_adverts: number;
}

export interface iAdvertRequest {
  title_adverts: string;
  description_adverts: string;
  year_adverts: number;
  kilometers_adverts: number;
}

export interface iAdvertUpdate {
  title_adverts?: string;
  year_adverts?: number;
  type_adverts?: string;
  type_veicule?: string;
  kilometers_adverts?: number;
  description_adverts?: string;
}

export interface iImageAdvertRequest {
  image_adverts: string;
  description_adverts: string;
  advert: string;
}
