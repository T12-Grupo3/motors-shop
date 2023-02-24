import { Adverts } from "../../entities/adverts.entity";
import AppDataSource from "../../data-source";
import { IAdvertsUpdate } from "../../interfaces/adverts";
import { IImageAdvertsRequest } from "../../interfaces/image_adverts";
import { ImageAdverts } from "../../entities/image_adverts.entity";
import { AppError } from "../../errors/appError";



const updateImageAdvertsService = async({ image_adverts, description_image }: IImageAdvertsRequest, id: string): Promise<IImageAdvertsRequest>  => {

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
            description_image: description_image ? description_image : findImageAdverts.description_image,
            
        }
    )

    const contact = await imageAdvertsRepository.findOneBy({
        id
    })


    return {image_adverts,description_image}

}

export default updateImageAdvertsService
