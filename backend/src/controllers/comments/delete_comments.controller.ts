import { Request, Response } from "express";
import deleteAdvertsService from "../../services/adverts/delete_adverts.service";
import deleteCommentsService from "../../services/comments/delete_comments.service";

const deleteCommentsController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedComments = await deleteCommentsService(id);

  return res.status(204).json({ message: deletedComments });
};
export default deleteCommentsController;