import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
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

interface iRegisterAdvertsConfirm {
  handleConfirm: boolean;
}

export default function RegisterAdvertsConfirm({
  handleConfirm = true,
}: iRegisterAdvertsConfirm) {
  const [open, setOpen] = useState(handleConfirm);

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
                <h3>Sucesso!</h3>
                <button onClick={() => setOpen(false)}>
                  <img
                    src={require("../../utils/image/icon_close.png")}
                    alt="Fechar modal"
                  />
                </button>
              </StyledRegisterConfirmTop>
              <div>
                <h4>Seu anúncio foi criado com sucesso!</h4>
                <p>
                  Agora você poderá ver seus negócios crescendo em grande escala
                </p>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
