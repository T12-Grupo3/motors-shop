import { createContext } from "react";
import {
  iUserContext,
  iUserProvider,
  iUserRequest,
} from "../interfaces/user.interface";
import api from "../service/api";

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserProvider) => {
  const api_create_user = async (data: iUserRequest) => {
    try {
      const res = await api.post(`/users`, data);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ api_create_user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
