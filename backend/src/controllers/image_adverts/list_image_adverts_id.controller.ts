import { Request, Response } from "express";
import listAdvertsIdService from "../../services/adverts/list_adverts_id.service";
import listImageAdvertsIdService from "../../services/image_adverts/list_image_adverts_id.service";



const listImageAdvertsIdController = async(req: Request, res: Response) => {
    
    const idImageAdvert = req.params.id
    
    const imageAdvertList = await listImageAdvertsIdService(idImageAdvert);

    return res.status(200).json((imageAdvertList));

};

export default listImageAdvertsIdController