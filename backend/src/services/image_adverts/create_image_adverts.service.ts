import AppDataSource from "../../data-source";
import { v4 as uuidv4} from "uuid";
import { AppError } from "../../errors/appError";
import  {IImageAdvertsCreate}  from "../../interfaces/image_adverts";
import { ImageAdverts } from "../../entities/image_adverts.entity";
import { Adverts } from "../../entities/adverts.entity";
import { IComments, ICommentsRequest } from "../../interfaces/comments";
import { Comments } from "../../entities/comments.entity";
import { User } from "../../entities/user.entity";



const createImageAdvertService = async({galery_image, advertsId }:IImageAdvertsCreate) => {

const advertsRepository = AppDataSource.getRepository(Adverts);
const imageRepository = AppDataSource.getRepository(ImageAdverts);

const findAdvert = await advertsRepository.findOne({
  where:{
    id: advertsId 

  }

});
if (!findAdvert) {
  throw new AppError("Advert is not exists", 404);
}


// const ImageAdvertsComments = await advertsRepository.createQueryBuilder('adverts')
// .leftJoinAndSelect('adverts.image_adverts', 'image_adverts')
// .where('adverts.id = :id', {id: advertsId})
// .andWhere('image_adverts.galery_image = :galery_image', {image_adverts: galery_image})
// .getOne()


// await imageRepository.save({
//     galery_image: galery_image,
//     adverts: findAdvert,
  
//   })
  
  
  
  
  // const newImage = {
    
  //   galery_image : galery_image,
  //   advertsId : findAdvert
  // }
  
  const newImage = new ImageAdverts()
  newImage.galery_image = galery_image
  newImage.advert = findAdvert,
  
  
  await imageRepository.save(newImage)
  
  return newImage
  
  console.log("ADVERTSiD:",newImage)


}

export default createImageAdvertService