import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@mui/material";
import ReactDOM from "react-dom";
import { Container, Button } from "./styles";

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

export default function EditAdvertModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const [tipoAnuncio, setTipoAnuncio] = React.useState("venda");

  function handleTipoAnuncioChange(event: React.MouseEvent<HTMLButtonElement>) {
    if (event.currentTarget.classList.contains("btn-leilão")) {
      setTipoAnuncio("leilão");
    } else {
      setTipoAnuncio("venda");
    }
  }

  //

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="h3-anuncio">Editar anúncio</h3>

                <p className="p-tipo-anuncio">Tipo de anuncio</p>
                <div className="div-btn-tipo-anuncio">
                  <button
                    className="btn-tipo-anuncio btn-venda"
                    onClick={handleTipoAnuncioChange}
                  >
                    Venda
                  </button>
                  <button
                    className="btn-tipo-anuncio btn-leilão"
                    onClick={handleTipoAnuncioChange}
                  >
                    Leilão
                  </button>
                </div>

                <div>
                  <p className="p-info-veiculo">Infomações do veículo</p>

                  <p className="p-titulo-anuncio">Título</p>
                  <Input
                    className="input-titulo"
                    placeholder="Digitar título"
                  />
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
                  <Input placeholder="Digitar ano" type="number" />
                  <Input placeholder="0" type="number" />
                  <Input placeholder="Digitar preço" type="number" />
                </div>

                <div>
                  <p className="p-descricao-anuncio">Descrição</p>
                  <Input
                    className="input-descricao"
                    placeholder="Digitar descrição"
                  />
                </div>

                <p className="p-tipo-veiculo">Tipo de veículo</p>
                <div className="div-btn-tipo-veiculo">
                  <button className="btn-tipo-veiculo">Carro</button>
                  <button className="btn-tipo-veiculo">Moto</button>
                </div>

                <p className="p-publicado">Publicado</p>
                <div className="div-btn-publicado">
                  <button className="btn-tipo-publicado">Sim</button>
                  <button className="btn-tipo-publicado">Não</button>
                </div>

                <div id="minha-galeria">
                  <div id="galeria">
                    <div>
                      <p className="p-img-capa">Imagem da capa</p>
                      <Input placeholder="Inserir URL da imagem" type="url" />

                      <p className="p-img-galeria">1° Imagem da galeria</p>
                      <Input placeholder="Inserir URL da imagem" type="url" />
                    </div>
                  </div>
                </div>

                <p className="add-campo-img" onClick={addCampoGaleria}>
                  Adicionar campo para imagem da galeria
                </p>

                <div className="div-btn-cancela-submit">
                  <button className="btn-excluir" onClick={handleClose}>
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
