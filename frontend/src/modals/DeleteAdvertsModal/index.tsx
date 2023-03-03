import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Button, Container } from "./styles";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
import { Error } from "../../style/error";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { iPasswordChangeRequest } from "../../interfaces/user.interface";
import schemaPasswordChange from "../../Validations/schemaPasswordChange";
import { UserContext } from "../../Context/UserContext";
import { AdvertContext } from "../../Context/AdvertContext";
import { iIdAdvert } from "../../interfaces/adverts.interfaces";


const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "background.paper",
    boxShadow: 7,
    p: 4,
    borderRadius: 2,
  };
  


export default function DeleteAdvertsModal ({id_adverts}: iIdAdvert) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {api_delete_advert} = useContext(AdvertContext)

    const deleteAdverts = () =>{
      api_delete_advert(id_adverts)
      handleClose()
    }

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

    return (
        <div>
      <Button type="button" onClick={handleOpen}>Excluir anúncio</Button>
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
              <div>
                <div className="div-header-modal">
                  <h3 className="h3-modal">Excluir anúncio</h3>
                  <button onClick={handleClose}>X</button>
                </div>

                <p className="paragraph-question">Tem certeza que deseja remover este anúncio?</p>
                <p className="paragraph-text">Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.</p>
               
                <div className="div-btn-cancela-submit">
                  <button type="button" className="btn-cancelar" onClick={handleClose}>
                    Cancelar
                  </button>
                  <button className="btn-submit" type="submit" onClick={deleteAdverts}>
                    Sim, excluir anúncio
                  </button>
                </div>
              </div>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
    )

}