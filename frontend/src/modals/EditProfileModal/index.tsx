import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { iUserUpdate } from "../../interfaces/user.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container, Button, StyledProfileInputs } from "./styles";
import schemaUpdateProfile from "../../Validations/schemaUpdateProfile";
import api from "../../service/api";
import { UserContext } from "../../Context/UserContext";
import ReactInputMask from "react-input-mask";
import ButtonComponent from "../../components/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 7,
  p: 2.5,
  borderRadius: 2,
};

export default function EditProfileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = React.useContext(UserContext);

  const [userName, setUserName] = React.useState(user.name);
  const [userEmail, setUserEmail] = React.useState(user.email);
  const [userCpf, setUserCpf] = React.useState(user.cpf);
  const [userPhone, setUserPhone] = React.useState(user.phone_number);
  const [userBirthDate, setUserBirthDate] = React.useState(user.birth_date);
  const [userDescription, setUserDescription] = React.useState(
    user.description_user
  );

  const userId = localStorage.getItem("MOTORSSHOP:USERID");

  const api_update_user = async (data: iUserUpdate) => {
    try {
      await api.patch(`/users/${userId}`, data);

      console.log(data)
      handleClose()
    } catch (error) {
      console.error(error);
    }
  };

  const { register, handleSubmit } = useForm<iUserUpdate>({
    resolver: yupResolver(schemaUpdateProfile),
  });

  return (
    <div>
      <Button onClick={handleOpen}>Editar perfil</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Container>
            <form onSubmit={handleSubmit(api_update_user)}>
              <div className="div-header-modal">
                <h3 className="h3-profile">Editar perfil</h3>
                <button className="btn-x" onClick={handleClose}>
                  <img
                    src={require("../../utils/image/icon_close.png")}
                    alt="fechar"
                  />
                </button>
              </div>
              <div className="div-info-profile">
                <p className="p-info-profile">Infomações pessoais</p>

                <StyledProfileInputs>
                  <label className="l-info-name">Nome</label>
                  <input
                    placeholder="Samuel Leão Silva"
                    {...register("name")}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </StyledProfileInputs>

                <StyledProfileInputs>
                  <label className="l-info-email">Email</label>
                  <input
                    placeholder="samuel@kenzie.com.br"
                    type="email"
                    {...register("email")}
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </StyledProfileInputs>

                <StyledProfileInputs>
                  <label className="l-info-cpf">CPF</label>
                  <ReactInputMask
                    placeholder="900.880.090-00"
                    {...register("cpf")}
                    value={userCpf}
                    onChange={(e) => setUserCpf(e.target.value)}
                    mask="999.999.999-99"
                  />
                </StyledProfileInputs>

                <StyledProfileInputs>
                  <label className="l-info-phone">Celular</label>
                  <ReactInputMask
                    placeholder="(084) 90909-9092"
                    type="tel"
                    {...register("phone_number")}
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    mask="(99) 99999-9999"
                  />
                </StyledProfileInputs>

                <StyledProfileInputs>
                  <label className="l-info-dn">Data de nascimento</label>
                  <ReactInputMask
                    placeholder="09/12/99"
                    {...register("birth_date")}
                    value={userBirthDate}
                    onChange={(e) => setUserBirthDate(e.target.value)}
                    mask="9999-99-99"
                  />
                </StyledProfileInputs>

                <StyledProfileInputs>
                  <label className="l-info-description">Descrição</label>
                  <input
                    placeholder="Sua descrição"
                    {...register("description_user")}
                    value={userDescription}
                    onChange={(e) => setUserDescription(e.target.value)}
                  />
                </StyledProfileInputs>
              </div>

              <div className="div-cancel-submit">
                <ButtonComponent
                  onClick={handleClose}
                  background_color="grey-6"
                  border="grey-6"
                  color="grey-2"
                  hover_background_color="grey-5"
                  hover_border="grey-5"
                  hover_color="grey-whiteFixed"
                >
                  Cancelar
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
      </Modal>
    </div>
  );
}
