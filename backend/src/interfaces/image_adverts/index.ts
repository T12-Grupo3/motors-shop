import { BaseEntity } from 'typeorm';

export interface IImageAdvertsRequest {
    image_adverts: string;
    description_image: string;
    
  }
  
  export interface IImageAdverts {
    id: string;
    image_adverts: string;
    description_image: string;
    createdAt_adverts: Date;
    updatedAt_adverts: Date;
    advertsId: string;
  }

  export interface IImageAdvertsCreate {
    image_adverts: string;
    description_image: string;
    advertsId: string;
  }

  export interface IImageAdvertsDelete extends BaseEntity {
    id: string;
    image_adverts: string;
    description_image: string;
    createdAt_adverts: Date;
    updatedAt_adverts: Date;
    advertsId: string;
  }