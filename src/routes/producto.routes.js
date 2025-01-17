import { Router } from 'express'
import { addUsuario, createProducto, deleteProductoById, findAll, findById, updateProducto } from '../controllers/producto.controller.js';



const router = Router();

router.post('/producto', createProducto)
router.post('/producto/:productoId', addUsuario)
router.get('/producto', findAll);
router.get('/producto/:id', findById) 
router.put('/producto/:id', updateProducto)
router.delete('/producto/:id', deleteProductoById)



export default router 
