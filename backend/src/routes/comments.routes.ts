import { Router } from "express";
import createCommentsController from "../controllers/comments/create_comments.controller";
import listCommentsAdvertController from "../controllers/comments/list_comments_advert.controller";
import listCommentsController from "../controllers/comments/lis_comments.controller";



const commentsRoutes = Router();

commentsRoutes.post("", createCommentsController);
commentsRoutes.get("/", listCommentsController);
commentsRoutes.get("/advert/:id", listCommentsAdvertController);



export default commentsRoutes;