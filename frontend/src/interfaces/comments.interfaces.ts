import { iAdvert, IRequestAdverts } from "./adverts.interfaces";
import { iUserRequest, iUserResponse } from "./user.interface";


export interface iComments {
  comments: string;
  user: iUserRequest;
  advert: IRequestAdverts;
  id: string;
}

export interface iCommentsRegisterRecieve {
  comments: string;
  user: iUserRequest;
  advert: IRequestAdverts;
}


export interface iCommentsRequest {
  comments: string;
  user: iUserRequest;
  advert: IRequestAdverts;
  
}