import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import ProductCardAuction from "../../components/ProductCardAuction";
import { AdvertContext } from "../../Context/AdvertContext";
import { UserContext } from "../../Context/UserContext";
import DeleteAdvertsModal from "../../modals/DeleteAdvertsModal";
import EditAdvertModal from "../../modals/EditAdvertModal";
import RegisterAdvertModal from "../../modals/RegisterAdvertModal";
import { StyledAuction, StyledProductsContainer } from "../home/style";
import {
  ContainerNavProfile,
  ContainerUserProfile,
  StyledContainerProfile,
} from "./style";

const ProfileView = () => {
  const { auctions, cars, motorcycles } = useContext(AdvertContext);


  const {user, changeName, firstName, lastName} = useContext(UserContext)

  useEffect(()=>{
    changeName()
  
  }, [])

  return (
    <>
      <NavBar />
      <ContainerNavProfile />
      <ContainerUserProfile>
        <div className="imgProfile">
          <p> {firstName}{lastName} </p>
        </div>
        <div className="divName">
          <p className="profileName"> {user?.name} </p>
          {
            user.isAdm ? 
              <p className="paragraphAdvertiser">Anunciante</p>
            :
              <p className="paragraphAdvertiser">Comprador</p>
          }
        </div>
        <p className="textProfile">
          {user?.description_user}
        </p>
        <RegisterAdvertModal />
      </ContainerUserProfile>

      <StyledContainerProfile>
        <StyledProductsContainer>
          <h5>Leilão</h5>
          <StyledAuction>
            {auctions.map(
              ({
                description_adverts,
                price_adverts,
                title_adverts,
                year_adverts,
                kilometers_adverts,
                id,
              }) => (
                <ProductCardAuction
                  key={id}
                  description_adverts={description_adverts}
                  kilometers_adverts={kilometers_adverts}
                  price_adverts={price_adverts}
                  title_adverts={title_adverts}
                  year_adverts={year_adverts}
                  id={id}
                />
              )
            )}
          </StyledAuction>
          <h5>Carros</h5>
          <div id="cars">
            {cars.map(
              ({
                description_adverts,
                id,
                kilometers_adverts,
                title_adverts,
                price_adverts,
                year_adverts,
              }) => (
                <>
                  <ProductCard
                    key={id}
                    description_adverts={description_adverts}
                    kilometers_adverts={kilometers_adverts}
                    title_adverts={title_adverts}
                    year_adverts={year_adverts}
                    price_adverts={price_adverts}
                  />
                  <EditAdvertModal id_adverts={id} />
                  <Link to={`/product/${id}`}>Ver como</Link>
                </>
              )
            )}
          </div>
          <h5>Motos</h5>
          <div id="motos">
            {motorcycles.map(
              ({
                description_adverts,
                id,
                kilometers_adverts,
                title_adverts,
                price_adverts,
                year_adverts,
              }) => (
                <>
                  <ProductCard
                    key={id}
                    description_adverts={description_adverts}
                    kilometers_adverts={kilometers_adverts}
                    title_adverts={title_adverts}
                    year_adverts={year_adverts}
                    price_adverts={price_adverts}
                  />
                  <EditAdvertModal id_adverts={id} />
                  <DeleteAdvertsModal id_adverts={id} />
                </>
              )
            )}
          </div>
        </StyledProductsContainer>
      </StyledContainerProfile>
      <Footer />
    </>
  );
};

export default ProfileView;
