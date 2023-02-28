import { Request, Response } from "express";
import listCommentsAdvertService from "../../services/comments/list_comments_advert.service";

const listCommentsAdvertController = async(req: Request, res: Response) => {

    const idAdverts = req.params.id

    const commentsList = await listCommentsAdvertService(idAdverts);

    return res.status(200).json((commentsList));


};

export default listCommentsAdvertController