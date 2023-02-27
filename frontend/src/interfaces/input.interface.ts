import { FieldValues, UseFormRegister } from "react-hook-form";
import { iUserRequest } from "./user.interface";

export interface iInput extends iInputRegister {
  type?: "text" | "password" | "email";
  title: string;
  register: UseFormRegister<iUserRequest>;
  placeholder: string;
  mask?: "999.999.999-99" | "(99) 99999-9999" | "99/99/99" | "99999.99";
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
    | "confirm_password"
    | "street"
    | "zipCode"
    | "city"
    | "state"
    | "complement";
}
