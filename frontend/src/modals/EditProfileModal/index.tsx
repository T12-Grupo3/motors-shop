import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { iUserUpdate } from "../../interfaces/user.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container, Button } from "./styles";
import schemaUpdateProfile from "../../Validations/schemaUpdateProfile";
import api from "../../service/api";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 7,
  p: 4,
  borderRadius: 2,
};

export default function EditProfileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userId = localStorage.getItem("MOTORSSHOP:USERID");

  const api_update_user = async (data: iUserUpdate) => {
    try {
      await api.patch(`/users/${userId}`, data);
    } catch (error) {
      console.error(error);
    }
  };

  const {
    register,
    handleSubmit,
  } = useForm<iUserUpdate>({
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
                  X
                </button>
              </div>
              <div className="div-info-profile">
                <p className="p-info-profile">Infomações pessoais</p>

                <label className="l-info-name">Nome</label>
                <input placeholder="Samuel Leão Silva" {...register("name")} />

                <label className="l-info-email">Email</label>
                <input
                  placeholder="samuel@kenzie.com.br"
                  type="email"
                  {...register("email")}
                />

                <label className="l-info-cpf">CPF</label>
                <input
                  placeholder="900.880.090-00"
                  type="number"
                  {...register("cpf")}
                />

                <label className="l-info-phone">Celular</label>
                <input
                  placeholder="(084) 90909-9092"
                  type="tel"
                  {...register("phone_number")}
                />

                <label className="l-info-dn">Data de nascimento</label>
                <input
                  placeholder="09/12/99"
                  type="date"
                  {...register("birth_date")}
                />

                <label className="l-info-description">Descrição</label>
                <input
                  placeholder="Sua descrição"
                  {...register("description_user")}
                />
              </div>

              <div className="div-cancel-submit">
                <button className="btn-cancel" onClick={handleClose}>
                  Cancelar
                </button>

                <button className="btn-submit" type="submit">
                  Salvar alterações
                </button>
              </div>
            </form>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
