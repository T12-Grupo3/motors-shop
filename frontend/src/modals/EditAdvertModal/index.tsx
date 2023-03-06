import { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm } from "react-hook-form";
import { Input } from "@mui/material";
import ReactDOM from "react-dom";
import { Container, Button } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  iAdvertUpdate,
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
  const [typeAdvert, settypeAdvert] = useState(advert.type_adverts);
  const [typeVeicule, settypeVeicule] = useState(advert.type_veicule);
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

  const { api_update_advert, setHandleDelete } = useContext(AdvertContext);

  const updateAdverts = (data: iAdvertUpdate) => {
    api_update_advert(advert.id, data);
    handleCloseEdit();
  };

  // Função para selecionar tipo de anuncio

  function changeButtonStyleOnClickAdvert(
    buttons: HTMLButtonElement[],
    newBackgroundColor: string,
    newColor: string
  ): void {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => {
          btn.style.backgroundColor = "";
          btn.style.color = "";
        });
        button.style.backgroundColor = newBackgroundColor;
        button.style.color = newColor;
      });
    });
  }

  const myButtons = document.querySelectorAll(".btn-tipo-anuncio");
  changeButtonStyleOnClickAdvert(
    Array.from(myButtons) as HTMLButtonElement[],
    "#4529e6",
    "#FFFFFF"
  );

  // Função para selecionar o tipo de veículo

  function changeButtonStyleOnClickVehicle(
    buttons: HTMLButtonElement[],
    newBackgroundColor: string,
    newColor: string
  ): void {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => {
          btn.style.backgroundColor = "";
          btn.style.color = "";
        });
        button.style.backgroundColor = newBackgroundColor;
        button.style.color = newColor;
      });
    });
  }

  const myButtonsVehicle = document.querySelectorAll(".btn-tipo-veiculo");
  changeButtonStyleOnClickVehicle(
    Array.from(myButtonsVehicle) as HTMLButtonElement[],
    "#4529e6",
    "#FFFFFF"
  );

  // Função para selecionar se está publicado ou não

  function changeButtonStyleOnClickPubli(
    buttons: HTMLButtonElement[],
    newBackgroundColor: string,
    newColor: string
  ): void {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => {
          btn.style.backgroundColor = "";
          btn.style.color = "";
        });
        button.style.backgroundColor = newBackgroundColor;
        button.style.color = newColor;
      });
    });
  }

  const myButtonsPubli = document.querySelectorAll(".btn-tipo-publicado");
  changeButtonStyleOnClickPubli(
    Array.from(myButtonsPubli) as HTMLButtonElement[],
    "#4529e6",
    "#FFFFFF"
  );

  // Função para adicionar mais um input ao clicar em adicionar mais um campo de imagem

  function addCampoGaleria() {
    const galeria = document.getElementById("galeria") as HTMLElement;
    const numCampos = galeria.childElementCount;

    const novoCampo = document.createElement("div");

    const novoTitulo = document.createElement("p");
    novoTitulo.className = "p-img-galeria";
    novoTitulo.textContent = `${numCampos + 1}° Imagem da galeria`;

    const novoInput = document.createElement("div");
    ReactDOM.render(
      <Input
        placeholder="Inserir URL da imagem"
        type="url"
        inputProps={{ className: "galeria-input" }}
      />,
      novoInput
    );

    novoCampo.appendChild(novoTitulo);
    novoCampo.appendChild(novoInput);

    galeria.appendChild(novoCampo);
  }

  // função para mudar o preço para lance inciial

  const [tipoAnuncio, setTipoAnuncio] = useState("venda");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAdvertUpdate>({
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
              <form onSubmit={handleSubmit(updateAdverts)}>
                <div className="div-header-modal">
                  <h3 className="h3-anuncio">Editar anúncio</h3>
                  <button onClick={handleCloseEdit}>X</button>
                </div>

                <label className="p-tipo-anuncio">Tipo de anuncio</label>
                <select
                  {...register("type_adverts")}
                  className="div-btn-tipo-anuncio"
                  defaultValue={advert.type_adverts}
                >
                  <option
                    className="btn-tipo-anuncio btn-venda"
                    value="sell"
                    // defaultValue="sell"
                  >
                    Venda
                  </option>
                  <option
                    className="btn-tipo-anuncio btn-leilão"
                    value="auction"
                  >
                    Leilão
                  </option>
                </select>
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
                  {tipoAnuncio === "venda" && (
                    <p className="p-preço venda-venda">Preço</p>
                  )}
                  {tipoAnuncio === "leilão" && (
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
                <div>
                  <label className="p-tipo-veiculo">Tipo de veículo</label>
                  <select
                    className="div-btn-tipo-veiculo"
                    {...register("type_veicule")}
                    defaultValue={typeVeicule}
                  >
                    <option value="car" className="btn-tipo-veiculo">
                      Carro
                    </option>

                    <option value="motorcycle" className="btn-tipo-veiculo">
                      Moto
                    </option>
                  </select>
                  <Error>{errors.type_veicule?.message}</Error>
                </div>
                <div>
                  <label className="p-publicado">Publicado</label>
                  <select
                    {...register("isAvailable")}
                    className="div-btn-publicado"
                  >
                    <option value="true" className="btn-tipo-publicado">
                      Sim
                    </option>

                    <option value="false" className="btn-tipo-publicado">
                      Não
                    </option>
                  </select>
                  <Error>{errors.isAvailable?.message}</Error>
                </div>

                <div id="minha-galeria">
                  <div id="galeria">
                    <div>
                      <p className="p-img-capa">Imagem da capa</p>
                      <Input
                        {...register("cover_image_advert")}
                        placeholder="Inserir URL da imagem"
                        type="url"
                        value={coverImageAdvert}
                        onChange={(e) => setcoverImageAdvert(e.target.value)}
                      />
                      <Error>{errors.image_adverts?.message}</Error>

                      <p className="p-img-galeria">1° Imagem da galeria</p>
                      <Input
                        {...register("image_adverts")}
                        placeholder="Inserir URL da imagem"
                        type="url"
                      />
                    </div>
                  </div>
                </div>

                <p className="add-campo-img" onClick={addCampoGaleria}>
                  Adicionar campo para imagem da galeria
                </p>

                <div className="div-btn-cancela-submit">
                  <ButtonComponent
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      setHandleDelete(true);
                    }}
                  >
                    Excluir anúncio
                  </ButtonComponent>
                  <button className="btn-submit" type="submit">
                    Salvar alterações
                  </button>
                </div>
              </form>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
