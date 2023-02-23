import NavBar from "../../components/NavBar";
import {
  StyledContent,
  StyledContentContainer,
  StyledProductsContainer,
} from "./style";

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
        <div>
          <h5>Leilão</h5>
        </div>

        <div id="cars">
          <h5>Carros</h5>
        </div>

        <div>
          <h5>Motos</h5>
        </div>
      </StyledProductsContainer>
    </>
  );
};
export default Home;
