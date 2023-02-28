import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listUsersService from "../../services/users/list_users.service";

const listUsersController = async (req: Request, res: Response) =>{

    const allUsers = await listUsersService()

    return res.status(201).json(allUsers)
}

export default listUsersController