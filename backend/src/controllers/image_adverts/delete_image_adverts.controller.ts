import { Request, Response } from "express";
import deleteImageAdvertsService from "../../services/image_adverts/delete_image_adverts.service";


const deleteImageAdvertsController = async (req: Request, res: Response) => {
    const id = req.params.id
    
    const ImageAdvert = await deleteImageAdvertsService(id);

    return res.status(200).json({mesage: "ImageAdvert deletd with sucess!"});

};
export default deleteImageAdvertsController;