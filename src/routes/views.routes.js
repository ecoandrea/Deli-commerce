import { Router } from "express";
import { renderAboutPage, renderHomePage, renderListProduct, renderLogin, renderRegisterForms, renderRegisterSuccess  } from "../controllers/views.controller.js";



const router = Router();

router.get('/', renderHomePage)
router.get('/about', renderAboutPage)
router.get('/productos', renderListProduct)
router.get('/usuario/register', renderRegisterForms)
router.get('/usuario/register/success', renderRegisterSuccess)
router.get('/usuario/login', renderLogin)


export default router