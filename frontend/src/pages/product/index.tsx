import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { iAdvert } from "../../interfaces/adverts.interfaces";
import { ContainerBlue, ContainerProduct } from "./style";
import schemaInputComments from "../../Validations/schemaInputComments";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  iComments,
  iCommentsRegisterRecieve,
} from "../../interfaces/comments.interfaces";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Context/UserContext";
import { AdvertContext } from "../../Context/AdvertContext";
import { differenceInDays } from "date-fns";
import EditCommentsModal from "../../modals/EditCommentsModal";
import { iImageAdverts } from "../../interfaces/image_adverts.interface";
import ImageVeiculeModal from "../../modals/imageVeiculoModal";
import { iUserResponse } from "../../interfaces/user.interface";

const Product = () => {
  const { id } = useParams();
  const [product, setproduct] = useState<iAdvert>({} as iAdvert);
  const [profileUser, setProfileUser] = useState<iUserResponse>(
    {} as iUserResponse
  );

  const [image, setImage] = useState<iImageAdverts[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const navigate = useNavigate();
  const {
    changeName,
    firstName,
    lastName,
    api_read_user,
    user,
    isLogged,
    userName,
  } = useContext(UserContext);

  const {
    api_create_comments,
    api_read_id_advert,
    api_read_coments_advert,
    adverts,
    refreshKey,
    setcomments,
    comments,
  } = useContext(AdvertContext);

  const userId = localStorage.getItem("MOTORSSHOP:USERID");

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

      const nameUser = await api_read_user(res_product.user.id!);

      setProfileUser(nameUser);
      setproduct(res_product);
      setImage(res_product.imageAdverts);
      setcomments(res_comments);
      changeName(nameUser.name);
    };

    getProduct(id!);
  }, [refreshKey, api_read_user]);

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

  console.log(userName);

  return (
    <>
      <NavBar />
      <ContainerBlue />
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
                <div className="preco">
                  {price_adverts !== undefined &&
                    price_adverts.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </div>
              </div>
              <a
                href={`https://api.whatsapp.com/send?phone=+55+48998363692&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20anúncio%20pelo%20site%20motor-shop,%20o%20veiculo%20ainda%20está%20disponível?`}
                className="button-buy"
              >
                Comprar
              </a>
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
                      <span className="nikeClient">
                        {firstName}
                        {lastName}
                      </span>
                      <span className="liName">{elem.user.name}</span>
                      <span className="liOld">{`${
                        daysDiff === 0 ? `< 1` : { daysDiff }
                      } dia`}</span>
                    </div>
                    <div className="divComents">
                      <p>{elem.comments} </p>
                      <div>
                        <EditCommentsModal id_comments={elem.id} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <form className="formComments" onSubmit={handleSubmit(onSubmit)}>
              {isLogged && (
                <div className="liComents">
                  <span className="nikeClient">
                    {firstName}
                    {lastName}
                  </span>
                  <span className="liName">{userName}</span>
                </div>
              )}
              <div className="inputForm">
                <label htmlFor="Comentário">Nome</label>
                <input
                  type="text"
                  id="comments"
                  className="inputRegister"
                  placeholder="Faça seu comentário"
                  {...register("comments")}
                />
                {errors.comments?.message}
                <button className="button-buy button-buy-post" type="submit">
                  Comentar
                </button>
              </div>
            </form>
          </div>

          <div className="dashRigth">
            <div className="cardGalery">
              <p className="paragraphFoto">Fotos</p>
              <ul className="galeryImg">
                {image.map((elem) => (
                  <li key={elem.id} className="imgGalery">
                    <img
                      className="imgGlr"
                      src={elem.galery_image}
                      alt=""
                      onClick={() => {
                        setSelectedImage(elem.galery_image);
                        setShowModal(true);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <ImageVeiculeModal
              imgSrc={selectedImage}
              open={showModal}
              onClose={() => setShowModal(false)}
            />
            <div className="cardProfile">
              <div className="cardNikeProfile">
                <span className="nikePerfilClient">
                  {firstName}
                  {lastName}
                </span>
              </div>
              <p className="pProfile"> {profileUser.name} </p>
              <p className="textProfile">{profileUser.description_user}</p>
              {profileUser.isAdm ? (
                <button
                  className="buttonProfile"
                  onClick={() =>
                    navigate(`/profileview/${profileUser.id}`, {
                      replace: true,
                    })
                  }
                >
                  Ver todos anuncios
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </ContainerProduct>
      <Footer />
    </>
  );
};

export default Product;
