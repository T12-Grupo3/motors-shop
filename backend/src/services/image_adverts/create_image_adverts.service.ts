import AppDataSource from "../../data-source";
import { v4 as uuidv4} from "uuid";
import { AppError } from "../../errors/appError";
import  {IImageAdvertsCreate}  from "../../interfaces/image_adverts";
import { ImageAdverts } from "../../entities/image_adverts.entity";
import { Adverts } from "../../entities/adverts.entity";



const createImageAdvertsService = async({image_adverts, description_image, advertsId }:IImageAdvertsCreate): Promise<ImageAdverts> => {

const imageAdvertsRepository = AppDataSource.getRepository(ImageAdverts);

const advertsRepository = AppDataSource.getRepository(Adverts);


const findAdvert = await advertsRepository.findOneBy({

  id: advertsId 
});


if (!findAdvert) {
    throw new AppError("Advert is not exists", 404);
}

const newImageAdvert = imageAdvertsRepository.create({
  image_adverts : image_adverts, 
  description_image : description_image,
  advert: findAdvert


})



await imageAdvertsRepository.save(newImageAdvert)

return newImageAdvert;


}

export default createImageAdvertsService