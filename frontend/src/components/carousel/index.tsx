import "react-multi-carousel/lib/styles.css";
import ProductCardAuction from "../ProductCardAuction";
import Carousel from "react-multi-carousel";
import { iAdvert } from "../../interfaces/adverts.interfaces";

interface iCarouselComponent {
  adverts: iAdvert[];
}

const CarouselComponent = ({ adverts }: iCarouselComponent) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };


  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {adverts.map((adverts) => (
        <ProductCardAuction key={adverts.id} advert={adverts}/>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
