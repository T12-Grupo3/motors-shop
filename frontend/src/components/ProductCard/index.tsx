import { useState } from "react";
import { iAdvert, iAdvertProduct } from "../../interfaces/adverts.interfaces";
// import EditAdvertModal from "../../modals/EditAdvertModal";
import {
  StyledProductCaracteristcs,
  StyledProductCard,
  StyledProductDescription,
  StyledProductImg,
  StyledProductUser,
} from "./style";

interface iProductCard {
  advert: iAdvert;
}

const ProductCard = ({ advert }: iProductCard) => {
  const [isOwned] = useState(false);

  const {
    cover_image_adverts,
    description_adverts,
    title_adverts,
    kilometers_adverts,
    year_adverts,
    price_adverts,
    user,
  } = advert;

  console.log(advert)

  return (
    <StyledProductCard>
      <StyledProductImg>
        <img src={cover_image_adverts} alt={description_adverts} />
      </StyledProductImg>
      <StyledProductDescription>
        <h2>{title_adverts}</h2>
        <p>{description_adverts}</p>
      </StyledProductDescription>

      {isOwned ? (
        <></>
      ) : (
        <StyledProductUser>
          <span>NC</span>
          {/* <span>{user.name}</span> */}
        </StyledProductUser>
      )}

      <StyledProductCaracteristcs>
        <div>
          <span>{year_adverts}</span>
          <span> {`${kilometers_adverts} KM`} </span>
        </div>
        <p>
          {price_adverts.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </StyledProductCaracteristcs>
    </StyledProductCard>
  );
};

export default ProductCard;
