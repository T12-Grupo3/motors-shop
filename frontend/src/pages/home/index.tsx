import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ButtonComponent from "../../components/Button";
import CarouselComponent from "../../components/carousel";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import { AdvertContext } from "../../Context/AdvertContext";
import {
  ButtonContent,
  StyledContent,
  StyledContentContainer,
  StyledHomeButtons,
  StyledProductsContainer,
  StyledVeiculesSection,
} from "./style";

const Home = () => {
  const { auctions, cars, motorcycles } = useContext(AdvertContext);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#cars") {
      window.location.href = "#cars";
      console.log("cars");
    } else if (location.hash === "#motorcycles") {
      window.location.href = "#motorcycles";
      console.log("motorcycles");
    } else if (location.hash === "#auctions") {
      window.location.href = "#auctions";
      console.log("auctions");
    }
  }, [location]);

  // console.log(location);

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
        <div id="auctions"></div>
        <StyledVeiculesSection>
          <h5>Leilão</h5>
          <CarouselComponent adverts={auctions} />
        </StyledVeiculesSection>

        <div id="cars"></div>
        <StyledVeiculesSection>
          <h5>Carros</h5>
          <div className="containers-vehicules">
            {cars.map((advert) => (
              <ProductCard key={advert.id} advert={advert} />
            ))}
          </div>
        </StyledVeiculesSection>

        <div id="motorcycles"></div>
        <StyledVeiculesSection>
          <h5>Motos</h5>
          <div className="containers-vehicules">
            {motorcycles.map((advert) => (
              <ProductCard key={advert.id} advert={advert} />
            ))}
          </div>
        </StyledVeiculesSection>
      </StyledProductsContainer>

      <Footer />
    </>
  );
};
export default Home;
