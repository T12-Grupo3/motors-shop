import { Link } from "react-router-dom";
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
          <span className="spanFooter">
            © 2022 - Todos os direitos reservados.
          </span>
        </div>
        <div>
          <a href="#" className="buttonFooter">
            ^
          </a>
        </div>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
