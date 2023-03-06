import { Request, Response, NextFunction } from "express"

const isUserCommentsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const idIsComments = req.params.id;
    const isUser = req.user.id;
    
    const CommentsId = req.comments.id
    const userCommentsId = req.comments.userId
    

    if (CommentsId !== idIsComments  ) {
      return res.status(401).json({
        message: "Comments not found",
      });
    }
    if (CommentsId === idIsComments &&  isUser !== userCommentsId ) {
      return res.status(401).json({
        message: "User not authorized",
      });
    }


    return next(); 
  };
  
  export default isUserCommentsMiddleware;