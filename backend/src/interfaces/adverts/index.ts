export interface IAdvertsRequest {
  title_adverts: string;
  year_adverts: string;
  type_adverts: string;
  type_veicule: string
  price_adverts: number
  kilometers_adverts: string;
  description_adverts: string;
  userId: string;
}

export interface IAdverts {
  id: string;
  title_adverts: string;
  year_adverts: string;
  type_adverts: string;
  type_veicule: string
  price_adverts: number
  kilometers_adverts: string;
  description_adverts: string;
  createdAt_adverts: Date;
  updatedAt_adverts: Date;
  isAvailable: boolean;
  userId: string;
}

export interface IAdvertsUpdate {
  id: string;
  title_adverts: string;
  year_adverts: string;
  type_adverts: string;
  type_veicule: string;
  price_adverts: number
  kilometers_adverts: string;
  description_adverts: string;

 
}

export interface IAdvertsDelete {
   isAvailable: boolean;
}