import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IImageAdvertsCreate } from "../../interfaces/image_adverts";
import createImageAdvertsService from "../../services/image_adverts/create_image_adverts.service";

const createImageAdvertsController = async(req: Request, res: Response) => {

    const {galery_image, advert }:IImageAdvertsCreate = req.body;

    const newImageAdvert = await createImageAdvertsService({galery_image, advert});

    return res.status(201).json(instanceToPlain(newImageAdvert));

};

export default createImageAdvertsController