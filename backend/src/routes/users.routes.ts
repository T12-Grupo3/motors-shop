import { Router } from "express";
import createUserController from "../controllers/users/create_user.controller";
import deleteUserController from "../controllers/users/delete_user.controller";
import listUsersController from "../controllers/users/list_users.controller";
import retrieveUserController from "../controllers/users/retrieve_user.controller";
import updateUserController from "../controllers/users/update_user.controller";





const usersRoutes = Router()


usersRoutes.post("", createUserController);
usersRoutes.get("", listUsersController);
usersRoutes.get("/:id", retrieveUserController);
usersRoutes.delete("/:id",  deleteUserController);
usersRoutes.patch("/:id", updateUserController);


export default usersRoutes