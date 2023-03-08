import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import DeleteUserModal from "../../modals/DeleteUserModal";
import EditAddressModal from "../../modals/EditAddressModal";
import EditProfileModal from "../../modals/EditProfileModal";
import Button from "../Button";

import {
  StyledNavContainer,
  StyledDiv,
  StyledLogged,
  StyledLoggout,
  StyledDropDown,
  StyledUser,
} from "./style";

const NavBar = () => {
  const navigate = useNavigate();

  const {
    isLogged,
    logoutProfileView,
    user,
    currentUserFirstName,
    currentUserLastName,
    api_read_user,
    currentUserName,
  } = useContext(UserContext);

  const userId = localStorage.getItem("MOTORSSHOP:USERID");

  useEffect(() => {
    const getNameUser = async () => {
      const nameUser = await api_read_user(userId!);
      console.log(nameUser)
      currentUserName(nameUser.name);
    };
    getNameUser();
  }, []);

  return (
    <StyledDiv>
      <StyledNavContainer>
        <div>
          <Link to={"/home"}>
            <img
              src={require("../../utils/image/motors-shop.png")}
              alt="motors shop"
            />
          </Link>
        </div>
        <nav>
          <li>
            <Link to="/home#cars">Carros</Link>
          </li>
          <li>
            <Link to="/home#motorcycles">Motos</Link>
          </li>
          <li>
            <Link to="/home#auctions">Leilão</Link>
          </li>

          {isLogged ? (
            <StyledLogged>
              <StyledDropDown>
                <StyledUser>
                  <div className="imgProfile">
                    <p>
                      {currentUserFirstName}
                      {currentUserLastName}
                    </p>
                  </div>
                  <button type="button">{user.name}</button>
                </StyledUser>
                <div className="dropdown-content">
                  <div>
                    <EditProfileModal />
                    <EditAddressModal />
                    <DeleteUserModal user_id={user.id} />
                    {user.isAdm ? (
                      <button
                        onClick={() =>
                          navigate(`/profileview/${user.id}`, { replace: true })
                        }
                      >
                        Meus anuncios
                      </button>
                    ) : (
                      <></>
                    )}
                    <button onClick={() => logoutProfileView()}>Sair</button>
                  </div>
                </div>
              </StyledDropDown>
            </StyledLogged>
          ) : (
            <>
              <StyledLoggout>
                <Link to={"/login"}>Fazer login</Link>

                <Button
                  onClick={() => navigate("/register", { replace: true })}
                >
                  Cadastrar
                </Button>
              </StyledLoggout>
            </>
          )}
        </nav>
      </StyledNavContainer>
    </StyledDiv>
  );
};

export default NavBar;
