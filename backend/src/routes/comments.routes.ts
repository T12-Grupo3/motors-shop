import { Router } from "express";
import createCommentsController from "../controllers/comments/create_comments.controller";



const commentsRoutes = Router();

commentsRoutes.post("", createCommentsController);
commentsRoutes.get("/advert/:id", createCommentsController);



export default commentsRoutes;