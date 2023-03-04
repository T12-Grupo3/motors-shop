import { useState } from "react";
import { Link } from "react-router-dom";
import { iAdvertProduct } from "../../interfaces/adverts.interfaces";
import {
  StyledAuctionContainer,
  StyledDescription,
  StyledAuctionPage,
  StyledTags,
} from "./style";

const ProductCardAuction = ({
  cover_image_adverts,
  description_adverts,
  kilometers_adverts,
  price_adverts,
  title_adverts,
  year_adverts,
  id,
}: iAdvertProduct) => {
  const [isAuctionOnwer] = useState(false);


  return (
    <StyledAuctionContainer>
      <StyledDescription
        backgroundImage={cover_image_adverts}
      >
        <div>
          <h2>{title_adverts}</h2>
          <p>{description_adverts}</p>
          <div></div>
          {/* <p>{user.name}</p> */}
        </div>
        <StyledTags>
          <div>
            <span>{year_adverts}</span>
            <span>{`${kilometers_adverts} KM`}</span>
          </div>
          <p>R$ {price_adverts.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
        </StyledTags>
      </StyledDescription>

      {isAuctionOnwer ? (
        <div>
          <button>Editar</button>
          <Link to={`/product/${id}`}>Ver como</Link>
        </div>
      ) : (
        <StyledAuctionPage>
          <Link to={`/product/${id}`}>
            <p>Acessar página do leilão</p>
            <p>{`--->`}</p>
          </Link>
        </StyledAuctionPage>
      )}
    </StyledAuctionContainer>
  );
};

export default ProductCardAuction;
