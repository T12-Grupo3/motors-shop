import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ContainerCarousel } from "./style";

const Carousel = () => {
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
    "https://static.vecteezy.com/ti/fotos-gratis/t2/8585294-3d-rendering-sport-blue-car-on-white-bakcground-jpg-gratis-foto.jpg",
    "https://media.istockphoto.com/id/1006541592/pt/foto/3d-illustration-of-generic-red-sports-coupe-car-on-white-background.jpg?s=612x612&w=0&k=20&c=YkNKpR-ySNFGJJPaP3xjX5C76HNJEptS9f1jc011cyE=",
    "https://conteudo.imguol.com.br/c/entretenimento/30/2019/11/14/aspark-owl-1573758305936_v2_450x337.jpg",
    "https://revistacarro.com.br/wp-content/uploads/2022/05/Ferrari-SP48-Unica_3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nmEjXUuB6qC3-_nUDuJAc76jtLeN-kTK9A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgeF4oqNO7mWvWw3sASgpzHJ6Q253O8f9v3w&usqp=CAU",
  ];

  return (
    <ContainerCarousel>
    <div id="app__carousel">
      <Slide
        responsive={responsiveSettings}
        cssClass="app__carousel--wrapper"
        indicators={true}
      >
        <div className="app__carousel--img-box" key="img_1">
          <div key="Imagem_Carousel_1" style={{ backgroundImage: `url(${carouselPictures[0]})` }}></div>
        </div>
        <div className="app__carousel--img-box" key="img_2">
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
        </div>
      </Slide>
    </div>
  </ContainerCarousel>
  );
};

export default Carousel;