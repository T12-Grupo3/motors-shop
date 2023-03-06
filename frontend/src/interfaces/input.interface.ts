import { UseFormRegister } from "react-hook-form";
import { iUserRegisterRecieve } from "./user.interface";

export interface iInput extends iInputRegister {
  type?: "text" | "password" | "email";
  title: string;
  register: UseFormRegister<iUserRegisterRecieve>;
  placeholder: string;
  mask?: "999.999.999-99" | "(99) 99999-9999" | "9999-99-99" | "99999.999";
}

interface iInputRegister {
  id:
    | "number"
    | "name"
    | "email"
    | "cpf"
    | "phone_number"
    | "description_user"
    | "birth_date"
    | "password"
    | "password_confirm"
    | "street"
    | "zipCode"
    | "city"
    | "state"
    | "complement";
}

export interface iButtonRegister {
  isAdm?: boolean;
}
