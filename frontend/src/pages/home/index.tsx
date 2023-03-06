import { useContext } from "react";
import CarouselComponent from "../../components/carousel";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import ProductCardAuction from "../../components/ProductCardAuction";
import { AdvertContext } from "../../Context/AdvertContext";
import { UserContext } from "../../Context/UserContext";
import EditAdvertModal from "../../modals/EditAdvertModal";
import {
  StyledAuction,
  StyledContent,
  StyledContentContainer,
  StyledProductsContainer,
} from "./style";

const Home = () => {
  const { auctions, cars, motorcycles } = useContext(AdvertContext);
  const { user } = useContext(UserContext);

  return (
    <>
      <NavBar />

      <StyledContent>
        <StyledContentContainer>
          <div>
            <h2>Velocidade e experiência em um lugar feito para você</h2>
            <p>Um ambiente feito para você explorar o seu melhor</p>
          </div>
          <div>
            <button>Carros</button>
            <button>Motos</button>
          </div>
        </StyledContentContainer>
      </StyledContent>

      <StyledProductsContainer>
        <h5>Leilão</h5>
          <CarouselComponent adverts={auctions} />

        <h5>Carros</h5>

        <div id="cars">
          {cars.map((advert) => (
            <ProductCard key={advert.id} advert={advert} />
          ))}
        </div>

        <h5>Motos</h5>

        <div>
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
