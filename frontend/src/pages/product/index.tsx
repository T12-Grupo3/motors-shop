
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { ContainerProduct } from "./style";


export default function Product() {


  
  return (
    <>
      <NavBar />
    <ContainerProduct>
      
      <div className="dashMain">
        <div className="dashLeft">
          <div className="imgCar">
            <img src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg" alt="" />
          </div>
          <div className="descriptionAdverts">
            <p className="caracteristcCar">Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </p>
            <div className="caracteristc">
              <div>
              <span className="ano">2013</span>
              <span className="km">0 KM</span>
              </div>
              <div className="preco">R$ 50.000,00</div>
            </div>
            <button className="button">Comprar</button>
          </div>
          <div className="descriptionCar">
            <span className="spanDescription">Descrição</span>
            <p className="pDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam temporibus recusandae iste incidunt ex possimus, totam, natus fuga quaerat alias nostrum sapiente quia reprehenderit, provident officiis nisi dolor illum.</p>
          </div>
          <div className="comments">
          <span className="spanDescription">Comentários</span>
            <ul className="ulComments">
              <li>
                <div className="liComents"> 
                <span className="nikeClient">NC</span>  
                <span className="liName">Nome do Cliente</span>
                <span className="liOld">há 3 dias</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum voluptatum provident maiores corporis beatae deleniti ut error mollitia. Ipsa facere porro ipsum nulla perferendis explicabo blanditiis ut, magni at.</p>
              
              </li>
              <li>
                <div className="liComents"> 
                <span className="nikeClient">NC</span>  
                <span className="liName">Nome do Cliente</span>
                <span className="liOld">há 3 dias</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum voluptatum provident maiores corporis beatae deleniti ut error mollitia. Ipsa facere porro ipsum nulla perferendis explicabo blanditiis ut, magni at.</p>
              
              </li>
              <li>
                <div className="liComents"> 
                <span className="nikeClient">NC</span>  
                <span className="liName">Nome do Cliente</span>
                <span className="liOld">há 3 dias</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum voluptatum provident maiores corporis beatae deleniti ut error mollitia. Ipsa facere porro ipsum nulla perferendis explicabo blanditiis ut, magni at.</p>
              
              </li>
            </ul>
          </div>
          <form className="formComments" >
            <div className="liComents"> 
                <span className="nikeClient">NC</span>  
                <span className="liName">Nome do Cliente</span>
            </div>
          <label htmlFor="Comentário">Nome</label>
            <div className="imputForm"> 
            <input
              type="text"
              id="comments"
              className="inputRegister"
              placeholder="Faça seu comentário"
              // {...register("name")}
            />
            {/* {errors.name?.message} */}
            <button className="button" >Comentar</button>
            </div>
          </form>
        </div>

      <div className="dashRigth">
        <div className="cardGalery">
          <span className="spanFoto">Fotos</span>
          <ul className="galeryImg">
              <li className="imgGalery">
                <img className="imgGlr" src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg" alt="" />
              </li>
              <li className="imgGalery">
                <img className="imgGlr" src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg" alt="" />
              </li>
              <li className="imgGalery">
                <img className="imgGlr" src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg" alt="" />
              </li>
              <li className="imgGalery">
                <img className="imgGlr" src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg" alt="" />
              </li>
              <li className="imgGalery">
                <img className="imgGlr" src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg" alt="" />
              </li>
              <li className="imgGalery">
                <img className="imgGlr" src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg" alt="" />
              </li>
          </ul>
        </div>
        <div className="cardProfile">
        <div className="imgProfile">
          <img className="imgProfile" src="https://i.im.ge/2023/02/23/7u52PC.foto-perfil.png" alt="" />
        </div>
        <p className="pProfile">Marcus Roberto</p>
        <p className="textProfile">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis voluptatem animi molestiae quisquam nemo pariatur ipsa consequuntur quaerat? Dolorum deserunt est quaerat officiis. Deserunt doloremque, aliquid temporibus praesentium laboriosam nostrum?</p>
        <button className="buttonProfile">Ver todos anúncios</button>
        </div>
      
      </div>
        
      </div>
      
    </ContainerProduct>
    <Footer />
    </>
  )

}