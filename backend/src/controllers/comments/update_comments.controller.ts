import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import updateAdvertService from "../../services/adverts/update_adverts.service";
import updateCommentsService from "../../services/comments/update_comments.service";


// const updateCommentsController = async (req: Request, res: Response) => {

//     const commentsID = req.params.id
//     const userID = req.user.id


//     const updatedComments = await updateCommentsService(commentsID, userID)   
    
//     const updated = {
//         updatedComments,
//         message: "Comments with sucess"
//     }

//     return res.status(200).send(instanceToPlain(updated))
// }

// export default updateCommentsController


const updateCommentsController = async (req: Request, res: Response) => {
  const { comments} = req.body;
  const { id } = req.params;

  if (req.body.id != undefined || req.body.createdAt != undefined) {
    return res.status(401).json({
      error: "invalid field",
      message: "This field can not be updated!",
    });
  }

  const comment = await updateCommentsService({comments}, id);

  return res.status(200).json({ message: "Service updated!", comment: comment });
};

export default updateCommentsController;