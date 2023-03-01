import { Router } from "express";
import createAdvertsController from "../controllers/adverts/create_adverts.controller";
import deleteAdvertsController from "../controllers/adverts/delete_adverts.controller";
import ListAdvertsController from "../controllers/adverts/list_adverts.controller";
import listAdvertsIdController from "../controllers/adverts/list_adverts_id.controller";
import updateAdvertController from "../controllers/adverts/update_adverts.controller";
import authUserMiddleware from "../middleware/authUser.middleware";
import isAdmMiddlewar from "../middleware/isAdm.middleware";
import isUserMiddleware from "../middleware/isUserMiddleware";

const advertsRoutes = Router();

// advertsRoutes.post("", authUserMiddleware , isUserMiddleware, isAdmMiddlewar, createAdvertsController);
advertsRoutes.post("", createAdvertsController);

advertsRoutes.get("", ListAdvertsController);
advertsRoutes.get("/:id", listAdvertsIdController);

advertsRoutes.patch("/:id", authUserMiddleware , isUserMiddleware, isAdmMiddlewar, updateAdvertController);

advertsRoutes.delete("/:id", authUserMiddleware , isUserMiddleware, isAdmMiddlewar, deleteAdvertsController);

export default advertsRoutes;
