import { iAdvert } from "./adverts.interfaces";

export interface iUserResponse {
  id: string
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  description_user: string;
  birth_date: string;
  isAdm: boolean;
  address: iAdressRequest
  comments: []
  adverts: iAdvert[]
  createdAt: Date
  updatedAt: Date
  isActive: boolean

}

export interface iUserRequest extends iAdressRequest {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  description_user: string;
  birth_date: string;
  password: string;
  confirm_password: string;
  isAdm: boolean;
  address: iAdressRequest
  comments: []
  adverts: iAdvert[]
}

export interface iAdressRequest {
  street: string;
  zipCode: string;
  number: string;
  city: string;
  state: string;
  complement: string;
}
