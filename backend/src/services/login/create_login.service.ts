import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserLogin, IUserRequest  } from "../../interfaces/users";
import jwt from 'jsonwebtoken';
import { AppError } from "../../errors/appError";
import "dotenv/config";
import bcrypt, { compareSync } from "bcrypt";



const createLoginService = async({email,password}:IUserLogin) => {

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({
        email: email
    })
    
    if(!user){
        throw new AppError("Invalid email", 401)
    }

    const passwordMatch =  bcrypt.compareSync(password, user.password)

    if(!passwordMatch){
        throw new AppError("Invalid password", 403)
    }
    // if(!user.isActive){
    //     throw new AppError('User not active', 404 )
    // }

         
    const token = jwt.sign({
        isAdm: user.isAdm,
        email: user.email
    },
    process.env.SECRET_KEY as string,
    {
        expiresIn: "24h",
        subject: user.id
    })

    return {token, user}

}

export default createLoginService;