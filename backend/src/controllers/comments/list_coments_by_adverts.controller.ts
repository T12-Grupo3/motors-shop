import { Request, Response } from "express";
import listCommentsByAdvertService from "../../services/comments/list_comments_by_advert.service";

const listCommentsByAdvertController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const comments = await listCommentsByAdvertService(id);

  return res.status(200).json(comments);
};
export default listCommentsByAdvertController;
