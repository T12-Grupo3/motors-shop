import { useState } from "react";
import { iAdvertProduct } from "../../interfaces/adverts.interfaces";
// import EditAdvertModal from "../../modals/EditAdvertModal";
import {
  StyledProductCaracteristcs,
  StyledProductCard,
  StyledProductDescription,
  StyledProductImg,
  StyledProductUser,
} from "./style";

const ProductCard = ({
  cover_image_adverts,
  description_adverts,
  kilometers_adverts,
  price_adverts,
  title_adverts,
  year_adverts,
}: iAdvertProduct) => {
  const [isOwned] = useState(false);

  return (
    <StyledProductCard>
      <StyledProductImg>
        <img
          src={cover_image_adverts}
          alt={description_adverts}
        />
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
        <p>{price_adverts.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
      </StyledProductCaracteristcs>

    </StyledProductCard>
  );
};

export default ProductCard;
