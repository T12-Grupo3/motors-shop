import AppDataSource from "../../data-source";
import { v4 as uuidv4} from "uuid";
import { IAdvertsRequest } from "../../interfaces/adverts";
import { Adverts } from "../../entities/adverts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";



const createAdvertsService = async({title_adverts, year_adverts, type_adverts, type_veicule, price_adverts, kilometers_adverts, description_adverts, userId }:IAdvertsRequest): Promise<Adverts> => {


const advertsRepository = AppDataSource.getRepository(Adverts);

const userRepository = AppDataSource.getRepository(User);


const findUser = await userRepository.findOneBy({

  id: userId 
});
console.log("FINDUSER :", findUser)

if (!findUser) {
    throw new AppError("User is not exists", 404);
}

const newAdverts = advertsRepository.create({
    title_adverts : title_adverts,
    year_adverts : year_adverts,
    type_adverts : type_adverts,
    type_veicule : type_veicule,
    price_adverts :price_adverts,
    kilometers_adverts: kilometers_adverts,
    description_adverts : description_adverts,
    user: findUser
})


await advertsRepository.save(newAdverts)

return newAdverts;


}

export default createAdvertsService

