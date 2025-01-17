import { Producto } from "./Producto.model.js"
import { Usuario } from "./Usuario.model.js"




//Esto es un caso de Muchos es a Muchos
export const setupUsuarioProducto = () => {
    Usuario.belongsToMany(Producto, { 
        through: 'usuario_producto',
        foreignKey: 'usuarioId',
        otherKey: 'productoId', 
        as: 'productos',
        
        
    })

    Producto.belongsToMany(Usuario, {
        through:'usuario_producto', 
        foreignKey: 'productoId',
        otherKey: 'usuarioId',
        as: 'usuarios'
    })
}