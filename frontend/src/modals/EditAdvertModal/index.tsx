import { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import { Container, Button, Input } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  iAdvertUpdate,
  iAdvertUpdateExtended,
  iEditAdvertModal,
} from "../../interfaces/adverts.interfaces";
import schemaUpdateAdverts from "../../Validations/schemaUpdateAdverts";
import { Error } from "../../style/error";
import { AdvertContext } from "../../Context/AdvertContext";
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

export default function EditAdvertModal({ advert }: iEditAdvertModal) {
  const [open, setOpen] = useState(false);
  const handleOpenEdit = () => setOpen(true);
  const handleCloseEdit = () => setOpen(false);

  const [titleAdverts, settitleAdverts] = useState(advert.title_adverts);
  const [yearAdvert, setyearAdvert] = useState(advert.year_adverts);
  const [type_adverts, setType_adverts] = useState(advert.type_adverts);
  const [type_veicule, setType_veicule] = useState(advert.type_veicule);
  const [priceAdvert, setpriceAdvert] = useState(advert.price_adverts);
  const [kilometersAdvert, setkilometersAdvert] = useState(
    advert.kilometers_adverts
  );
  const [descriptionAdvert, setdescriptionAdvert] = useState(
    advert.description_adverts
  );
  const [coverImageAdvert, setcoverImageAdvert] = useState(
    advert.cover_image_adverts
  );
  const [isAvailable, setIsAvailable] = useState(advert.isAvailable);

  const { api_update_advert, setHandleDelete } = useContext(AdvertContext);

  const onSubmit = async (data: iAdvertUpdateExtended) => {
    const image_adverts: string[] = [];
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      '#galeria Input[type="url"]'
    );
    inputs.forEach((Input: HTMLInputElement) => {
      image_adverts.push(Input.value);
    });

    const formData = {
      ...data,
      type_adverts,
      type_veicule,
      isAvailable,
      image_adverts,
    };

    api_update_advert(advert.id, formData);
    handleCloseEdit();
  };

  // Função para adicionar mais um input ao clicar em adicionar mais um campo de imagem

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
  } = useForm<iAdvertUpdateExtended>({
    resolver: yupResolver(schemaUpdateAdverts),
  });

  return (
    <div>
      <Button onClick={handleOpenEdit}>Editar</Button>
      <Modal
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="div-header-modal">
                  <h3 className="h3-anuncio">Editar anúncio</h3>
                  <button className="button-x-fechar" onClick={handleCloseEdit}>
                    X
                  </button>
                </div>

                <p className="p-tipo-anuncio">Tipo de anuncio</p>
                <div className="div-btn-tipo-anuncio">
                  <ButtonComponent
                    onClick={() => setType_adverts("sell")}
                    background_color={type_adverts === "sell" ? "brand-1" : ""}
                    color={
                      type_adverts === "sell" ? "grey-whiteFixed" : "grey-0"
                    }
                    border={type_adverts === "sell" ? "brand-1" : "grey-4"}
                    hover_background_color="brand-1"
                    hover_border="brand-1"
                    hover_color="grey-whiteFixed"
                  >
                    Venda
                  </ButtonComponent>

                  <ButtonComponent
                    onClick={() => setType_adverts("auction")}
                    background_color={
                      type_adverts === "auction" ? "brand-1" : ""
                    }
                    color={
                      type_adverts === "auction" ? "grey-whiteFixed" : "grey-0"
                    }
                    border={type_adverts === "auction" ? "brand-1" : "grey-4"}
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
                    value={titleAdverts}
                    onChange={(e) => settitleAdverts(e.target.value)}
                  />
                  <Error>{errors.title_adverts?.message}</Error>
                </div>

                <div className="div-info-p-aqp">
                  <p className="p-ano">Ano</p>
                  <p className="p-quilometragem">Quilometragem</p>
                  {type_adverts === "sell" && (
                    <p className="p-preço venda-venda">Preço</p>
                  )}
                  {type_adverts === "auction" && (
                    <p className="p-preço venda-leilão">Lance inicial</p>
                  )}
                </div>

                <div className="div-info-input-aqp">
                  <Input
                    {...register("year_adverts")}
                    placeholder="Digitar ano"
                    type="number"
                    value={yearAdvert}
                    onChange={(e) => setyearAdvert(e.target.value)}
                  />
                  <Error>{errors.year_adverts?.message}</Error>

                  <Input
                    {...register("kilometers_adverts")}
                    placeholder="0"
                    type="number"
                    value={kilometersAdvert}
                    onChange={(e) => setkilometersAdvert(e.target.value)}
                  />
                  <Error>{errors.kilometers_adverts?.message}</Error>

                  <Input
                    {...register("price_adverts")}
                    placeholder="Digitar preço"
                    type="number"
                    value={priceAdvert}
                    onChange={(e) => setpriceAdvert(Number(e.target.value))}
                  />
                  <Error>{errors.price_adverts?.message}</Error>
                </div>

                <div>
                  <p className="p-descricao-anuncio">Descrição</p>
                  <Input
                    {...register("description_adverts")}
                    className="input-descricao"
                    placeholder="Digitar descrição"
                    value={descriptionAdvert}
                    onChange={(e) => setdescriptionAdvert(e.target.value)}
                  />
                  <Error>{errors.description_adverts?.message}</Error>
                </div>

                <p className="p-tipo-veiculo">Tipo de veículo</p>
                <div className="div-btn-tipo-veiculo">
                  <ButtonComponent
                    onClick={() => setType_veicule("car")}
                    background_color={type_veicule === "car" ? "brand-1" : ""}
                    color={
                      type_veicule === "car" ? "grey-whiteFixed" : "grey-0"
                    }
                    border={type_veicule === "car" ? "brand-1" : "grey-4"}
                    hover_background_color="brand-1"
                    hover_border="brand-1"
                    hover_color="grey-whiteFixed"
                  >
                    Carro
                  </ButtonComponent>

                  <ButtonComponent
                    onClick={() => setType_veicule("motorcycle")}
                    background_color={
                      type_veicule === "motorcycle" ? "brand-1" : ""
                    }
                    color={
                      type_veicule === "motorcycle"
                        ? "grey-whiteFixed"
                        : "grey-0"
                    }
                    border={
                      type_veicule === "motorcycle" ? "brand-1" : "grey-4"
                    }
                    hover_background_color="brand-1"
                    hover_border="brand-1"
                    hover_color="grey-whiteFixed"
                  >
                    Moto
                  </ButtonComponent>
                </div>
                <Error>{errors.type_veicule?.message}</Error>

                <p className="p-publicado">Publicado</p>
                <div className="div-btn-publicado">
                  <ButtonComponent
                    onClick={() => setIsAvailable(true)}
                    background_color={isAvailable ? "brand-1" : ""}
                    color={isAvailable ? "grey-whiteFixed" : "grey-0"}
                    border={isAvailable ? "brand-1" : "grey-4"}
                    hover_background_color="brand-1"
                    hover_border="brand-1"
                    hover_color="grey-whiteFixed"
                  >
                    Sim
                  </ButtonComponent>
                  <ButtonComponent
                    onClick={() => setIsAvailable(false)}
                    background_color={isAvailable ? "" : "brand-1"}
                    color={isAvailable ? "grey-0" : "grey-whiteFixed"}
                    border={isAvailable ? "grey-4" : "brand-1"}
                    hover_background_color="brand-1"
                    hover_border="brand-1"
                    hover_color="grey-whiteFixed"
                  >
                    Não
                  </ButtonComponent>
                </div>
                <Error>{errors.isAvailable?.message}</Error>

                <div id="minha-galeria">
                  <div>
                    <p className="p-img-capa">Imagem da capa</p>
                    <Input
                      {...register("cover_image_adverts")}
                      placeholder="Inserir URL da imagem"
                      type="url"
                      value={coverImageAdvert}
                      onChange={(e) => setcoverImageAdvert(e.target.value)}
                    />
                    <Error>{errors.image_adverts?.message}</Error>

                    <div id="galeria">
                      <p className="p-img-galeria">1° Imagem da galeria</p>
                      <Input placeholder="Inserir URL da imagem" type="url" />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="add-campo-img"
                  onClick={addCampoGaleria}
                >
                  Adicionar campo para imagem da galeria
                </button>

                <div className="div-btn-cancela-submit">
                  <ButtonComponent
                    onClick={() => {
                      setOpen(false);
                      setHandleDelete(true);
                    }}
                    background_color="grey-6"
                    border="grey-6"
                    color="grey-2"
                    hover_background_color="grey-5"
                    hover_border="grey-5"
                    hover_color="grey-whiteFixed"
                  >
                    Excluir anúncio
                  </ButtonComponent>
                  <ButtonComponent
                    type="submit"
                    onClick={() => console.log("")}
                    background_color="brand-1"
                    border="brand-1"
                    color="grey-whiteFixed"
                    hover_background_color="brand-3"
                    hover_border="brand-3"
                    hover_color="brand-4"
                  >
                    Salvar alterações
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
