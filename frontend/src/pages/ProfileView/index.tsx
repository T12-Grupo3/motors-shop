import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarouselComponent from "../../components/carousel";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import { AdvertContext } from "../../Context/AdvertContext";
import { UserContext } from "../../Context/UserContext";
import RegisterAdvertModal from "../../modals/RegisterAdvertModal";
import { StyledProductsContainer } from "../home/style";
import {
  ContainerNavProfile,
  ContainerUserProfile,
} from "./style";

const ProfileView = () => {
  const { id } = useParams();
  const { auctions, cars, motorcycles } = useContext(AdvertContext);
  const { user, changeName, firstName, lastName, api_read_user } = useContext(UserContext);

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

        <StyledProductsContainer>
          {
            filteredCars.length === 0 ? (
              <h5>Você ainda não tem anúncios, cadastre agora.</h5>
            ) : (
              <>
              {
                filteredAuctions.length === 0 ? (
                  <h5>Você ainda não tem anúncios para leilão</h5>
                ):(
                  <>
                    <h5>Leilão</h5>
                    <CarouselComponent adverts={filteredAuctions} />
                  </>
                )
              }
              {
                filteredCars.length === 0 ? (
                  <h5>Você ainda não tem anúncios de carros</h5>
                ):(
                  <>
                    <h5>Carros</h5>
                    <div className="containers-vehicules">
                      {filteredCars.map((advert) => (
                          <ProductCard key={advert.id} advert={advert} />
                      ))}
                    </div>
                  </>
                )
              }
              {
                filteredMotorcycles.length === 0 ? (
                  <h5>Você ainda não tem anúncios de motos</h5>
                ):(
                  <>
                    <h5>Motos</h5>
                    <div className="containers-vehicules">
                      {filteredMotorcycles.map((advert) => (
                        <ProductCard key={advert.id} advert={advert} />
                      ))}
                    </div>
                  </>
                )
              }
              </>
            )
          }

        </StyledProductsContainer>
      <Footer />
    </>
  );
};

export default ProfileView;
