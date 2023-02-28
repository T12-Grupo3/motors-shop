import { BaseEntity } from 'typeorm';

export interface IImageAdvertsRequest {
    image_adverts: string;
  }
  
  export interface IImageAdverts {
    id: string;
    image_adverts: string;
    advertsId: string;
  }

  export interface IImageAdvertsCreate {
    image_adverts: string;
    advertsId: string;
  }

  export interface IImageAdvertsDelete extends BaseEntity {
    id: string;
    image_adverts: string;
    advertsId: string;
  }