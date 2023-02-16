import { Request, Response } from "express";
import deleteAdvertsService from "../../services/adverts/delete_adverts.service";

const deleteAdvertsController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteAdvert: string = await deleteAdvertsService(id);

  return res.status(204).json({ message: deleteAdvert });
};
export default deleteAdvertsController;
