import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listCommentsService from "../../services/comments/list_comments.service";
import listCommentsUserService from "../../services/comments/list_comments.service";


const listCommentsController = async(req: Request, res: Response) => {

    
    const commentsList = await listCommentsService();

    return res.status(201).json(instanceToPlain(commentsList));


};

export default listCommentsController