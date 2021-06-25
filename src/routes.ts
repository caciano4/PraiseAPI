import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import {CreateUsersControllers} from './controllers/createUsersControllers'
import {CreateAuthController} from './controllers/CreateAuthController'
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ComplimentsController } from "./controllers/CreateComplimentsController";

const router = Router();
const createUsersControllers = new CreateUsersControllers()
const createTagController = new CreateTagController()
const createAuthController = new CreateAuthController()
const complimentsController = new ComplimentsController()

router.post("/users",createUsersControllers.handle )
router.post("/tags",ensureAdmin,createTagController.handle)
router.post("/login",createAuthController.handle)
router.post("/elogio",complimentsController.handle)

export {router}