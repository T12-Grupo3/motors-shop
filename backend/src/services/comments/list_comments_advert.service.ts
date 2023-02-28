import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IAdverts } from "../../interfaces/adverts";
import { IUser } from "../../interfaces/users";

const listCommentsAdvertService = async (
  advertId: string
): Promise<Adverts> => {
  const advertRepository = AppDataSource.getRepository(Adverts);
  const findAdvert = await advertRepository.findOne({
    where: {
      id: advertId,
    },
    relations: {
      comments: true,
      user: true,
    },
  });

  if (!findAdvert) {
    throw new AppError("Advert not found", 404);
  }

  return findAdvert;
};

export default listCommentsAdvertService;
