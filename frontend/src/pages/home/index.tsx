import { useContext } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ProductCardAuction from "../../components/ProductCardAuction";
import { AuthContext } from "../../Context/AuthProvider";
import {
  StyledAuction,
  StyledContent,
  StyledContentContainer,
  StyledProductsContainer,
} from "./style";

const Home = () => {
  const {auctions} = useContext(AuthContext)

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
        <StyledAuction>
          {auctions.map(
            ({
              description_adverts,
              price_adverts,
              title_adverts,
              user,
              year_adverts,
              kilometers_adverts,
            }) => (
              <ProductCardAuction
                description_adverts={description_adverts}
                kilometers_adverts={kilometers_adverts}
                price_adverts={price_adverts}
                title_adverts={title_adverts}
                year_adverts={year_adverts}
                user={user}
              />
            )
          )}
        </StyledAuction>

        <div id="cars">
          <h5>Carros</h5>
        </div>

        <h5>Motos</h5>
        <div></div>
      </StyledProductsContainer>

      <Footer />
    </>
  );
};
export default Home;
