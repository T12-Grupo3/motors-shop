import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users"; 
import { instanceToPlain } from "class-transformer";
import createUserService from "../../services/users/create_user.service";


const createUserController = async(req: Request, res: Response) => {

    
    const {name, email, password, cpf, phone_number, description_user, birth_date, isAdm, address}:IUserRequest = req.body;

    const newUser = await createUserService({name, email, password, cpf, phone_number, description_user, birth_date, isAdm, address});

    return res.status(201).json(instanceToPlain(newUser));


};

export default createUserController