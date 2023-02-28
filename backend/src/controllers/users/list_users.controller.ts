import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer"
import listUsersService from "../../services/users/list_users.service";

const usersListController = async(req: Request, res: Response) => {

    
    const usersList = await listUsersService();

    return res.status(201).json(instanceToPlain(usersList));


};

export default usersListController