import { Router } from "express";
import createCommentsController from "../controllers/comments/create_comments.controller";
import listCommentsController from "../controllers/comments/lis_comments.controller";
import authUserMiddleware from "../middleware/authUser.middleware";
import isUserMiddleware from "../middleware/isUserMiddleware";



const commentsRoutes = Router();

commentsRoutes.post("", authUserMiddleware , isUserMiddleware, createCommentsController);
commentsRoutes.get("/", listCommentsController);




export default commentsRoutes;