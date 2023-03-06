import { useContext, useState } from "react"
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm } from "react-hook-form";
import { Input } from "@mui/material";
import { ContainerModalComments, Button } from "./style";
import { yupResolver } from '@hookform/resolvers/yup';
import schemaUpdateAdverts from "../../Validations/schemaUpdateAdverts";
import { Error } from "../../style/error";
import { AdvertContext } from "../../Context/AdvertContext";
import ButtonComponent from "../../components/Button";
import { iCommentsRequest, iIdComments } from "../../interfaces/comments.interfaces";

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

export default function EditCommentsModal({id_comments}: iIdComments) {
  const [open, setOpen] = useState(false);
  const handleOpenEdit = () => setOpen(true);
  const handleCloseEdit = () => setOpen(false);

  const {api_update_comments, setHandleDelete, api_delete_comments} = useContext(AdvertContext)

  const updateComments =  (data: iCommentsRequest) =>{
    api_update_comments(id_comments, data)
    handleCloseEdit()
  }
//   console.log(id_comments)
//   Função para selecionar tipo de anuncio

//   function changeButtonStyleOnClickAdvert(
//     buttons: HTMLButtonElement[],
//     newBackgroundColor: string,
//     newColor: string
//   ): void {
//     buttons.forEach((button) => {
//       button.addEventListener("click", () => {
//         buttons.forEach((btn) => {
//           btn.style.backgroundColor = "";
//           btn.style.color = "";
//         });
//         button.style.backgroundColor = newBackgroundColor;
//         button.style.color = newColor;
//       });
//     });
//   }

//   const myButtons = document.querySelectorAll(".btn-tipo-anuncio");
//   changeButtonStyleOnClickAdvert(
//     Array.from(myButtons) as HTMLButtonElement[],
//     "#4529e6",
//     "#FFFFFF"
//   );

//   // Função para selecionar o tipo de veículo

//   function changeButtonStyleOnClickVehicle(
//     buttons: HTMLButtonElement[],
//     newBackgroundColor: string,
//     newColor: string
//   ): void {
//     buttons.forEach((button) => {
//       button.addEventListener("click", () => {
//         buttons.forEach((btn) => {
//           btn.style.backgroundColor = "";
//           btn.style.color = "";
//         });
//         button.style.backgroundColor = newBackgroundColor;
//         button.style.color = newColor;
//       });
//     });
//   }

//   const myButtonsVehicle = document.querySelectorAll(".btn-tipo-veiculo");
//   changeButtonStyleOnClickVehicle(
//     Array.from(myButtonsVehicle) as HTMLButtonElement[],
//     "#4529e6",
//     "#FFFFFF"
//   );

//   // Função para selecionar se está publicado ou não

//   function changeButtonStyleOnClickPubli(
//     buttons: HTMLButtonElement[],
//     newBackgroundColor: string,
//     newColor: string
//   ): void {
//     buttons.forEach((button) => {
//       button.addEventListener("click", () => {
//         buttons.forEach((btn) => {
//           btn.style.backgroundColor = "";
//           btn.style.color = "";
//         });
//         button.style.backgroundColor = newBackgroundColor;
//         button.style.color = newColor;
//       });
//     });
//   }

//   const myButtonsPubli = document.querySelectorAll(".btn-tipo-publicado");
//   changeButtonStyleOnClickPubli(
//     Array.from(myButtonsPubli) as HTMLButtonElement[],
//     "#4529e6",
//     "#FFFFFF"
//   );

// const removeComments = async (comments_id: string) => {
//     console.log(comments_id)
         
//       const newComments = comments.filter((elem)=>( elem.id !== comments_id ))
                 
//       setcomments(newComments);

//       api_delete_comments(newComments)
//     } 
  const removeComments = async (id_comments: string) => {
    api_delete_comments(id_comments);
    
    
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<iCommentsRequest>({
    resolver: yupResolver(schemaUpdateAdverts)
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
            <ContainerModalComments>
              <form onSubmit={handleSubmit(updateComments)}>
                <div className="div-header-modal">
                  <h3 className="h3-anuncio">Editar Comentário</h3>
                  <button onClick={handleCloseEdit}>X</button>
                </div>

                
                <div>
                 

                  <p className="p-titulo-anuncio">Comentário</p>
                  <Input
                    {...register('comments')}
                    className="input-titulo"
                    placeholder="Digitar Cometário"
                    />
                  <Error>{errors.comments?.message}</Error>
                </div>
                    


                <div className="div-btn-cancela-submit">
                  <ButtonComponent type="button" onClick={()=>{setOpen(false); setHandleDelete(true); removeComments(id_comments)} }>Excluir Comentário</ButtonComponent>
                  <button className="btn-submit" type="submit">
                    Salvar alterações
                  </button>
                </div>
              </form>
            </ContainerModalComments>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
