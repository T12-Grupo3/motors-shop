import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  StyledNavContainer,
  StyledDiv,
  StyledLogged,
  StyledLoggout,
} from "./style";

const user = {
  name: "Samuel Leão",
  avatar: "https://cdn-icons-png.flaticon.com/512/6386/6386976.png",
};

const NavBar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

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
              <img src={user.avatar} alt="" width={"20px"} />
              <button onClick={() => setIsLogged(false)}>{user.name}</button>
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
