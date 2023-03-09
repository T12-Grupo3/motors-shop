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

  const onSubmit = async (data: iAdvertUpdateExtended) => {
    console.log(data);

    const images: string[] = [];
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      '#galeria Input[type="url"]'
    );
    inputs.forEach((Input: HTMLInputElement) => {
      images.push(Input.value);
    });

    const formData = {
      ...data,
      type_adverts: tipoAnuncioInputValue,
      type_veicule: tipoVeiculoInputValue,
      isAvailable: tipoPublicadoInputValue,
      image_adverts: images,
    };

    await api_update_advert(advert.id, formData);
    handleCloseEdit();
  };

  // Função para selecionar tipo de anuncio e veiculo

  const [tipoAnuncio, setTipoAnuncio] = useState<string>("sell");
  const [tipoAnuncioInputValue, setTipoAnuncioInputValue] = useState("sell");
  const [tipoAnuncioStyle, setTipoAnuncioStyle] = useState({
    venda: {
      backgroundColor: tipoAnuncio === "sell" ? "var(--color-brand-1)" : "",
      color: tipoAnuncio === "sell" ? "var(--color-grey-whiteFixed)" : "",
      border: tipoAnuncio === "sell" ? "var(--color-brand-1)" : "",
    },
    leilão: {
      backgroundColor: tipoAnuncio === "auction" ? "var(--color-brand-1)" : "",
      color: tipoAnuncio === "auction" ? "var(--color-grey-whiteFixed)" : "",
      border: tipoAnuncio === "auction" ? "var(--color-brand-1)" : "",
    },
  });

  const [tipoVeiculoInputValue, setTipoVeiculoInputValue] = useState("veiculo");
  const [tipoVeiculo, setTipoVeiculo] = useState("car");
  const [tipoVeiculoStyle, setTipoVeiculoStyle] = useState({
    carro: {
      backgroundColor: tipoVeiculo === "car" ? "var(--color-brand-1)" : "",
      color: tipoVeiculo === "car" ? "var(--color-grey-whiteFixed)" : "",
      border: tipoVeiculo === "car" ? "var(--color-brand-1)" : "",
    },
    moto: {
      backgroundColor:
        tipoVeiculo === "motorcycle" ? "var(--color-brand-1)" : "",
      color: tipoVeiculo === "motorcycle" ? "var(--color-grey-whiteFixed)" : "",
      border: tipoVeiculo === "motorcycle" ? "var(--color-brand-1)" : "",
    },
  });

  const [tipoPublicadoInputValue, setTipoPublicadoInputValue] = useState(true);
  const [tipoPublicado, setTipoPublicado] = useState(false);
  const [tipoPublicadoStyle, setTipoPublicadoStyle] = useState({
    sim: {
      backgroundColor: tipoPublicado === true ? "var(--color-brand-1)" : "",
      color: tipoPublicado === true ? "var(--color-grey-whiteFixed)" : "",
      border: tipoPublicado === true ? "var(--color-brand-1)" : "",
    },
    não: {
      backgroundColor: tipoPublicado === false ? "var(--color-brand-1)" : "",
      color: tipoPublicado === false ? "var(--color-grey-whiteFixed)" : "",
      border: tipoPublicado === false ? "var(--color-brand-1)" : "",
    },
  });

  // função para mudar o preço para lance incial e seleção de buttons

  function handleTipoAnuncioChange(event: React.MouseEvent<HTMLButtonElement>) {
    const anuncio = event.currentTarget.classList.contains("btn-leilão")
      ? "auction"
      : "sell";
    setTipoAnuncio(anuncio);
    setTipoAnuncioInputValue(anuncio);
    setTipoAnuncioStyle({
      venda: {
        backgroundColor: anuncio === "sell" ? "var(--color-brand-1)" : "",
        color: anuncio === "sell" ? "var(--color-grey-whiteFixed)" : "",
        border: anuncio === "sell" ? "var(--color-brand-1)" : "",
      },
      leilão: {
        backgroundColor: anuncio === "auction" ? "var(--color-brand-1)" : "",
        color: anuncio === "auction" ? "var(--color-grey-whiteFixed)" : "",
        border: anuncio === "auction" ? "var(--color-brand-1)" : "",
      },
    });
  }

  function handleTipoVeiculoChange(event: React.MouseEvent<HTMLButtonElement>) {
    const veiculo = event.currentTarget.classList.contains("btn-tipo-carro")
      ? "car"
      : "motorcycle";
    setTipoVeiculo(veiculo);
    setTipoVeiculoInputValue(veiculo);
    setTipoVeiculoStyle({
      carro: {
        backgroundColor: veiculo === "car" ? "var(--color-brand-1)" : "",
        color: veiculo === "car" ? "var(--color-grey-whiteFixed)" : "",
        border: veiculo === "car" ? "var(--color-brand-1)" : "",
      },
      moto: {
        backgroundColor: veiculo === "motorcycle" ? "var(--color-brand-1)" : "",
        color: veiculo === "motorcycle" ? "var(--color-grey-whiteFixed)" : "",
        border: veiculo === "motorcycle" ? "var(--color-brand-1)" : "",
      },
    });
  }

  function handleTipoPublicadoChange(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const publicado = event.currentTarget.classList.contains(
      "btn-tipo-publi-yes"
    )
      ? true
      : false;
    setTipoPublicado(true);
    setTipoPublicadoInputValue(true);
    setTipoPublicadoStyle({
      sim: {
        backgroundColor: publicado === true ? "var(--color-brand-1)" : "",
        color: publicado === true ? "var(--color-grey-whiteFixed)" : "",
        border: publicado === true ? "var(--color-brand-1)" : "",
      },
      não: {
        backgroundColor: publicado === false ? "var(--color-brand-1)" : "",
        color: publicado === false ? "var(--color-grey-whiteFixed)" : "",
        border: publicado === false ? "var(--color-brand-1)" : "",
      },
    });
  }

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
                  <button
                    className="btn-tipo-anuncio btn-venda"
                    onClick={handleTipoAnuncioChange}
                    style={tipoAnuncioStyle.venda}
                    type="button"
                  >
                    Venda
                  </button>
                  <button
                    className="btn-tipo-anuncio btn-leilão"
                    onClick={handleTipoAnuncioChange}
                    style={tipoAnuncioStyle.leilão}
                    type="button"
                  >
                    Leilão
                  </button>
                  <input
                    type="hidden"
                    {...register("type_adverts", {
                      value: tipoAnuncioInputValue,
                    })}
                    defaultValue={typeAdvert}
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
                    value={titleAdverts}
                    onChange={(e) => settitleAdverts(e.target.value)}
                  />
                  <Error>{errors.title_adverts?.message}</Error>
                </div>

                <div className="div-info-p-aqp">
                  <p className="p-ano">Ano</p>
                  <p className="p-quilometragem">Quilometragem</p>
                  {tipoAnuncio === "sell" && (
                    <p className="p-preço venda-venda">Preço</p>
                  )}
                  {tipoAnuncio === "auction" && (
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
                  <button
                    className={`btn-tipo-carro btn-tipo-veiculo ${
                      tipoVeiculoInputValue === "car" ? "active" : ""
                    }`}
                    onClick={handleTipoVeiculoChange}
                    style={tipoVeiculoStyle.carro}
                    type="button"
                  >
                    Carro
                  </button>
                  <button
                    className={`btn-tipo-veiculo ${
                      tipoVeiculoInputValue === "motocycle" ? "active" : ""
                    }`}
                    onClick={handleTipoVeiculoChange}
                    style={tipoVeiculoStyle.moto}
                    type="button"
                  >
                    Moto
                  </button>
                  <input
                    type="hidden"
                    {...register("type_veicule", {
                      value: tipoVeiculoInputValue,
                    })}
                    defaultValue={typeVeicule}
                  />
                </div>
                <Error>{errors.type_veicule?.message}</Error>

                <p className="p-publicado">Publicado</p>
                <div className="div-btn-publicado">
                  <button
                    value="true"
                    className={`btn-tipo-publicado btn-tipo-publi-yes ${
                      tipoPublicadoInputValue === true ? "active" : ""
                    }`}
                    onClick={handleTipoPublicadoChange}
                    style={tipoPublicadoStyle.sim}
                    type="button"
                  >
                    Sim
                  </button>

                  <button
                    value="false"
                    className={`btn-tipo-publicado btn-tipo-publi-no ${
                      tipoPublicadoInputValue === false ? "active" : ""
                    }`}
                    onClick={handleTipoPublicadoChange}
                    style={tipoPublicadoStyle.não}
                    type="button"
                  >
                    Não
                  </button>
                  <input
                    type="hidden"
                    {...register("isAvailable", {
                      value: tipoPublicadoInputValue,
                    })}
                  />
                </div>
                <Error>{errors.isAvailable?.message}</Error>

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
                      <Input placeholder="Inserir URL da imagem" type="url" />
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
