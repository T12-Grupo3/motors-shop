import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts.entity";
import { ImageAdverts } from "../../entities/image_adverts.entity";
import { AppError } from "../../errors/appError";


const listImageAdvertsIdService = async (idImageAdvert:string ) :Promise<ImageAdverts> => {
    const imageAdvertsRepository = AppDataSource.getRepository(ImageAdverts);
    
       
    const imageAdvert = await imageAdvertsRepository.findOne({
        where:{
            id:idImageAdvert
        },
        // relations:{
        //     user :true
        
        // }
    });
    
   
    if(!imageAdvert){
        throw new AppError("Image_Adverts is not exists",404 )
    }    
    


    return imageAdvert

}

export default listImageAdvertsIdService;
    
