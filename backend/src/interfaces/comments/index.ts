import { BaseEntity } from 'typeorm';

export interface ICommentsRequest {
    comments: string;
    advertsId: string;
    userId: string;
    
  }
  
  export interface IComments {
    id: string;
    comments: string;
    createdAt_adverts: Date;
    updatedAt_adverts: Date;
    advertsId: string;
    userId: string;

  }

  export interface ICommentsDelete extends BaseEntity {
    id: string;
    comments: string;
    createdAt_adverts: Date;
    updatedAt_adverts: Date;
    advertsId: string;
    userId: string;
  }