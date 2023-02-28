import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { ICommentsRequest } from "../../interfaces/comments";
import createCommentsService from "../../services/comments/create_comments.service";


const createCommentsController = async(req: Request, res: Response) => {

    try {
        const {comments, advertsId, userId }:ICommentsRequest = req.body;
        
        const newComments = await createCommentsService({comments, advertsId, userId });
    
        return res.status(201).json({ message: "Comments created"});
        
    } catch (error) {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            message: error.message
        })
    }        
    }


};

export default createCommentsController