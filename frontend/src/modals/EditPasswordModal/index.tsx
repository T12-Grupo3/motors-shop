import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Button, Container, Form } from "./styles";
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


const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 450,
    bgcolor: "background.paper",
    boxShadow: 7,
    p: 4,
    borderRadius: 2,
  };
  


export default function EditPasswordModal () {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {api_change_password} = useContext(UserContext)

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
    
   
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<iPasswordChangeRequest>({
        resolver: yupResolver(schemaPasswordChange)
      });

    return (
        <div>
      <Button type="button" onClick={handleOpen}>Esqueci minha senha</Button>
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
              <Form onSubmit={handleSubmit(api_change_password)}>
                <h2 className="h3-modal">Alterar Senha</h2>
               
                  <label>Email cadastrado</label>
                  <input
                    type="text"
                    {...register('email')}
                    placeholder="nome@email.com"
                    />
              
                  <label>Nova senha</label>
                  <input
                    type="password"
                    {...register('password')}
                    placeholder="Digite a nova senha"
                    />
              
                  <label>Confirmação da senha</label>
                  <input
                  type="password"
                  {...register('password_confirm')}
                  placeholder="Confirme a senha"
                  />

                <div className="div-btn-cancela-submit">
                  <button type="button" className="btn-cancelar" onClick={handleClose}>
                    Cancelar
                  </button>
                  <button className="btn-submit" type="submit" onClick={handleClose}>
                    Alterar Senha
                  </button>
                </div>
              </Form>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </div>
    )

}