import { Router } from "express";
import { deleteUserById, findAll, findUserById, updateUser } from "../controllers/usuario.controller.js";


const router = Router();


router.get('/usuario/:id', findUserById);
router.get('/usuario', findAll);
router.put('/usuario/:id', updateUser)
router.delete('/usuario/:id', deleteUserById)
 

export default router