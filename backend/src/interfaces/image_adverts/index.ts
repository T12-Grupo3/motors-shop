import { BaseEntity } from 'typeorm';
import { IAdverts } from '../adverts';

export interface IImageAdvertsRequest {
  galery_image: string;
  }
  
  export interface IImageAdverts {
    id: string;
    galery_image: string;
    advertsId: string;
  }

  export interface IImageAdvertsCreate {
    galery_image: string;
    advertsId: string;
  }

  export interface IImageAdvertsDelete extends BaseEntity {
    id: string;
    galery_image: string;
    advertsId: string;
  }