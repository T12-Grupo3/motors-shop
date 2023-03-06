import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
import { StyledRegisterConfirmTop } from "./style";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 7,
  p: 4,
  borderRadius: 2,
};

interface iRegisterUserConfirm {
  handleConfirm: boolean;
}

export default function RegisterUserConfirm({
  handleConfirm = true,
}: iRegisterUserConfirm) {
  const [open, setOpen] = useState(handleConfirm);
  const navigate = useNavigate();

  useEffect(() => {
    const openModal = (isOpen: boolean) => {
      setOpen(isOpen);
    };
    openModal(handleConfirm);
  }, [handleConfirm]);

  return (
    <div>
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
                <h2>Sucesso!</h2>
                <button onClick={() => setOpen(false)}>
                  <img
                    src={require("../../utils/image/icon_close.png")}
                    alt="Fechar modal"
                  />
                </button>
              </StyledRegisterConfirmTop>
              <div>
                <h2>Sua conta foi criada com sucesso!</h2>
                <p>
                  Agora você poderá ver seus negócios crescendo em grande escala
                </p>
                <Button
                  onClick={() => navigate("/login", { replace: true })}
                  background_color="brand-1"
                  color="grey-whiteFixed"
                  border="brand-1"
                  hover_background_color="brand-2"
                  hover_color="grey-whiteFixed"
                  hover_border="brand-2"
                >
                  Ir para o login
                </Button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
