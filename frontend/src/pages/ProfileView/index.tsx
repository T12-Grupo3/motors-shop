
import { useContext, useEffect } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import ProductCardAuction from "../../components/ProductCardAuction";
import { AdvertContext } from "../../Context/AdvertContext";
import EditAdvertModal from "../../modals/EditAdvertModal"
import RegisterAdvertModal from "../../modals/RegisterAdvertModal";
import { StyledAuction, StyledProductsContainer } from "../home/style";
import {
  ContainerNavProfile,
  ContainerUserProfile,
  StyledContainerProfile,
} from "./style";


const ProfileView = () => {
  const { adverts, auctions, cars, motorcycles, api_read_adverts, setAdverts } = useContext(AdvertContext);

  useEffect(() => {
    const getAdverts = async () => {
      const res = await api_read_adverts();

      setAdverts(res);
    };

    getAdverts();
  }, []);

  return (
    <>
      <NavBar />
      <ContainerNavProfile />
      <ContainerUserProfile>
        <div className="imgProfile">
          <img
            className="imgProfile"
            src="https://i.im.ge/2023/02/23/7u52PC.foto-perfil.png"
            alt=""
          />
        </div>
        <div className="divName">
          <p className="profileName">Marcus Roberto</p>
          <p className="paragraphAdvertiser">Anunciante</p>
        </div>
        <p className="textProfile">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          voluptatem animi molestiae quisquam nemo pariatur ipsa consequuntur
          quaerat? Dolorum deserunt est quaerat officiis. Deserunt doloremque,
          aliquid temporibus praesentium laboriosam nostrum?
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
                <EditAdvertModal
                id_adverts={id}
                />
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
                <EditAdvertModal
                id_adverts={id}
                />
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
