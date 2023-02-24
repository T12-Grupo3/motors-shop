import { useState } from "react";
import { Link } from "react-router-dom";
import { iProduct } from "../../interfaces/adverts.interfaces";
import {
  StyledAuctionContainer,
  StyledDescription,
  StyledAuctionPage,
  StyledTags,
} from "./style";

const ProductCardAuction = ({
  description_adverts,
  kilometers_adverts,
  price_adverts,
  title_adverts,
  user,
  year_adverts,
}: iProduct) => {
  const [isAuctionOnwer, setIsAuctionOwner] = useState(false);
  return (
    <StyledAuctionContainer>
      <StyledDescription>
        <div>
          <h2>{title_adverts}</h2>
          <p>{description_adverts}</p>
          <div></div>
          <p>{user.name}</p>
        </div>
        <StyledTags>
          <div>
            <span>{year_adverts}</span>
            <span>{`${kilometers_adverts} KM`}</span>
          </div>
          <p>R$ {price_adverts.toFixed(2)}</p>
        </StyledTags>
      </StyledDescription>

      {isAuctionOnwer ? (
        <div>
          <button>Editar</button>
          <button>Ver como</button>
        </div>
      ) : (
        <StyledAuctionPage>
          <Link to={"/"}>
            <p>Acessar página do leilão</p>
            <p>{`--->`}</p>
          </Link>
        </StyledAuctionPage>
      )}
    </StyledAuctionContainer>
  );
};

export default ProductCardAuction;
