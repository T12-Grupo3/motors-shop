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
}

export interface iAdressRequest {
  street: string;
  zipCode: string;
  number: string;
  city: string;
  state: string;
  complement: string;
}
