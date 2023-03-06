import { Router } from "express";
import createCommentsController from "../controllers/comments/create_comments.controller";
import deleteCommentsController from "../controllers/comments/delete_comments.controller";
import listCommentsByAdvertController from "../controllers/comments/list_coments_by_adverts.controller";
import listCommentsAdvertController from "../controllers/comments/list_comments_id.controller";
import listCommentsController from "../controllers/comments/lis_comments.controller";
import updateCommentsController from "../controllers/comments/update_comments.controller";
import authUserMiddleware from "../middleware/authUser.middleware";
import isUserCommentsMiddleware from "../middleware/isUserComments.midlleware";

const commentsRoutes = Router();

commentsRoutes.post("", authUserMiddleware, createCommentsController);
commentsRoutes.get("/", listCommentsController);
commentsRoutes.get("/:id", listCommentsAdvertController);
commentsRoutes.get("/advert/:id", listCommentsByAdvertController);
commentsRoutes.delete("/:id", authUserMiddleware,   deleteCommentsController);
commentsRoutes.patch("/:id", authUserMiddleware,  updateCommentsController);
export default commentsRoutes;
