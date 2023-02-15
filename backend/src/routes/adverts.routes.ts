import { Router } from "express";
import ListAdvertsController from "../controllers/adverts/list_adverts.controller";
import listAdvertsIdController from "../controllers/adverts/list_adverts_id.controller";





const advertsRoutes = Router()

advertsRoutes.get("", ListAdvertsController)
advertsRoutes.get("/:id", listAdvertsIdController)


export default advertsRoutes