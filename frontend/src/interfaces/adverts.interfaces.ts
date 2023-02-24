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
  description_adverts: string;
  advert: string;
}
