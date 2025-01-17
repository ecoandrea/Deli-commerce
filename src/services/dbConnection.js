import { dbConfig } from '../config/db.config.js';
import { setupUsuarioProducto } from '../models/index.js';
import { initProducto } from '../models/Producto.model.js';
import { initUsuario } from '../models/Usuario.model.js';


export const dbConnect = async() => {
    try {
        await dbConfig.authenticate();
        //En este punto inicializa los modelos y configura las asociaciones
        initUsuario(dbConfig)
        initProducto(dbConfig)
        setupUsuarioProducto()
        await dbConfig.sync( {  alter: true  } );

        console.log('Logramos conectarnos a postgres a través de Sequelize');
    } catch (error) {
        console.error('No pudimos conectarnos a la DB', error);
        process.exit(1);
    }
};