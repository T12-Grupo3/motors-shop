import { IRequestAdverts } from "./adverts.interfaces";
import { iUserRequest } from "./user.interface";


export interface iComments {
  user: iUserRequest;
  adverts: IRequestAdverts;
  id: string;
  comments: string;
  createdAt_adverts: string;
  updatedAt_adverts: string;
    
}

export interface iCommentsRegisterRecieve {
  comments: string;
}


export interface iCommentsRequest {
  comments: string;
  
  
}

export interface iCommentsCalculateDate {
  createdAt_adverts: string;
}

export interface iCommentsProps {
  createdAt_adverts: string;
  updatedAt_adverts: string;

}

export interface iCommentsUpdate {
  comments?: string;
  
  
}
export interface iIdComments {
  id_comments: string;
}