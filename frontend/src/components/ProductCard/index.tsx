import { useState } from "react";
import { iProduct } from "../../interfaces/adverts.interfaces";
import {
  ContainerProductCard,
  StyledProductCaracteristcs,
  StyledProductCard,
  StyledProductDescription,
  StyledProductImg,
  StyledProductUser,
} from "./style";

const ProductCard = ({
  description_adverts,
  kilometers_adverts,
  price_adverts,
  title_adverts,
  year_adverts,
  user,
}: iProduct) => {
  const [isOwned] = useState(false);

  return (
    <StyledProductCard>
      <StyledProductImg>
        <img
          src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg"
          alt=""
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
          <span>{user.name}</span>
        </StyledProductUser>
      )}

      <StyledProductCaracteristcs>
        <div>
          <span>{year_adverts}</span>
          <span> {`${kilometers_adverts} KM`} </span>
        </div>
        <p>{`R$ ${price_adverts.toFixed(2)}`}</p>
      </StyledProductCaracteristcs>
    </StyledProductCard>
  );
};

export default ProductCard;
