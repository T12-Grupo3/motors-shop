import { Request, Response } from "express";
import advertListImageAdvertService from "../../services/adverts/list_advert_imageadvert";


const advertListImageAdvertController = async(req: Request, res: Response) => {

    const idAdvert = req.params.id
    
    const advertList = await advertListImageAdvertService(idAdvert);

    return res.status(200).json((advertList));


};

export default advertListImageAdvertController