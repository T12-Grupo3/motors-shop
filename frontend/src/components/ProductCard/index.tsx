import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iAdvert, iAdvertProduct } from "../../interfaces/adverts.interfaces";
import DeleteAdvertsModal from "../../modals/DeleteAdvertsModal";
import EditAdvertModal from "../../modals/EditAdvertModal";
import { Button } from "../../modals/EditAdvertModal/styles";
// import EditAdvertModal from "../../modals/EditAdvertModal";
import {
  StyledProductCaracteristcs,
  StyledProductCard,
  StyledProductCardButton,
  StyledProductDescription,
  StyledProductImg,
  StyledProductUser,
} from "./style";

interface iProductCard {
  advert: iAdvert;
}

const ProductCard = ({ advert }: iProductCard) => {
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

  const navigate = useNavigate();

  return (
    <StyledProductCard>
      <StyledProductImg>
        <img src={cover_image_adverts} alt={description_adverts} />
      </StyledProductImg>
      <StyledProductDescription>
        <h2>{title_adverts}</h2>
        <p>{description_adverts}</p>
      </StyledProductDescription>

      {user.id === currentUser ? (
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
        <p>
          {price_adverts.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </StyledProductCaracteristcs>
      {user.id === currentUser && (
        <StyledProductCardButton>
          <EditAdvertModal advert={advert} />
          <DeleteAdvertsModal id_adverts={id} />
          <Button onClick={() => navigate(`/product/${id}`, { replace: true })}>
            Ver como
          </Button>
        </StyledProductCardButton>
      )}
    </StyledProductCard>
  );
};

export default ProductCard;
