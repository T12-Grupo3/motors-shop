import AppDataSource from "../../data-source";
import { Adverts } from "../../entities/adverts.entity";


const ListAdvertsService = async () => {

    const advertsRepository = AppDataSource.getRepository(Adverts);
    const adverts = await advertsRepository.find();

    return adverts;

}

export default ListAdvertsService;