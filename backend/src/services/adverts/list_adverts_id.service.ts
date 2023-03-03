import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts.entity";
import { AppError } from "../../errors/appError";


const listAdvertsIdService = async (idAdvert:string ) :Promise<Adverts> => {
    const advertsRepository = AppDataSource.getRepository(Adverts);
    
       
    const advert = await advertsRepository.findOne({
        where:{
            id:idAdvert
        },
        relations:{
            comments :true,
            user :true
        
        }
    });
    
   
    if(!advert){
        throw new AppError("Adverts is not exists",404 )
    }    
    


    return advert

}

export default listAdvertsIdService;
    
