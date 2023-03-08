import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IAdvertsRequest } from "../../interfaces/adverts";
import createAdvertsService from "../../services/adverts/create_adverts.service";
import { IImageAdvertsCreate } from "../../interfaces/image_adverts";


const createAdvertsController = async(req: Request, res: Response) => {

    const {galery_image, cover_image_adverts, title_adverts, year_adverts, type_adverts, kilometers_adverts, type_veicule, price_adverts,  description_adverts, userId }:IAdvertsRequest = req.body;

    const newAdverts = await createAdvertsService({ galery_image, cover_image_adverts, title_adverts, year_adverts, type_adverts, type_veicule, price_adverts, kilometers_adverts, description_adverts, userId });

    return res.status(201).json(instanceToPlain(newAdverts));


    


};

export default createAdvertsController



