import AppDataSource from "../../data-source";
import { v4 as uuidv4} from "uuid";
import { IAdvertsRequest } from "../../interfaces/adverts";
import { Adverts } from "../../entities/adverts.entity";



const createAdvertsService = async({title_adverts, year_adverts, type_adverts, type_veicule, price_adverts, kilometers_adverts, description_adverts }:IAdvertsRequest): Promise<Adverts> => {
     
const advertsRepository = AppDataSource.getRepository(Adverts);

const newAdverts = advertsRepository.create({
     title_adverts, 
     year_adverts, 
     type_adverts, 
     type_veicule,
     price_adverts,
     kilometers_adverts, 
    description_adverts

})


await advertsRepository.save(newAdverts)

return newAdverts;


}

export default createAdvertsService

