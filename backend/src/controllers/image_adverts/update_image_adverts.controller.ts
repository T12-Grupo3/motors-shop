import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IImageAdvertsRequest } from "../../interfaces/image_adverts"
import updateImageAdvertsService from "../../services/image_adverts/update_image_adverts.service"




const updateImageAdvertsController = async (req: Request, res: Response) => {
    const {image_adverts, description_adverts }: IImageAdvertsRequest = req.body
    const imageAdvertId: string = req.params.id
    
            
    const updatedImageAdvert = await updateImageAdvertsService({image_adverts, description_adverts}, imageAdvertId)
        return res.json(instanceToPlain(updatedImageAdvert))
       
}


export default updateImageAdvertsController