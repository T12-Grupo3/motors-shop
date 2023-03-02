import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import {
  StyledNavContainer,
  StyledDiv,
  StyledLogged,
  StyledLoggout,
} from "./style";

const NavBar = () => {
  const navigate = useNavigate();

  const {isLogged, setIsLogged, logoutProfileView, user, firstName, lastName} = useContext(UserContext)

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
            {/* <a href="/home#cars">cars</a> */}
            <Link to={"/"}>Carros</Link>
          </li>
          <li>
            <Link to={"/"}>Motos</Link>
          </li>
          <li>
            <Link to={"/"}>Leilão</Link>
          </li>

          {isLogged ? (
            <StyledLogged>
              <div className="imgProfile">
                <p> {firstName}{lastName} </p>
              </div>
              <button onClick={() => logoutProfileView()}>{user.name}</button>
            </StyledLogged>
          ) : (
            <>
              <StyledLoggout>
                <Link to={"/login"}>Fazer login</Link>

                <button
                  onClick={() => navigate("/register", { replace: true })}
                >
                  Cadastrar
                </button>
              </StyledLoggout>
            </>
          )}
        </nav>
      </StyledNavContainer>
    </StyledDiv>
  );
};

export default NavBar;
