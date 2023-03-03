import { iAdvert, IRequestAdverts } from "./adverts.interfaces";
import { iUserRequest, iUserResponse } from "./user.interface";


export interface iComments {
  comments: string;
  user: iUserRequest;
  adverts: IRequestAdverts;
  id: string;
}

export interface iCommentsRegisterRecieve {
  comments: string;
}


export interface iCommentsRequest {
  comments: string;
}