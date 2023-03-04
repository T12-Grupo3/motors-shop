import { width } from "@mui/system";
import { AdvertContext } from "../../Context/AdvertContext";
import { useContext } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ProductCardAuction from "../ProductCardAuction";
import { StyledAuctionContainer, StyledAuctionPage, StyledDescription, StyledTags } from "../ProductCardAuction/style";
import { ContainerCarousel } from "./style";

const Carousel = () => {
    const { auctions, cars, motorcycles } = useContext(AdvertContext);


  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  const carouselPictures: string[] = [
    "https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg",
    "https://blog.nakata.com.br/wp-content/uploads/2020/08/post_thumbnail-1f77e8996174df4fb19587977331de22-780x450.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Hayabusa.jpg",
    "https://blog.catarinacarros.com.br/wp-content/uploads/2019/04/quiz.jpg",
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/37184_23C076613047B271.jpg?w=876&h=484&crop=1",
    "https://garagem360.com.br/wp-content/uploads/2022/04/554574.jpg",
  ];

  return (
    <ContainerCarousel>
    <div id="app__carousel">
      <Slide
        responsive={responsiveSettings}
        cssClass="app__carousel--wrapper"
        indicators={true}
      >
        {auctions.map(
            (index, elem) => (
                <div className="app__carousel--img-box" key="img_1">
              <ProductCardAuction
                key={elem.id}
                description_adverts={elem.description_adverts}
                kilometers_adverts={elem.kilometers_adverts}
                price_adverts={elem.price_adverts}
                title_adverts={elem.title_adverts}
                year_adverts={elem.year_adverts}
                id={elem.id}
                
              />
              </div>
            )
          )}
        
        
        
        {/* <div className="app__carousel--img-box" key="img_2">
          <div key="Imagem_Carousel_2" style={{ backgroundImage: `url(${carouselPictures[1]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_3">
          <div key="Imagem_Carousel_3" style={{ backgroundImage: `url(${carouselPictures[2]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_4">
          <div key="Imagem_Carousel_4" style={{ backgroundImage: `url(${carouselPictures[3]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_5">
          <div  key="Imagem_Carousel_5" style={{ backgroundImage: `url(${carouselPictures[4]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_6">
          <div  key="Imagem_Carousel_6" style={{ backgroundImage: `url(${carouselPictures[5]})` }}></div>
        </div> */}
      </Slide>
    </div>
    </ContainerCarousel>
  );
};

export default Carousel;