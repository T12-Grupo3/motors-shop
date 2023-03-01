import { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import { Container, Button, Input, Input2 } from "./styles";
import schemaRegisterAdverts from "../../Validations/schemaRegisterAdverts";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRequestAdvertsExtended } from "../../interfaces/adverts.interfaces";
import { AdvertContext } from "../../Context/AdvertContext";
import { Error } from "../../style/error";

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

  const { api_create_adverts } = useContext(AdvertContext);

  const handleForm = async (data: IRequestAdvertsExtended) => {
    console.log(data);
    const formData = {
      ...data,
      type_adverts: data.tipoAnuncio,
      type_veicule: data.tipoVeiculo,
    };
    formData.galery_image = [
      "https://t.ctcdn.com.br/5XPASDBUosgmBv5Ptpxcd6eTJso=/512x288/smart/filters:format(webp)/i257652.jpeg",
    ];
    await api_create_adverts(formData);
  };

  // Função para selecionar tipo de anuncio e veiculo

  const [tipoAnuncioStyle, setTipoAnuncioStyle] = useState({
    venda: { backgroundColor: "", color: "" },
    leilão: { backgroundColor: "", color: "" },
  });

  const [tipoVeiculoStyle, setTipoVeiculoStyle] = useState({
    carro: { backgroundColor: "", color: "" },
    moto: { backgroundColor: "", color: "" },
  });

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
      <Input2 placeholder="Inserir URL da imagem" type="url" />,
      novoInput
    );

    novoCampo.appendChild(novoTitulo);
    novoCampo.appendChild(novoInput);

    galeria.appendChild(novoCampo);
  }

  // função para mudar o preço para lance incial e tranformar a opçao selecionada

  const [tipoAnuncio, setTipoAnuncio] = useState("venda");
  const [tipoAnuncioInputValue, setTipoAnuncioInputValue] = useState("venda");

  function handleTipoAnuncioChange(event: React.MouseEvent<HTMLButtonElement>) {
    const anuncio = event.currentTarget.classList.contains("btn-leilão")
      ? "leilão"
      : "venda";
    setTipoAnuncio(anuncio);
    setTipoAnuncioInputValue(anuncio);
    setTipoAnuncioStyle({
      venda: {
        backgroundColor: anuncio === "venda" ? "#4529e6" : "",
        color: anuncio === "venda" ? "#FFFFFF" : "",
      },
      leilão: {
        backgroundColor: anuncio === "leilão" ? "#4529e6" : "",
        color: anuncio === "leilão" ? "#FFFFFF" : "",
      },
    });
  }

  const [tipoVeiculoInputValue, setTipoVeiculoInputValue] = useState("veiculo");
  const [tipoVeiculo, setTipoVeiculo] = useState("veiculo");

  function handleTipoVeiculoChange(event: React.MouseEvent<HTMLButtonElement>) {
    const veiculo = event.currentTarget.classList.contains("btn-tipo-carro")
      ? "carro"
      : "moto";
    setTipoVeiculo(veiculo);
    setTipoVeiculoInputValue(veiculo);
    setTipoVeiculoStyle({
      carro: {
        backgroundColor: veiculo === "carro" ? "#4529e6" : "",
        color: veiculo === "carro" ? "#FFFFFF" : "",
      },
      moto: {
        backgroundColor: veiculo === "moto" ? "#4529e6" : "",
        color: veiculo === "moto" ? "#FFFFFF" : "",
      },
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequestAdvertsExtended>({
    resolver: yupResolver(schemaRegisterAdverts),
  });

  return (
    <div>
      <Button onClick={handleOpen}>Criar anuncio</Button>
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
              <form onSubmit={handleSubmit(handleForm)}>
                <h3 className="h3-anuncio">Criar anuncio</h3>

                <p className="p-tipo-anuncio">Tipo de anuncio</p>
                <div className="div-btn-tipo-anuncio">
                  <button
                    className="btn-tipo-anuncio btn-venda"
                    onClick={handleTipoAnuncioChange}
                    style={tipoAnuncioStyle.venda}
                  >
                    Venda
                  </button>
                  <button
                    className="btn-tipo-anuncio btn-leilão"
                    onClick={handleTipoAnuncioChange}
                    style={tipoAnuncioStyle.leilão}
                  >
                    Leilão
                  </button>
                  <input
                    type="hidden"
                    {...register("type_adverts", {
                      value: tipoAnuncioInputValue,
                    })}
                  />
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
                    className="info-aqp"
                  />
                  <Error>{errors.year_adverts?.message}</Error>

                  <Input
                    {...register("kilometers_adverts")}
                    placeholder="0"
                    type="number"
                    className="info-aqp"
                  />
                  <Error>{errors.kilometers_adverts?.message}</Error>

                  <Input
                    {...register("price_adverts")}
                    placeholder="Digitar preço"
                    type="number"
                    className="info-aqp"
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
                  <button
                    className={`btn-tipo-carro btn-tipo-veiculo ${
                      tipoVeiculoInputValue === "carro" ? "active" : ""
                    }`}
                    onClick={handleTipoVeiculoChange}
                    style={tipoVeiculoStyle.carro}
                  >
                    Carro
                  </button>
                  <button
                    className={`btn-tipo-veiculo ${
                      tipoVeiculoInputValue === "moto" ? "active" : ""
                    }`}
                    onClick={handleTipoVeiculoChange}
                    style={tipoVeiculoStyle.moto}
                  >
                    Moto
                  </button>
                  <input
                    type="hidden"
                    {...register("type_veicule", {
                      value: tipoVeiculoInputValue,
                    })}
                  />
                </div>
                <Error>{errors.type_veicule?.message}</Error>

                <div id="minha-galeria">
                  <div id="galeria">
                    <div>
                      <p className="p-img-capa">Imagem da capa</p>
                      <Input2
                        {...register("cover_image_adverts")}
                        placeholder="Inserir URL da imagem"
                        type="url"
                      />
                      <Error>{errors.cover_image_adverts?.message}</Error>

                      <p className="p-img-galeria">1° Imagem da galeria</p>
                      <Input2
                        // {...register('galery_image')}
                        placeholder="Inserir URL da imagem"
                        type="url"
                      />
                      {/* <Error>{errors.image_adverts?.message}</Error> */}
                    </div>
                  </div>
                </div>

                <p className="add-campo-img" onClick={addCampoGaleria}>
                  Adicionar campo para imagem da galeria
                </p>

                <div className="div-btn-cancela-submit">
                  <button className="btn-cancelar" onClick={handleClose}>
                    Cancelar
                  </button>
                  <button
                    className="btn-submit"
                    type="submit"
                    onClick={handleClose}
                  >
                    Criar anúncio
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
