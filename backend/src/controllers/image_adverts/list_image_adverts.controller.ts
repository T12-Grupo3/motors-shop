import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer"
import ListAdvertsService from "../../services/adverts/list_adverts.service";
import ListImageAdvertsService from "../../services/image_adverts/list_image_adverts,service";

const listImageAdvertsController = async(req: Request, res: Response) => {

    
    const imageAdvertsList = await ListImageAdvertsService();

    return res.status(201).json(instanceToPlain(imageAdvertsList));


};

export default listImageAdvertsController