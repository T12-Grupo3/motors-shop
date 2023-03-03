import { Request, Response } from "express";
import listCommentsIdService from "../../services/comments/list_comments_id.service";


const listCommentsIdController = async(req: Request, res: Response) => {

    const idComments = req.params.id

    const commentsList = await listCommentsIdService(idComments);

    return res.status(200).json((commentsList));


};

export default listCommentsIdController