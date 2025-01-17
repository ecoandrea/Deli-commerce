import { Producto } from "../models/Producto.model.js";
import { Usuario } from "../models/Usuario.model.js";


export const createProducto = async (req, res, next) => {
  try {
   
    const producto = await Producto.create(req.body);

    res.status(201).json({
      message: "Producto creado con éxito",
      status: 201,
      data: producto,
    });
  } catch (error) {
    next(error);
  }
};

export const addUsuario = async (req, res, next) => {
  try {
    const { productoId, usuarioId } = req.body;

    if (!productoId || !usuarioId) {
      throw new ValidationError(
        "Faltan parámetros necesarios: productoId y usuarioId"
      );
    }

    const producto = await Producto.findByPk(productoId, {
      attributes: ["id", "nombre"],
    });
    const usuario = await Usuario.findByPk(usuarioId, {
      attributes: ["id", "nombre", "apellido_paterno"],
    });

    if (!producto || !usuario) {
      throw new NotFoundError("producto o Usuario no encontrado");
    }

    //Verificar si el usuario ya está asociado al producto
  
    // Asociar el usuario al producto
    await producto.addUsuario(usuario);

    res.status(200).json({
      message: "Usuario agregado al producto con éxito",
      status: 200,
      data: { producto, usuario },
    });
  } catch (error) {
    next(error);
  }
};

export const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
    });
    
 
    if (!producto) {
      throw new NotFoundError("Producto no encontrado");
    }

    res.status(200).json({
      message: "Producto encontrado con éxito",
      status: 200,
      data: producto,
    });
  } catch (error) {
    next(error);
  }
};


export const findAll = async (req, res, next) => {
  try {
    const producto = await Producto.findAll({
      attributes: ["id", "nombre"],
      include: {
        model: Usuario,
        as: "usuarios",
        attributes: ["id", "nombre", "apellido_paterno"],
        through: {
          attributes: [],
        },
      },
    });

    if (!producto) {
      throw new NotFoundError("No hay productos registrados");
    }

    res.status(200).json({
      message: "Usuarios obtenidos con éxito",
      status: 200,
      data: producto,
    });
  } catch (error) {
    next(error);
  }
};



export const updateProducto = async (req, res, next) => {
  try {
    const { id } = req.params;

    const producto = await Producto.update(req.body, {
      where: { id },
      returning: true,
    });

    res.status(200).json({
      message: "Producto actualizado con éxito",
      status: 200,
      data: producto,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProductoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const producto = await Producto.destroy({ where: { id } });

   

    res.status(200).json({
      message: "Producto eliminado con éxito",
      status: 200,
      data: producto,
    });
  } catch (error) {
    next(error);
  }
};
