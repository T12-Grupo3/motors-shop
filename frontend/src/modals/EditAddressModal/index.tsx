import { useContext, useState } from "react";
import { Container, Form } from "./styles";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { iAdressRequest } from "../../interfaces/user.interface";
import { UserContext } from "../../Context/UserContext";
import schemaUpdateAddress from "../../Validations/schemaUpdateAddress";

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
  
export default function EditAddressModal () {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {api_update_address} = useContext(UserContext)

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
    
      const handleForm = ({ zipCode, state, city, street, number, complement }: iAdressRequest) =>{
          const newData: any = {"address": {
              zipCode: zipCode,
              state: state,
              city: city,
              street: street,
              number: number,
              complement: complement
            }}
            console.log(newData)

        api_update_address(newData)
      }
   
    const {
        register,
        handleSubmit,
      } = useForm<iAdressRequest>({
        resolver: yupResolver(schemaUpdateAddress)
      });

    return (
        <div>
      <button onClick={handleOpen}>Editar Endereço</button>
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
              <Form onSubmit={handleSubmit(handleForm)}>
                <h3 className="h3-modal">Editar Endereço</h3>
                    <p>Informações do endereço</p>
                    <label>CEP</label>
                    <input
                    className="bigger-input"
                    type="text"
                    {...register('zipCode')}
                    placeholder="88888-888"
                    />

                    <div className="div-input-row">
                        <div className="div-input-column">
                            <label>Estado</label>
                            <input
                            className="smaller-input"
                            type="text"
                            {...register('state')}
                            placeholder="Paraná"
                            />
                        </div>

                        <div className="div-input-column">
                            <label>Cidade</label>
                            <input
                            className="smaller-input"
                            type="text"
                            {...register('city')}
                            placeholder="Curitiba"
                            />
                        </div>
                    </div>

                    <label>Rua</label>
                    <input
                    className="bigger-input"
                    type="text"
                    {...register('street')}
                    placeholder="Rua do Paraná"
                    />

                    <div className="div-input-row">
                        <div className="div-input-column">
                            <label>Número</label>
                            <input
                            className="smaller-input"
                            type="text"
                            {...register('number')}
                            placeholder="1029"
                            />
                        </div>

                        <div className="div-input-column">
                            <label>Complemento</label>
                            <input
                            className="smaller-input"
                            type="text"
                            {...register('complement')}
                            placeholder="Apart 12"
                            />
                        </div>
                    </div>

                <div className="div-btn-cancela-submit">
                  <button type="button" className="btn-cancelar" onClick={handleClose}>
                    Cancelar
                  </button>
                  <button className="btn-submit" type="submit" onClick={handleClose}>
                    Salvar alterações
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