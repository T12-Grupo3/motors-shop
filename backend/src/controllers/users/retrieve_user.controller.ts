import { Request, Response } from "express";
import retrieveUserService from "../../services/users/list_retrieve_user.service";


const retrieveUserController = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const findUser = await retrieveUserService(userId);
    return res.json(findUser);
}

export default retrieveUserController;