export interface IAdvertsRequest {
  title_adverts: string;
  year_adverts: string;
  type_adverts: string;
  kilometers_adverts: string;
  description_adverts: string;
}

export interface IAdverts {
  id: string;
  title_adverts: string;
  year_adverts: string;
  type_adverts: string;
  kilometers_adverts: string;
  description_adverts: string;
  createdAt_adverts: Date;
  updatedAt_adverts: Date;
  isAvailable: boolean;
}

export interface IAdvertsUpdate {
  id: string;
  title_adverts: string;
  year_adverts: string;
  type_adverts: string;
  kilometers_adverts: string;
  description_adverts: string;
}
