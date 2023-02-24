import { useContext, useState } from "react"

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@mui/material";
import ReactDOM from "react-dom";
import { Container, Button } from "./styles";
import { yupResolver } from '@hookform/resolvers/yup';
import { iAdvertUpdate, iIdAdvert } from "../../interfaces/adverts.interfaces";
import schemaUpdateAdverts from "../../Validations/schemaUpdateAdverts";
import { Error } from "../../style/error";
import { AdvertContext } from "../../Context/AdvertContext";

type Inputs = {
  example: string;
};

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

export default function EditAdvertModal({id_adverts}: iIdAdvert) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {api_update_advert, api_delete_advert, api_read_id_advert} = useContext(AdvertContext)

  const updateAdverts = async (data: iAdvertUpdate) =>{
    await api_update_advert(id_adverts, data)
    handleClose()
  }

  const deleteAdverts = async () =>{
    await api_delete_advert(id_adverts)
    handleClose()
  }

  // tentativa de caturar os valores dos inputs cadastrados, para o modal de edição.
  const getAdverts = async ()=>{
    const advertObj = await api_read_id_advert(id_adverts)

  }


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

  function handleTipoAnuncioChange(event: React.MouseEvent<HTMLButtonElement>) {
    if (event.currentTarget.classList.contains("btn-leilão")) {
      setTipoAnuncio("leilão");
    } else {
      setTipoAnuncio("venda");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<iAdvertUpdate>({
    resolver: yupResolver(schemaUpdateAdverts)
  });

  return (
    <div>
      <Button onClick={handleOpen}>Editar</Button>
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
                  <button onClick={handleClose}>X</button>

                </div>

                <label className="p-tipo-anuncio">Tipo de anuncio</label>
                <select
                {...register('type_adverts')}
                className="div-btn-tipo-anuncio">

                  <option
                    className="btn-tipo-anuncio btn-venda"
                    value="sell"
                    // defaultValue="sell"
                  >Venda
                  </option>

                  <option
                    className="btn-tipo-anuncio btn-leilão"
                    value="auction"
                    >Leilão
                  </option>
                </select>
                  <Error>{errors.type_adverts?.message}</Error>

                <div>
                  <p className="p-info-veiculo">Infomações do veículo</p>

                  <p className="p-titulo-anuncio">Título</p>
                  <Input
                    {...register('title_adverts')}
                    className="input-titulo"
                    placeholder="Digitar título"
                    // value={advertObj.title_adverts}
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
                    {...register('year_adverts')}
                    placeholder="Digitar ano"
                    type="number"
                    />
                    <Error>{errors.year_adverts?.message}</Error>

                    <Input
                      {...register('kilometers_adverts')}
                      placeholder="0"
                      type="number"
                      />
                    <Error>{errors.kilometers_adverts?.message}</Error>

                    <Input
                      {...register('price_adverts')}
                      placeholder="Digitar preço"
                      type="number"
                      />
                    <Error>{errors.price_adverts?.message}</Error>
                </div>

                <div>
                  <p className="p-descricao-anuncio">Descrição</p>
                  <Input
                    {...register('description_adverts')}
                    className="input-descricao"
                    placeholder="Digitar descrição"
                  />
                  <Error>{errors.description_adverts?.message}</Error>
                </div>
                <div>
                
                <label className="p-tipo-veiculo">Tipo de veículo</label>
                  <select
                    className="div-btn-tipo-veiculo"
                    {...register('type_veicule')}
                  >

                    <option
                      value="car"
                      className="btn-tipo-veiculo"
                    >Carro
                    </option>

                    <option
                    value="motorcycle"
                    className="btn-tipo-veiculo"
                    >Moto
                    </option>

                  </select>
                    <Error>{errors.type_veicule?.message}</Error>

                </div>
                <div>
                  <label className="p-publicado">Publicado</label>
                  <select 
                    {...register('isAvailable')}
                    className="div-btn-publicado"
                  >
                    
                    <option
                    value='true'
                    className="btn-tipo-publicado"
                    >Sim
                    </option>

                    <option
                    value='false'
                    className="btn-tipo-publicado"
                    >Não
                    </option>

                  </select>
                    <Error>{errors.isAvailable?.message}</Error>
                </div>

                <div id="minha-galeria">
                  <div id="galeria">
                    <div>
                      <p className="p-img-capa">Imagem da capa</p>
                      <Input
                        {...register('image_adverts')}
                        placeholder="Inserir URL da imagem"
                        type="url"
                      />
                      <Error>{errors.image_adverts?.message}</Error>

                      <p className="p-img-galeria">1° Imagem da galeria</p>
                      <Input
                        {...register('image_adverts')}
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
                  <button className="btn-excluir" onClick={deleteAdverts}>
                    Excluir anúncio
                  </button>
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
