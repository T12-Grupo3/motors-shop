import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts.entity";
import { AppError } from "../../errors/appError";
import { IAdverts, IAdvertsDelete } from "../../interfaces/adverts";

const deleteAdvertsService = async (id: string): Promise<string> => {
  const advertRepository = AppDataSource.getRepository(Adverts);

  const deleted_advert = await advertRepository.findOneBy({ id });

  if (!deleted_advert) {
    throw new AppError("Advert not found");
  }

  await advertRepository.delete({ id });

  return "Advert deleted";
};

export default deleteAdvertsService;
