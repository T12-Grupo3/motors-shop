import AppDataSource from "../../data-source";
import { ImageAdverts } from "../../entities/image_adverts.entity";
import { AppError } from "../../errors/appError";


const listImageAdvertsIdService = async (advert_id:string ) :Promise<ImageAdverts> => {
    const imageAdvertsRepository = AppDataSource.getRepository(ImageAdverts);
    
    const imageAdvert = await imageAdvertsRepository.findOne({
        where: { advert: { id: advert_id } },
        relations: {
            advert: true,}
        
      });
    
   
    if(!imageAdvert){
        throw new AppError("Image_Adverts is not exists",404 )
    }    
    console.log(imageAdvert)
    return imageAdvert

}

export default listImageAdvertsIdService;
    
