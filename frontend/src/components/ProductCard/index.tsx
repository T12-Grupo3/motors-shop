import { ContainerProductCard } from "./style"

const ProductCard = () => {

  return (
      <ContainerProductCard>
        <div className="productCardMain">
          <div className="imgCard">
            <img className="image" src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg" alt="" />
          </div>
          <div className="descriptionCard">
            <p className="nameCarCard">Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ab harum, tempora iste a illo, dolore eos nisi veniam maiores ratione vitae nemo recusandae quas cumque quisquam consequuntur vero officia?</p>
          <div className="liComents"> 
                <span className="nikeClient">NC</span>  
                <span className="liName">Nome do Cliente</span>
                
          </div> 
          <div className="caracteristc">
              <div className="DataCard">
              <span className="anoCard">2013</span>
              <span className="kmCard">0 KM</span>
              </div>
              <div className="precoCard">R$ 50.000,00</div>
            </div>
        </div>
        </div>
      </ContainerProductCard>
    );
  };
  
export default ProductCard;
