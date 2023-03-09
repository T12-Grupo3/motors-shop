import ReactDOM from "react-dom";
import { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm } from "react-hook-form";
import { Container, Button, Input } from "./styles";
import schemaRegisterAdverts from "../../Validations/schemaRegisterAdverts";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRequestAdverts } from "../../interfaces/adverts.interfaces";
import { AdvertContext } from "../../Context/AdvertContext";
import { Error } from "../../style/error";
import RegisterAdvertsConfirm from "../RegisterAdvertsConfirm";
import ButtonComponent from "../../components/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 7,
  p: 4,
  borderRadius: 2,
};

export default function RegisterAdvertModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openModalConfirm, setopenModalConfirm] = useState(false);

  const { api_create_adverts } = useContext(AdvertContext);

  const [typeVeicule, settypeVeicule] = useState("car");
  const [typeAdvert, settypeAdvert] = useState("sell");

  const onSubmit = async (data: IRequestAdverts) => {
    const galery_image: string[] = [];
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      '#galeria Input[type="url"]'
    );
    inputs.forEach((Input: HTMLInputElement) => {
      galery_image.push(Input.value);
    });

    const formData = {
      ...data,
      type_adverts: typeAdvert,
      type_veicule: typeVeicule,
      galery_image,
    };

    await api_create_adverts(formData).then(() => {
      setOpen(false);
      setopenModalConfirm(true);
    });
  };

  function addCampoGaleria() {
    const galeria = document.getElementById("galeria") as HTMLElement;
    const numCampos = galeria.childElementCount;

    const novoCampo = document.createElement("div");

    const novoTitulo = document.createElement("p");
    novoTitulo.className = "p-img-galeria";
    novoTitulo.textContent = `${numCampos}° Imagem da galeria`;

    const novoInput = document.createElement("div");
    ReactDOM.render(
      <Input placeholder="Inserir URL da imagem" type="url" />,
      novoInput
    );

    novoCampo.appendChild(novoTitulo);
    novoCampo.appendChild(novoInput);

    galeria.appendChild(novoCampo);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequestAdverts>({
    resolver: yupResolver(schemaRegisterAdverts),
  });

  return (
    <div>
      <RegisterAdvertsConfirm handleConfirm={openModalConfirm} />
      <Button onClick={handleOpen}>Criar anúncio</Button>
      <Modal
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        onBackdropClick={handleClose}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="div-h3-x">
                  <h3 className="h3-anuncio">Criar anúncio</h3>
                  <button className="button-x-fechar" onClick={handleClose}>
                    X
                  </button>
                </div>

                <p className="p-tipo-anuncio">Tipo de anúncio</p>
                <div className="div-btn-tipo-anuncio">
                  <ButtonComponent
                    onClick={() => settypeAdvert("sell")}
                    background_color={typeAdvert === "sell" ? "brand-1" : ""}
                    color={typeAdvert === "sell" ? "grey-whiteFixed" : "grey-0"}
                    border={typeAdvert === "sell" ? "brand-1" : "grey-4"}
                    hover_background_color="brand-1"
                    hover_border="brand-1"
                    hover_color="grey-whiteFixed"
                  >
                    Venda
                  </ButtonComponent>

                  <ButtonComponent
                    onClick={() => settypeAdvert("auction")}
                    background_color={typeAdvert === "auction" ? "brand-1" : ""}
                    color={
                      typeAdvert === "auction" ? "grey-whiteFixed" : "grey-0"
                    }
                    border={typeAdvert === "auction" ? "brand-1" : "grey-4"}
                    hover_background_color="brand-1"
                    hover_border="brand-1"
                    hover_color="grey-whiteFixed"
                  >
                    Leião
                  </ButtonComponent>
                </div>
                <Error>{errors.type_adverts?.message}</Error>

                <div>
                  <p className="p-info-veiculo">Infomações do veículo</p>

                  <p className="p-titulo-anuncio">Título</p>
                  <Input
                    {...register("title_adverts")}
                    className="input-titulo"
                    placeholder="Digitar título"
                  />
                  <Error>{errors.title_adverts?.message}</Error>
                </div>

                <div className="div-info-p-aqp">
                  <p className="p-ano">Ano</p>
                  <p className="p-quilometragem">Quilometragem</p>
                  {typeAdvert === "sell" && (
                    <p className="p-preço venda-venda">Preço</p>
                  )}
                  {typeAdvert === "auction" && (
                    <p className="p-preço venda-leilão">Lance inicial</p>
                  )}
                </div>

                <div className="div-info-input-aqp">
                  <Input
                    {...register("year_adverts")}
                    placeholder="Digitar ano"
                    type="number"
                  />
                  <Error>{errors.year_adverts?.message}</Error>

                  <Input
                    {...register("kilometers_adverts")}
                    placeholder="0"
                    type="number"
                  />
                  <Error>{errors.kilometers_adverts?.message}</Error>

                  <Input
                    {...register("price_adverts")}
                    placeholder="Digitar preço"
                    type="number"
                  />
                  <Error>{errors.price_adverts?.message}</Error>
                </div>

                <div>
                  <p className="p-descricao-anuncio">Descrição</p>
                  <Input
                    {...register("description_adverts")}
                    className="input-descricao"
                    placeholder="Digitar descrição"
                  />
                  <Error>{errors.description_adverts?.message}</Error>
                </div>

                <p className="p-tipo-veiculo">Tipo de veículo</p>
                <div className="div-btn-tipo-veiculo">
                  <ButtonComponent
                    onClick={() => settypeVeicule("car")}
                    background_color={typeVeicule === "car" ? "brand-1" : ""}
                    color={typeVeicule === "car" ? "grey-whiteFixed" : "grey-0"}
                    border={typeVeicule === "car" ? "brand-1" : "grey-4"}
                    hover_background_color="brand-1"
                    hover_border="brand-1"
                    hover_color="grey-whiteFixed"
                  >
                    Carro
                  </ButtonComponent>

                  <ButtonComponent
                    onClick={() => settypeVeicule("motorcycle")}
                    background_color={
                      typeVeicule === "motorcycle" ? "brand-1" : ""
                    }
                    color={
                      typeVeicule === "motorcycle"
                        ? "grey-whiteFixed"
                        : "grey-0"
                    }
                    border={typeVeicule === "motorcycle" ? "brand-1" : "grey-4"}
                    hover_background_color="brand-1"
                    hover_border="brand-1"
                    hover_color="grey-whiteFixed"
                  >
                    Moto
                  </ButtonComponent>
                </div>
                <Error>{errors.type_veicule?.message}</Error>

                <div id="minha-galeria">
                  <div>
                    <div>
                      <p className="p-img-capa">Imagem da capa</p>
                      <Input
                        {...register("cover_image_adverts")}
                        placeholder="Inserir URL da imagem"
                        type="url"
                      />
                      <Error>{errors.cover_image_adverts?.message}</Error>

                      <div id="galeria">
                        <p className="p-img-galeria">1° Imagem da galeria</p>
                        <Input
                          {...register("galery_image")}
                          placeholder="Inserir URL da imagem"
                          type="url"

                          // name="galery_image"
                        />
                      </div>
                      {/* <Error>{errors.image_adverts?.message}</Error> */}
                    </div>
                  </div>
                </div>

                <p className="add-campo-img" onClick={addCampoGaleria}>
                  Adicionar campo para imagem da galeria
                </p>

                <div>
                  <ButtonComponent onClick={handleClose}>
                    Cancelar
                  </ButtonComponent>

                  <ButtonComponent
                    onClick={() => console.log("")}
                    type="submit"
                  >
                    Criar anúncio
                  </ButtonComponent>
                </div>
              </form>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
