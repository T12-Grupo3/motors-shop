import { Request, Response } from "express";
import listAdvertsIdService from "../../services/adverts/list_adverts_id.service";



const listAdvertsIdController = async(req: Request, res: Response) => {
    
    const idAdvert = req.params.id
    
    const advertList = await listAdvertsIdService(idAdvert);

    return res.status(200).json((advertList));

};

export default listAdvertsIdController