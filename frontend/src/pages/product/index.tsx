import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { AdvertContext } from "../../Context/AdvertContext";
import { iAdvert } from "../../interfaces/adverts.interfaces";
import { ContainerProduct } from "./style";
import schemaInputComments from "../../Validations/schemaInputComments";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  iComments, iCommentsRegisterRecieve} from "../../interfaces/comments.interfaces";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Context/UserContext";
import { differenceInDays } from 'date-fns';

const Product = () => {
  const { id } = useParams();
  const [product, setproduct] = useState<iAdvert>({} as iAdvert);
  const [comments, setcomments] = useState<iComments[]>([]);

  
  const navigate = useNavigate();
  const { changeName, firstName, lastName } = useContext(UserContext);
  const { api_create_comments, api_read_id_advert, api_read_coments_advert } =
    useContext(AdvertContext);
  const { user } = useContext(UserContext);
  const { adverts } = useContext(AdvertContext);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCommentsRegisterRecieve>({
    resolver: yupResolver(schemaInputComments),
  });

  const onSubmit = async ({ comments }: iCommentsRegisterRecieve) => {
    const advertComments = {
      comments,
      advertsId: id,
      userId: user.id,
    };

    
    api_create_comments(advertComments);
  };
  
  
  
    
  
  


  useEffect(() => {
    const getProduct = async (id: string) => {
      const res_product = await api_read_id_advert(id);
      const res_comments = await api_read_coments_advert(id);

      setproduct(res_product);
      setcomments(res_comments);
      changeName()
    };

    getProduct(id!);
  }, [api_read_coments_advert, api_read_id_advert, id]);

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
    createdAt_adverts,
    updatedAt_adverts, 
  } = product;

  function calculateDaysDifference() {
    const createdAtDate = new Date(createdAt_adverts);
    const updatedAtDate = new Date(updatedAt_adverts);
    return differenceInDays(updatedAtDate, createdAtDate);
  }

  const daysDiff = calculateDaysDifference();


  return (
    <>
      <NavBar />
      <ContainerProduct>
        <div className="dashMain">
          <div className="dashLeft">
            <div className="imgCar">
              <img src={cover_image_adverts} alt="" />
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
              {comments.map((elem: iComments) => (
                <li key={elem.id}>
                  <div className="liComents">
                    <span className="nikeClient">{firstName}{lastName}</span>
                    <span className="liName">{elem.user.name}</span>
                    <span className="liOld">{`${daysDiff === 0  ? `< 1` : {daysDiff}} dias`}</span>   
                  </div>
                  <p>{elem.comments} </p>
                </li>
                ))}
              </ul>
            </div>
            <form className="formComments" onSubmit={handleSubmit(onSubmit)}>
              <div className="liComents">
                <span className="nikeClient">{firstName}{lastName}</span>
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
                <button className="button" type="submit">
                  Comentar
                </button>
              </div>
            </form>
          </div>

          <div className="dashRigth">
            <div className="cardGalery">
              <span className="spanFoto">Fotos</span>
              <ul className="galeryImg">
              {adverts.map((elem) => (
                <li key={elem.id} className="imgGalery">
                  <img
                    className="imgGlr"
                    src={elem.cover_image_adverts}
                    alt=""
                  />
                </li>
              ))}
              </ul>
            </div>
            <div className="cardProfile">
              <div className="cardNikeProfile" >
                <span className="nikePerfilClient">{firstName}{lastName}</span>
              </div>
              <p className="pProfile"> {user.name} </p>
              <p className="textProfile">
                {user.description_user}
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




export default Product;
