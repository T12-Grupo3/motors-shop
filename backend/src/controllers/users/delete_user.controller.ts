import { Request, Response } from "express";
import deleteUsderService from "../../services/users/delete_user.service";

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedUser = await deleteUsderService(id);

  return res.status(204).json({ message: deletedUser });
};
export default deleteUserController;
