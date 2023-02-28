import { BaseEntity } from 'typeorm';
import { IAdverts } from '../adverts';

export interface IImageAdvertsRequest {
    image_adverts: string;
  }
  
  export interface IImageAdverts {
    id: string;
    image_adverts: string;
    advertsId: string;
  }

  export interface IImageAdvertsCreate {
    galery_image: string;
    advert: IAdverts
  }

  export interface IImageAdvertsDelete extends BaseEntity {
    id: string;
    image_adverts: string;
    advertsId: string;
  }