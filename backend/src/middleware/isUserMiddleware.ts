import { Request, Response, NextFunction } from "express"

const isUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const idIsUser = req.params.id;
    const isUser = req.user.id;
  
    if (isUser !== idIsUser) {
      return res.status(401).json({
        message: "User not authorized",
      });
    }
  
    next(); 
  };
  
  export default isUserMiddleware;
  