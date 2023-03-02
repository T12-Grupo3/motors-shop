import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { AdvertContext } from "../../Context/AdvertContext";
import { iAdvert, IRequestAdverts } from "../../interfaces/adverts.interfaces";
import { ContainerProduct } from "./style";
import schemaInputComments from "../../Validations/schemaInputComments"
import { yupResolver } from "@hookform/resolvers/yup";
import { iComments, iCommentsRegisterRecieve, iCommentsRequest } from "../../interfaces/comments.interfaces";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Context/UserContext";
import { iUserRequest } from "../../interfaces/user.interface";





export default function Product() {
  const { id } = useParams();
  const [product, setproduct] = useState<iAdvert>({} as iAdvert);
  const navigate = useNavigate();
  // const { changeName, firstName, lastName } = useContext(UserContext);
  const { api_create_comments, api_read_id_advert} = useContext(AdvertContext);
  const { user } = useContext(UserContext);

  
 

  const { register, handleSubmit, formState: { errors }, } = useForm<iCommentsRegisterRecieve>({
    resolver: yupResolver(schemaInputComments),
  });

  const onSubmit = async ({
    comments,
    advert,
    user,
    }: iCommentsRegisterRecieve) => {
    const advertComments = { 
      comments,
      advert, 
      user,
       };

    api_create_comments(advertComments);
  };


  useEffect(() => {
    const getProduct = async (id: string) => {
      const res = await api_read_id_advert(id);

      setproduct(res);
      
    };

    getProduct(id!);
  }, [api_read_id_advert, id]);


  if (product === undefined) {
    navigate("/home", { replace: true });
  }
 

  const {
    title_adverts,
    year_adverts,
    description_adverts,
    kilometers_adverts,
    price_adverts,
    cover_image_adverts,
    comments,
    
  } = product;

  return (
    <>
      <NavBar />
      <ContainerProduct>
        <div className="dashMain">
          <div className="dashLeft">
            <div className="imgCar">
              <img
                src={cover_image_adverts}
                alt=""
              />
            </div>
            <div className="descriptionAdverts">
              <p className="caracteristcCar">{title_adverts}</p>
              <div className="caracteristc">
                <div>
                  <span className="ano">{year_adverts}</span>
                  <span className="km">{`${kilometers_adverts} KM`}</span>
                </div>
                <div className="preco">{`R$ ${price_adverts}`}</div>
              </div>
              <button className="button">Comprar</button>
            </div>
            <div className="descriptionCar">
              <span className="spanDescription">Descrição</span>
              <p className="pDescription">{description_adverts}</p>
            </div>
            <div className="comments">
              <span className="spanDescription">Comentários</span>
              <ul className="ulComments">
              {comments.map((elem) => (
                <li key={user.id}>
                  <div className="liComents">
                    <span className="nikeClient">NC</span>
                    <span className="liName">{elem.user.name}</span>
                    <span className="liOld">3 dias</span>
                  </div>
                  <p>{elem.comments} </p>
                </li>
              ))
              }
              </ul>
            </div>
            <form 
            className="formComments"
            onSubmit={handleSubmit(onSubmit)}>
              <div className="liComents">
                <span className="nikeClient">NC</span>
                <span className="liName">{user.name}</span>
              </div>
              <div className="imputForm">
              <label htmlFor="Comentário">Nome</label>
                <input
                  type="text"
                  id="comments"
                  className="inputRegister"
                  placeholder="Faça seu comentário"
                  {...register("comments")}
                />
                {errors.comments?.message}
                <button className="button" type="submit">Comentar</button>
              </div>
            </form>
            
          </div>

          <div className="dashRigth">
            <div className="cardGalery">
              <span className="spanFoto">Fotos</span>
              <ul className="galeryImg">
                <li className="imgGalery">
                  <img
                    className="imgGlr"
                    src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg"
                    alt=""
                  />
                </li>
                <li className="imgGalery">
                  <img
                    className="imgGlr"
                    src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg"
                    alt=""
                  />
                </li>
                <li className="imgGalery">
                  <img
                    className="imgGlr"
                    src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg"
                    alt=""
                  />
                </li>
                <li className="imgGalery">
                  <img
                    className="imgGlr"
                    src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg"
                    alt=""
                  />
                </li>
                <li className="imgGalery">
                  <img
                    className="imgGlr"
                    src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg"
                    alt=""
                  />
                </li>
                <li className="imgGalery">
                  <img
                    className="imgGlr"
                    src="https://www.automaistv.com.br/wp-content/uploads/2022/06/mitsubishi_pajero_mini_final_anniversary_edited-750x450.jpg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className="cardProfile">
              <div className="imgProfile">
                <img
                  className="imgProfile"
                  src="https://i.im.ge/2023/02/23/7u52PC.foto-perfil.png"
                  alt=""
                />
              </div>
              <p className="pProfile">Marcus Roberto</p>
              <p className="textProfile">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis voluptatem animi molestiae quisquam nemo pariatur ipsa
                consequuntur quaerat? Dolorum deserunt est quaerat officiis.
                Deserunt doloremque, aliquid temporibus praesentium laboriosam
                nostrum?
              </p>
              <button className="buttonProfile">Ver todos anúncios</button>
            </div>
          </div>
        </div>
      </ContainerProduct>
      <Footer />
    </>
  );
}
