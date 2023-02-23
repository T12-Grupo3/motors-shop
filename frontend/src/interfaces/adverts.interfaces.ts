export interface iUser {
  name: string;
}

export interface iAuction extends iProduct {}

export interface iProduct {
  title_adverts: string;
  description_adverts: string;
  user: iUser;
  year_adverts: number;
  kilometers_adverts: number;
  price_adverts: number;
}
