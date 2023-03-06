import { useContext, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import { StyledRegisterConfirmTop } from "../RegisterUserConfirm/style";
import ButtonComponent from "../../components/Button";
import api from "../../service/api";
import { UserContext } from "../../Context/UserContext";
import { StyledDeleteButtons } from "./style";

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

interface iDeleteUserModal {
  user_id: string;
}

export default function DeleteUserModal({ user_id }: iDeleteUserModal) {
  const [handleDelete, sethandleDelete] = useState(false);
  const [open, setOpen] = useState(handleDelete);
  const navigate = useNavigate();

  const { logoutProfileView, api_delete_user } = useContext(UserContext);



  useEffect(() => {
    const openModal = (isOpen: boolean) => {
      setOpen(isOpen);
    };
    openModal(handleDelete);
  }, [handleDelete]);

  return (
    <div>
      <button onClick={() => sethandleDelete(true)}>Deletar perfil</button>
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
            <div>
              <StyledRegisterConfirmTop>
                <h2>Deletar perfil</h2>
                <button onClick={() => setOpen(false)}>
                  <img
                    src={require("../../utils/image/icon_close.png")}
                    alt="Fechar modal"
                  />
                </button>
              </StyledRegisterConfirmTop>
              <div>
                <h2>Tem certeza que deseja deletar o perfil?</h2>
                <p>
                  Todos os seus dados serão perdidos e não é possivel recuperar
                  eles
                </p>
                <StyledDeleteButtons>
                  <ButtonComponent onClick={() => sethandleDelete(false)}>
                    Cancelar
                  </ButtonComponent>
                  <ButtonComponent
                    onClick={() => api_delete_user(user_id)}
                    background_color="alert-3"
                    color="alert-1"
                    border="alert-3"
                    hover_background_color="alert-2"
                    hover_color="alert-1"
                    hover_border="alert-2"
                  >
                    Deletar
                  </ButtonComponent>
                </StyledDeleteButtons>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
