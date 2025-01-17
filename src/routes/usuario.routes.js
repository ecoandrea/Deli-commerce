import { Router } from "express";
import { createUser, deleteUserById, findAll, findUserById, updateUser } from "../controllers/usuario.controller.js";

const router = Router();

router.post('/usuario', createUser)
router.get('/usuario/:id', findUserById);
router.get('/usuario', findAll);
router.put('/usuario/:id', updateUser)
router.delete('/usuario/:id', deleteUserById)
 

export default router