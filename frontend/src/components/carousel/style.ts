import styled from "styled-components";

export const ContainerCarousel = styled.div`

  #app__carousel {
      display: flex;
      width: 100vw;
      justify-content: center;
      align-items: center;
      margin-top: 2vw;
    }
    
    .app__carousel--wrapper {
      max-width: 95vw;
      align-self: center;
      justify-self: center;
      background: none;
    }
    
    .app__carousel--img-box > div {
      background-size: cover;
      margin: 0 auto;
      aspect-ratio: 424/238;
      width: 90%;
      height:100%;
    }
    
    Card{
      height:326px;
    }

  `