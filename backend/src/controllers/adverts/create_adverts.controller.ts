import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IAdvertsRequest } from "../../interfaces/adverts";
import createAdvertsService from "../../services/adverts/create_adverts.service";


const createAdvertsController = async(req: Request, res: Response) => {

    
    const {title_adverts, year_adverts, type_adverts, kilometers_adverts, type_veicule, price_adverts,  description_adverts }:IAdvertsRequest = req.body;

    const newAdverts = await createAdvertsService({title_adverts, year_adverts, type_adverts, type_veicule, price_adverts, kilometers_adverts, description_adverts });

    return res.status(201).json(instanceToPlain(newAdverts));


};

export default createAdvertsController



