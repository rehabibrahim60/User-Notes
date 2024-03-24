import { Router } from "express";
import * as userController from "./user.controller.js"
const router =Router();

router.get('/',userController.getAllUsers)
router.get('/:id',userController.getSingleUser)
router.post('/',userController.addUser)
router.put('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)


export default router
 
