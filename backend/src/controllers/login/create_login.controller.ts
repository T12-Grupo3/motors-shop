import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users"; 
import createLoginService from "../../services/login/create_login.service";

const createLoginController = async (req: Request, res: Response) => {

    const createLogin: IUserLogin = req.body;
    const token = await createLoginService(createLogin)
    return res.status(200).json({token})

};

export {createLoginController}