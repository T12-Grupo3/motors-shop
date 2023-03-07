import { useContext } from "react";
import ButtonComponent from "../../components/Button";
import CarouselComponent from "../../components/carousel";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import { AdvertContext } from "../../Context/AdvertContext";
import {
  StyledContent,
  StyledContentContainer,
  StyledHomeButtons,
  StyledProductsContainer,
} from "./style";

const Home = () => {
  const { auctions, cars, motorcycles } = useContext(AdvertContext);

  return (
    <>
      <NavBar />

      <StyledContent>
        <StyledContentContainer>
          <div>
            <h2>Velocidade e experiência em um lugar feito para você</h2>
            <p>Um ambiente feito para você explorar o seu melhor</p>
          </div>
          <StyledHomeButtons>
            <ButtonComponent
              type="button"
              onClick={() => (window.location.href = "#cars")}
              border="grey-10"
              background_color="brand-2"
              color="grey-10"
              hover_background_color="brand-3"
              hover_border="brand-3"
              hover_color="brand-4"
            >
              Carros
            </ButtonComponent>

            <ButtonComponent
              type="button"
              onClick={() => (window.location.href = "#motorcycles")}
              border="grey-10"
              background_color="brand-2"
              color="grey-10"
              hover_background_color="brand-3"
              hover_border="brand-3"
              hover_color="brand-4"
            >
              Motos
            </ButtonComponent>
          </StyledHomeButtons>
        </StyledContentContainer>
      </StyledContent>

      <StyledProductsContainer>
        <h5>Leilão</h5>
        <CarouselComponent adverts={auctions} />
        <h5>Carros</h5>
        <div className="containers-vehicules" id="cars">
          {cars.map((advert) => (
            <ProductCard key={advert.id} advert={advert} />
          ))}
        </div>

        <h5>Motos</h5>

        <div className="containers-vehicules" id="motorcycles">
          {motorcycles.map((advert) => (
            <ProductCard key={advert.id} advert={advert} />
          ))}
        </div>
      </StyledProductsContainer>

      <Footer />
    </>
  );
};
export default Home;
