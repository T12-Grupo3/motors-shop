import { Router } from "express";
import { createLoginController } from "../controllers/login/create_login.controller";






const loginRoutes = Router()


loginRoutes.post("", createLoginController)




export default loginRoutes