import { ReactNode, SetStateAction } from "react";
import { iAdvert } from "./adverts.interfaces";

export interface iUserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  description_user: string;
  birth_date: string;
  isAdm: boolean;
  address: iAdressRequest;
  comments: [];
  adverts: iAdvert[];
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface iUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  description_user: string;
  birth_date: string;
  password: string;
  isAdm: boolean;
  address: iAdressRequest;
}

export interface iAdressRequest {
  street: string;
  zipCode: string;
  number: string;
  city: string;
  state: string;
  complement: string;
}

export interface iLoginRequest {
  email: string;
  password: string;
}

export interface iUserRegisterRecieve extends iAdressRequest {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  description_user: string;
  birth_date: string;
  password: string;
  password_confirm: string;
}

export interface iUserContext {
  api_create_user: (data: iUserRequest) => Promise<iUserResponse>;
  api_signin_user: (props: iLoginRequest) => Promise<void>;
  user: iUserResponse;
  isLogged: boolean
  setIsLogged: React.Dispatch<SetStateAction<boolean>>;
  logoutProfileView: ()=>void;
  changeName: ()=>void;
  firstName: string
  lastName: string
}

export interface iUserProvider {
  children: ReactNode;
}

