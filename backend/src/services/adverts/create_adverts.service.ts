import AppDataSource from "../../data-source";
import { v4 as uuidv4} from "uuid";
import { IAdvertsRequest } from "../../interfaces/adverts";
import { Adverts } from "../../entities/adverts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { ImageAdverts } from "../../entities/image_adverts.entity";

const createAdvertsService = async({ galery_image, cover_image_adverts, title_adverts, year_adverts, type_adverts, type_veicule, price_adverts, kilometers_adverts, description_adverts, userId }:IAdvertsRequest): Promise<Adverts> => {

  const advertsRepository = AppDataSource.getRepository(Adverts);

  const imageAdvertsRepository = AppDataSource.getRepository(ImageAdverts)

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId 
  });
  console.log("FINDUSER :", findUser)

  if (!findUser) {
      throw new AppError("User is not exists", 404);
  }
  
  const newAdverts = advertsRepository.create({
    title_adverts: title_adverts,
    year_adverts: year_adverts,
    type_adverts: type_adverts,
    type_veicule: type_veicule,
    price_adverts: price_adverts,
    description_adverts: description_adverts,
    kilometers_adverts: kilometers_adverts,
    cover_image_adverts: cover_image_adverts,
    user: findUser
  })

  await advertsRepository.save(newAdverts)

  galery_image.map( async (element)=>{

    const newImage = new ImageAdverts()
    newImage.galery_image = element
    newImage.advert = newAdverts,

    await imageAdvertsRepository.save(newImage)
  })

  return newAdverts;

}

export default createAdvertsService

