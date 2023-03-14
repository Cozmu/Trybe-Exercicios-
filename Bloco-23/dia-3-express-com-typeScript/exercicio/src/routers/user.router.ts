import { Router } from "express";
import userController from "../controllers/user.controlller";

const router = Router();

router.get('/', userController.listAllUsers);
router.get('/:id', userController.listUserById);

export default router;