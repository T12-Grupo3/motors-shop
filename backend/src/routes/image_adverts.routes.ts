import { Router } from "express";

import createImageAdvertsController from "../controllers/image_adverts/create_image_adverts.controller";
import deleteImageAdvertsController from "../controllers/image_adverts/delete_image_adverts.controller";
import listImageAdvertsController from "../controllers/image_adverts/list_image_adverts.controller";
import listImageAdvertsIdController from "../controllers/image_adverts/list_image_adverts_id.controller";
import updateImageAdvertsController from "../controllers/image_adverts/update_image_adverts.controller";

const imageAdvertsRoutes = Router();

imageAdvertsRoutes.post("", createImageAdvertsController);
imageAdvertsRoutes.get("", listImageAdvertsController);
imageAdvertsRoutes.get("/:id", listImageAdvertsIdController);
imageAdvertsRoutes.delete("/:id", deleteImageAdvertsController);
imageAdvertsRoutes.patch("/:id", updateImageAdvertsController);



export default imageAdvertsRoutes;