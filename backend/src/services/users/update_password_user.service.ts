import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IPasswordChange } from "../../interfaces/users"
import {hashSync} from "bcrypt";


const updatePasswordService = async ({password, email}: IPasswordChange) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({ email: email });
    console.log("*********************", findUser)

    if(!findUser){
        throw new AppError("Email not found", 404)
    }

    const hashedPassword = hashSync(password, 10)

    await userRepository.update(findUser.id, {
        password: hashedPassword
    })



    return "Sua senha foi alterada com sucesso!"

}

export default updatePasswordService