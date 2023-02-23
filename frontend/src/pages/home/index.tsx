import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";
import ProductCardAuction from "../../components/ProductCardAuction";
import {
  StyledAuction,
  StyledContent,
  StyledContentContainer,
  StyledProductsContainer,
} from "./style";

const user1 = { name: "Rodrigo Tavares" };
const user2 = { name: "Tiago" };

const auctions = [
  {
    title_adverts: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
    description_adverts:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    user: user1,
    year_adverts: 2013,
    kilometers_adverts: 0,
    price_adverts: 99999.99,
  },
  // {
  //   title_adverts: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
  //   description_adverts:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
  //   user: user2,
  //   year_adverts: 2013,
  //   kilometers_adverts: 0,
  //   price_adverts: 99999.99,
  // },
  // {
  //   title_adverts: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
  //   description_adverts:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
  //   user: user2,
  //   year_adverts: 2013,
  //   kilometers_adverts: 0,
  //   price_adverts: 99999.99,
  // },
  // {
  //   title_adverts: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
  //   description_adverts:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
  //   user: user2,
  //   year_adverts: 2013,
  //   kilometers_adverts: 0,
  //   price_adverts: 99999.99,
  // },
];

const Home = () => {
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
          {auctions.map(
            ({
              description_adverts,
              price_adverts,
              title_adverts,
              user,
              year_adverts,
              kilometers_adverts,
            }) => (
              <ProductCard
                description_adverts={description_adverts}
                kilometers_adverts={kilometers_adverts}
                price_adverts={price_adverts}
                title_adverts={title_adverts}
                year_adverts={year_adverts}
                user={user}
              />
            )
          )}
        </div>

        <h5>Motos</h5>
        <div></div>
      </StyledProductsContainer>

      <Footer />
    </>
  );
};
export default Home;
