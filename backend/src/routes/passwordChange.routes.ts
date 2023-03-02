import { Router } from "express";
import updatePasswordController from "../controllers/users/update_password_user.controller";

const passwordRoute = Router()

passwordRoute.patch("", updatePasswordController)

export default passwordRoute