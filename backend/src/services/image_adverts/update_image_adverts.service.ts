import AppDataSource from "../../data-source";
import { IImageAdvertsRequest } from "../../interfaces/image_adverts";
import { ImageAdverts } from "../../entities/image_adverts.entity";
import { AppError } from "../../errors/appError";

const updateImageAdvertsService = async({ image_adverts }: IImageAdvertsRequest, id: string): Promise<IImageAdvertsRequest>  => {

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
            image_adverts: image_adverts ? image_adverts : findImageAdverts.image_adverts,            
        }
    )

    const contact = await imageAdvertsRepository.findOneBy({
        id
    })

    return {image_adverts}
}

export default updateImageAdvertsService
