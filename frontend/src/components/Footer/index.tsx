
import { ContainerFooter } from "./style";


const Footer = () => {
  
  return (
    <ContainerFooter>
      <div className="footerMain">
        <div>
          <img
            src={require("../../utils/image/Motors shop-footer.png")}
            alt="motors shop"
          />
        </div>
        <div> 
        <span className="spanFooter" >© 2022 -  Todos os direitos reservados.</span>
        </div>
        <div> 
        <button className="buttonFooter">^</button>
        </div>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
