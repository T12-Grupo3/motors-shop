export interface iUser {
  name: string;
}

export interface iProduct extends iAdvert {
  user: iUser;
  price_adverts: number;
}

export interface iAdvert {
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
