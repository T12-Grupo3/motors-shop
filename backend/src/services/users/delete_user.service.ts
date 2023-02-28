import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";


const deleteUsderService = async(id: string  ): Promise<string> => {

    const userRepository = AppDataSource.getRepository(User)

    const deletedUser = await userRepository.findOneBy({ id });

  if (!deletedUser) {
    throw new AppError("User not found");
  }

  await userRepository.delete({ id });

  return "User deleted";
};



export default deleteUsderService;