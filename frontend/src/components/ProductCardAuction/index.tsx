import { isLastDayOfMonth } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { iAdvert } from "../../interfaces/adverts.interfaces";
import { AdvertContext } from "../../Context/AdvertContext";
import { UserContext } from "../../Context/UserContext";
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

  // const {auctions, adverts} = useContext(AdvertContext)
  // const { api_read_user} = useContext(UserContext)

  // const [isAuctionOnwer, set] = useState(false);
  // const userId = localStorage.getItem("MOTORSSHOP:USERID");
  // const isAdmUser = user.isAdm
  const currentUser = localStorage.getItem("MOTORSSHOP:USERID");

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
          <p>{price_adverts.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
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