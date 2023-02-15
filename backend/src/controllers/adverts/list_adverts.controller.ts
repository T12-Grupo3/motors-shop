import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer"
import ListAdvertsService from "../../services/adverts/list_adverts.service";

const ListAdvertsController = async(req: Request, res: Response) => {

    
    const advertsList = await ListAdvertsService();

    return res.status(201).json(instanceToPlain(advertsList));


};

export default ListAdvertsController