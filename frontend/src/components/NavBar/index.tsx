import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledDiv, StyledLoggout } from "./style";

const NavBar = () => {
  const [isLogged] = useState(false);

  return (
    <StyledDiv>
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
          <li></li>
        ) : (
          <>
            <StyledLoggout>
              <Link to={"/"}>Fazer login</Link>
              <button>Cadastrar</button>
            </StyledLoggout>
          </>
        )}
      </nav>
    </StyledDiv>
  );
};

export default NavBar;
