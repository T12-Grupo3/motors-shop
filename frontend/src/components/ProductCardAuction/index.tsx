import { Link } from "react-router-dom";
import { iAdvert } from "../../interfaces/adverts.interfaces";
import EditAdvertModal from "../../modals/EditAdvertModal";
import {
  StyledAuctionContainer,
  StyledDescription,
  StyledAuctionPage,
  StyledTags,
  StyledAuctionPageAdm,
} from "./style";

interface iProductCard {
  advert: iAdvert;
}

const ProductCardAuction = ({advert}: iProductCard) => {
  
  const {
    cover_image_adverts,
    description_adverts,
    title_adverts,
    kilometers_adverts,
    year_adverts,
    price_adverts,
    user,
    id,
  } = advert;

  const currentUser = localStorage.getItem("MOTORSSHOP:USERID");

  const price = Number(price_adverts)

  return (
    <StyledAuctionContainer>
      <StyledDescription
        backgroundImage={cover_image_adverts}>
        <div>
          <h2>{title_adverts}</h2>
          <p>{description_adverts}</p>
        </div>
        <StyledTags>
          <div>
            <span>{year_adverts}</span>
            <span>{`${kilometers_adverts} KM`}</span>
          </div>
          <p>{price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
        </StyledTags>
      </StyledDescription>

      {user.id === currentUser ?
        (
          <StyledAuctionPageAdm>
            <div>
              <EditAdvertModal advert={advert} />
            </div>
            <div>
              <Link to={`/product/${id}`}>Ver como</Link>
            </div>
          </StyledAuctionPageAdm>
        ) : (
          <StyledAuctionPage>
            <Link to={`/product/${id}`}>
              <p>Acessar página do leilão</p>
              <p>{`--->`}</p>
            </Link>
          </StyledAuctionPage>
        )
      }
    </StyledAuctionContainer>
  );
};

export default ProductCardAuction;