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
import { toast } from "react-toastify";

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserProvider) => {
  const [user, setUser] = useState<iUserResponse>({} as iUserResponse);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentUserFirstName, setcurrentUserFirstName] = useState("");
  const [currentUserLastName, setcurrentUserLastName] = useState("");
  const [refreshKeyUser, setrefreshKeyUser] = useState(0);

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
      }
    };
    autoLogin();
  }, []);

  const api_read_user = async (userId: string) => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const { data } = await api.get(`/users/${userId}`);

      setrefreshKeyUser((oldKey) => oldKey + 1);

      return data;
    } catch (error) {
      toast.error('ocorreu algum erro na visualização de seus dados')
      console.error(error);
    }
  };

  const api_create_user = async (data: iUserRequest) => {
    try {
      await api.post(`/users`, data).catch((err) => console.log(err));
      toast.success('Seu cadastro foi feito com sucesso, faço o login', { autoClose: 1000 })
    } catch (error) {
      toast.error('Ocorreu algum erro ao finalizar seu cadastro, verifique se todos os campos estão preenchidos corretamente.')
      console.error(error)
    }
  };

  const api_signin_user = async (data: iLoginRequest) => {
    try {
      const res = await api.post("/login", data);
      const { user: userResponse, token } = res.data;
      setIsLogged(true);
      localStorage.setItem("MOTORSSHOP:TOKEN", token);
      localStorage.setItem("MOTORSSHOP:USERID", userResponse.id);
      toast.success('Login feito com sucesso!', { autoClose: 1000 })
      navigate("home", { replace: true });
    } catch (error) {
      toast.error('Email ou senha errados :( tente novamente')
      console.error(error);
    }
  };

  const api_update_user = async (data: iUserUpdate) => {
    try {
      const res = await api.patch(`/users/${userId}`, data);
      toast.success('Seu perfil foi editado com sucesso!', { autoClose: 1000 })
    } catch (error) {
      toast.error('Ocorreu algum erro ao editar seu perfil, verifique se todos os campos foram preenchidos corretamente')
      console.error(error);
    }
  };

  const api_update_address = async (data: iAdressRequest) => {
    try {
      const res = await api.patch(`/users/${userId}`, data);
      toast.success('Seu endreço foi editado com sucesso!', { autoClose: 1000 })
    } catch (error) {
      toast.error('Ocorreu algum erro ao editar seu endereço, verifique se todos os campos foram preenchidos corretamente')
      console.error(error);
    }
  };

  const api_delete_user = async (user_id: string) => {
    try {
      await api.delete(`/users/${user_id}`);
      toast.success('Seu perfil foi excluído, sentiremos sua falta, volte logo :(', { autoClose: 1000 })
      logoutProfileView();
    } catch (error) {
      toast.error('Ocorreu algum erro ao deletar seu perfil, atualize a página e tenta novamente')
      console.error(error)
    }
  };

  const api_change_password = async (data: iPasswordChangeRequest) => {
    try {
      const res = await api.patch(`/pass`, data);
      toast.success('Sua senha foi alterada, faça o login', { autoClose: 1000 })
    } catch (error) {
      toast.error('Ocorreu algum erro ao alterar sua senha, verifique se seu email está correto')
      console.error(error);
    }
  };

  const changeName = async (name: string) => {
    const splicedName = await name?.split(" ");

    setFirstName(splicedName[0].charAt(0));
    setLastName(splicedName[1].charAt(0));
  };

  const currentUserName = async (name: string) => {
    const splicedName = await name?.split(" ");

    setcurrentUserFirstName(splicedName[0].charAt(0));
    setcurrentUserLastName(splicedName[1].charAt(0));
  };

  const logoutProfileView = () => {
    localStorage.clear();
    localStorage.clear();
    setIsLogged(false);
    toast.warning('Você foi deslogado, faça login novamente', { autoClose: 1000 })
    navigate("/home", {replace: true});
    window.location.reload();
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
        currentUserLastName,
        currentUserFirstName,
        currentUserName,
        refreshKeyUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
