import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CarouselComponent from "../../components/carousel";
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
  const { id } = useParams();
  const { auctions, cars, motorcycles } = useContext(AdvertContext);
  const { user, changeName, firstName, lastName, api_read_user } =
    useContext(UserContext);

  const userId = localStorage.getItem("MOTORSSHOP:USERID");

  useEffect(() => {
    const getNameUser = async () => {
      const nameUser = await api_read_user(userId!);
      changeName(nameUser.name);
    };
    getNameUser();
  }, []);

  const filteredAuctions = auctions.filter((auction) => auction.user.id === id);

  const filteredCars = cars.filter((car) => car.user.id === id);

  const filteredMotorcycles = motorcycles.filter(
    (motorcycle) => motorcycle.user.id === id
  );

  return (
    <>
      <NavBar />
      <ContainerNavProfile />
      <ContainerUserProfile>
        <div className="imgProfile">
          <p>
            {firstName}
            {lastName}
          </p>
        </div>
        <div className="divName">
          <p className="profileName"> {user?.name} </p>
          {user.isAdm ? (
            <p className="paragraphAdvertiser">Anunciante</p>
          ) : (
            <p className="paragraphAdvertiser">Comprador</p>
          )}
        </div>
        <p className="textProfile">{user?.description_user}</p>
        <RegisterAdvertModal />
      </ContainerUserProfile>

      <StyledContainerProfile>
        <StyledProductsContainer>
          <h5>Leilão</h5>

          <CarouselComponent adverts={filteredAuctions} />

          <h5>Carros</h5>
          <div id="cars">
            {filteredCars.map((advert) => (
              <div key={advert.id}>
                <ProductCard advert={advert} />
                <EditAdvertModal advert={advert} />
                <DeleteAdvertsModal id_adverts={advert.id} />
                <Link to={`/product/${advert.id}`}>Ver como</Link>
              </div>
            ))}
          </div>

          <h5>Motos</h5>

          <div id="motos">
            {filteredMotorcycles.map((advert) => (
              <div key={advert.id}>
                <ProductCard advert={advert} />
                <EditAdvertModal advert={advert} />
                <DeleteAdvertsModal id_adverts={advert.id} />
                <Link to={`/product/${advert.id}`}>Ver como</Link>
              </div>
            ))}
          </div>
          
        </StyledProductsContainer>
      </StyledContainerProfile>
      <Footer />
    </>
  );
};

export default ProfileView;
