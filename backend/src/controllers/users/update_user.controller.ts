import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import { instanceToPlain } from "class-transformer";
import updateUserService from "../../services/users/update_user.service";


const updateUserController = async (req: Request, res: Response) => {
        const {name, email, password, cpf, phone_number, description_user, birth_date, address }: IUserUpdate = req.body
        const userId: string = req.params.id
        
                
        const updatedUser = await updateUserService({name, email, password, cpf, phone_number, description_user, birth_date, address}, userId)
            return res.json(instanceToPlain(updatedUser))
        
       
   
}
export default updateUserController;