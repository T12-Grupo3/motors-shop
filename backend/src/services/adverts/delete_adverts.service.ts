import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts.entity";
import { AppError } from "../../errors/appError";

const deleteAdvertsService = async (id: string) => {
  const advertsRepository = AppDataSource.getRepository(Adverts);

  const findAdvert = await advertsRepository.findOneBy({ id });

  if (!findAdvert) {
    throw new AppError("Advert not found", 404);
  }

  if (findAdvert.isAvailable === false) {
    throw new AppError("Advert is unavailable");
  }

  await advertsRepository.save({ id, isAvailable: false });

  return "Advert successfully deleted";
};

export default deleteAdvertsService;
