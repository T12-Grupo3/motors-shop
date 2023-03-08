import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import  {IImageAdvertsCreate}  from "../../interfaces/image_adverts";
import { ImageAdverts } from "../../entities/image_adverts.entity";
import { Adverts } from "../../entities/adverts.entity";

const createImageAdvertsService = async({galery_image, advertsId }:IImageAdvertsCreate, ): Promise<ImageAdverts> => {

const imageAdvertsRepository = AppDataSource.getRepository(ImageAdverts);

const advertsRepository = AppDataSource.getRepository(Adverts);

const findAdvert = await advertsRepository.findOneBy({

  id: advertsId 
});

if (!findAdvert) {
    throw new AppError("Advert is not exists", 404);
}

const newImageAdvert = imageAdvertsRepository.create({
  galery_image : galery_image, 
  advert: findAdvert
})

await imageAdvertsRepository.save(newImageAdvert)

return newImageAdvert;

}

export default createImageAdvertsService