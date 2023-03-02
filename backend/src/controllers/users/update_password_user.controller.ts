import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import updatePasswordService from "../../services/users/update_password_user.service"

const updatePasswordController = async (req: Request, res: Response) =>{
    const {password, email} = req.body
    // console.log("***************************", password, email)
    
    const passwordUpdated = await updatePasswordService({password, email})

    return res.status(204).json({ message: passwordUpdated });
}

export default updatePasswordController