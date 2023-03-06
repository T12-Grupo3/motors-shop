import { createContext, useEffect, useState } from "react";
import {
  iAdressRequest,
  iLoginRequest,
  iPasswordChangeRequest,
  iUserContext,
  iUserProvider,
  iUserRequest,
  iUserResponse,
  iUserUpdate,
} from "../interfaces/user.interface";
import api from "../service/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserProvider) => {
  const [user, setUser] = useState<iUserResponse>({} as iUserResponse);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("MOTORSSHOP:TOKEN");
  const userId = localStorage.getItem("MOTORSSHOP:USERID");

  useEffect(() => {
    const autoLogin = async () => {
      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const { data } = await api.get(`/users/${userId}`);
          setUser(data);
          setIsLogged(true);
        } catch (error) {
          console.log(error);
        }
      } else {
        // navigate("/login");
      }
      // setIsLogged(true)
    };
    autoLogin();
  }, []);

  const api_read_user = async (userId: string) => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const { data } = await api.get(`/users/${userId}`);
      setUser(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const api_create_user = async (data: iUserRequest) => {
    await api.post(`/users`, data).catch((err) => console.log(err));
  };

  const api_signin_user = async (data: iLoginRequest) => {
    try {
      const res = await api.post("/login", data);
      const { user: userResponse, token } = res.data;
      setUser(userResponse);
      setIsLogged(true);
      localStorage.setItem("MOTORSSHOP:TOKEN", token);
      localStorage.setItem("MOTORSSHOP:USERID", userResponse.id);
      navigate("home", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const api_update_user = async (data: iUserUpdate) => {
    try {
      const res = await api.patch(`/users/${userId}`, data);
      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const api_update_address = async (data: iAdressRequest) => {
    try {
      const res = await api.patch(`/users/${userId}`, data);
      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const api_delete_user = async (user_id: string) => {
    await api.delete(`/users/${user_id}`);

    logoutProfileView();
  };

  const api_change_password = async (data: iPasswordChangeRequest) => {
    try {
      const res = await api.patch(`/pass`, data);
      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const changeName = async (name: string) => {
    const splicedName = await name?.split(" ");

    setFirstName(splicedName[0].charAt(0));
    setLastName(splicedName[1].charAt(0));
  };

  const logoutProfileView = () => {
    localStorage.clear();
    localStorage.clear();
    setIsLogged(false);
    window.location.reload();
    navigate("/home");
  };

  return (
    <UserContext.Provider
      value={{
        api_create_user,
        api_signin_user,
        api_update_user,
        user,
        isLogged,
        setIsLogged,
        logoutProfileView,
        changeName,
        firstName,
        lastName,
        api_change_password,
        api_update_address,
        api_delete_user,
        api_read_user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

// export const useAuth = () => useContext(UserContext);
