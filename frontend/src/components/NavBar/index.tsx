import { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledContainer,
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

  return (
    <StyledDiv>
      <StyledContainer>
        <div>
          <img
            src={require("../../utils/image/motors-shop.png")}
            alt="motors shop"
          />
        </div>
        <nav>
          <li>
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
                <Link to={"/"}>Fazer login</Link>
                <button onClick={() => setIsLogged(true)}>Cadastrar</button>
              </StyledLoggout>
            </>
          )}
        </nav>
      </StyledContainer>
    </StyledDiv>
  );
};

export default NavBar;
