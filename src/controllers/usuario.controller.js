import { Producto } from "../models/Producto.model.js";
import { Usuario } from "../models/Usuario.model.js";


  export const findUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const user = await Usuario.findByPk(id, {
        attributes: ["id", "nombre", "apellido_paterno"], 
        include: {
          model: Producto, 
          as: "productos", 
          attributes: ["id", "nombre"],
          through: {
            attributes: [],
          },
        },
      });
  
     
      res.status(200).json({
        message: "Usuario y productos obtenidos con éxito",
        status: 200,
        data: user,
      });
    } catch (error) {
      next(error)
    }
  };
  
  
  export const findAll = async (req, res, next) => {
    try {
     
      const users = await Usuario.findAll({
        attributes: ["id", "nombre", "apellido_paterno", "email"], 
        include: {
          model: Producto, 
          as: "productos",
          attributes: ["id", "nombre"],
          through: {
            attributes: [], 
          },
        },
      });
  
     
  
  
      res.status(200).json({
        message: "Usuarios obtenidos con éxito",
        status: 200,
        data: users, 
      });
    } catch (error) {
    next(error)
    }
  };
  
  export const updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
     

      const updateUser = await Usuario.update(req.body, {
        where: { id },
        returning: true,
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } 
      });
  

  
      res.status(200).json({
        message: "Usuario actualizado con éxito",
        status: 200,
        data: updateUser
      });
    } catch (error) {
     next(error)
    
    }
  };
  
  export const deleteUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await Usuario.destroy({ where: { id } });
  ;
  
      res.status(200).json({
        message: "Usuario eliminado con éxito",
        status: 200,
        data: user,
      });
    } catch (error) {
      next(error)
    }
  };
  