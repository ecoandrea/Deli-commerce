import { Producto } from "../models/Producto.model.js"


export const renderHomePage = (req, res, next) => {
    res.render('pages/home')
}

export const renderAboutPage = (req, res, next) => {
    res.render('pages/about')
}

export const renderListProduct = async(req, res, next) => {
    try {
        const productos = await Producto.findAll({
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          raw: true 
        });

       

        res.render('productos/list', { productos })// 2do argumento es el objeto que tiene nombre de lo que esta pidiendo y su valor
    } catch (error) {
        next(error)
    }
}

//raw transforma rspta de sequelize (instancia prototype) a texto plano

export const renderRegisterForms = (req, res) => {
    res.render('usuarios/register')

}

export const renderLogin = (req, res) => {
    res.render('usuarios/login')
}

export const renderRegisterSuccess = (req, res) => {
    res.render('usuarios/successRegister')
}