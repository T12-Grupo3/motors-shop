import { useState } from "react";
import { ContainerImageModal } from "./style";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

interface ImageVeiculeModalProps {
    imgSrc: string;
    open: boolean;
    onClose: () => void;
  }

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
} as const;

export default function ImageVeiculeModal({
    imgSrc,
    open,
    onClose,
  }: ImageVeiculeModalProps) {
    return (
      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ContainerImageModal>
              <div>
                <div className="div-header-modal">
                  <button onClick={onClose}>X</button>
                </div>
                <div className="imgVeiculoModal">
                  <img src={imgSrc} alt="" />
                </div>
              </div>
            </ContainerImageModal>
          </Box>
        </Fade>
      </Modal>
    );
  }