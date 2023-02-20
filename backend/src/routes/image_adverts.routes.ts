import { Router } from "express";
import createAdvertsController from "../controllers/adverts/create_adverts.controller";
import deleteAdvertsController from "../controllers/adverts/delete_adverts.controller";
import ListAdvertsController from "../controllers/adverts/list_adverts.controller";
import listAdvertsIdController from "../controllers/adverts/list_adverts_id.controller";
import updateAdvertController from "../controllers/adverts/update_adverts.controller";

const imageAdvertsRoutes = Router();

imageAdvertsRoutes.post("", createAdvertsController);
imageAdvertsRoutes.get("", ListAdvertsController);
imageAdvertsRoutes.get("/:id", listAdvertsIdController);
imageAdvertsRoutes.patch("/:id", updateAdvertController);

imageAdvertsRoutes.delete("/:id", deleteAdvertsController);

export default imageAdvertsRoutes;