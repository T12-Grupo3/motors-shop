import { FindOneOptions, getRepository } from "typeorm";
import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts.entity";
import { ImageAdverts } from "../../entities/image_adverts.entity";
import { AppError } from "../../errors/appError";
import { IAdverts, IAdvertsDelete } from "../../interfaces/adverts";
import { IImageAdvertsDelete } from "../../interfaces/image_adverts";

const deleteImageAdvertsService = async(id: string) => {

  const imageAdvertRepository = AppDataSource.getRepository<IImageAdvertsDelete>(ImageAdverts)

  const result = await imageAdvertRepository.delete(id);

  if (result.affected === 0) {
    throw new Error('Image_Advert not found');
  }
};

export default deleteImageAdvertsService;