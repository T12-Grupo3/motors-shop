import AppDataSource from "../../data-source";
import { ImageAdverts } from "../../entities/image_adverts.entity";


const ListImageAdvertsService = async () => {

    const imageAdvertsRepository = AppDataSource.getRepository(ImageAdverts);
    const imageAdverts = await imageAdvertsRepository.find();

    return imageAdverts;

}

export default ListImageAdvertsService;