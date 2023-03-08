import AppDataSource from "../../data-source";
import { IImageAdvertsRequest } from "../../interfaces/image_adverts";
import { ImageAdverts } from "../../entities/image_adverts.entity";
import { AppError } from "../../errors/appError";

const updateImageAdvertsService = async({ galery_image }: IImageAdvertsRequest, id: string): Promise<IImageAdvertsRequest>  => {

    const imageAdvertsRepository = AppDataSource.getRepository(ImageAdverts)

    const findImageAdverts = await imageAdvertsRepository.findOneBy({
        id
    })

    if(!findImageAdverts){
        throw new AppError('Image not found', 404)    
    }

    await imageAdvertsRepository.update(
        id,
        {
            galery_image: galery_image ? galery_image : findImageAdverts.galery_image,            
        }
    )

    const contact = await imageAdvertsRepository.findOneBy({
        id
    })

    return {galery_image}
}

export default updateImageAdvertsService
