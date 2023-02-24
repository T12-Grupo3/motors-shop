import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { Adverts } from "../../entities/adverts.entity";


const advertListImageAdvertService = async (idAdvert:string ) :Promise<Adverts> => {
    const advertRepository = AppDataSource.getRepository(Adverts);
    
       
    const advert = await advertRepository.findOne({
        where:{
            id:idAdvert
        },
        relations:{
            imageAdverts :true
        
        }
    });
   
    if(!advert){
        throw new AppError("User is not exists",404 )
    }    
    


    return advert

}

export default advertListImageAdvertService;