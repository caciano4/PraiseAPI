import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import {CreateUsersControllers} from './controllers/createUsersControllers'
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();
const createUsersControllers = new CreateUsersControllers()
const createTagController = new CreateTagController()

router.post("/users",createUsersControllers.handle )
router.post("/tags",ensureAdmin,createTagController.handle)

export {router}