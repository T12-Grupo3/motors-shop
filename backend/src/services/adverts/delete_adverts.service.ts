import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts.entity";
import { AppError } from "../../errors/appError";
import { IAdverts, IAdvertsDelete } from "../../interfaces/adverts";

const deleteAdvertsService = async({ isAvailable  }: IAdvertsDelete, id: string): Promise<Adverts> => {

  const advertRepository = AppDataSource.getRepository(Adverts)

  const findAdvert = await advertRepository.findOneBy({
      id
  })

  if(!findAdvert){
      throw new AppError('Advert not found', 404)
  }

  if(!findAdvert.isAvailable){
      throw new AppError('Advert not isAvailable', 400)
  }
 
  await advertRepository.update(
      id,
      {
        isAvailable: false 
                }
  )

  const advert = await advertRepository.findOneBy({
      id
  })

  return advert!

}

export default deleteAdvertsService;
