import { Router } from "express";
import * as noteController from "./note.controller.js"

const router =Router();

router.get('/',noteController.getAllNotes)
router.post('/',noteController.addNote)
router.put('/:id',noteController.updateNote)
router.delete('/:id',noteController.deleteNote)

export default router
 
