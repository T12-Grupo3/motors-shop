import { useContext } from "react";
import CarouselComponent from "../../components/carousel";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import { AdvertContext } from "../../Context/AdvertContext";
import {
  ButtonContent,
  StyledContent,
  StyledContentContainer,
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
          <div className="div-buutons">
            <ButtonContent>Carros</ButtonContent>
            <ButtonContent>Motos</ButtonContent>
          </div>
        </StyledContentContainer>
      </StyledContent>

      <StyledProductsContainer>
        <h5>Leilão</h5>
        <CarouselComponent adverts={auctions} />
        <h5>Carros</h5>
        <div className="containers-vehicules">
          {cars.map((advert) => (
            <ProductCard key={advert.id} advert={advert} />
          ))}
        </div>

        <h5>Motos</h5>

        <div className="containers-vehicules">
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
