import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    secretKey: process.env.SECRET_KEY ||'defaultAecretKey',

    db: {
        name: process.env.DB_NAME || 'database',
        user: process.env.DB_USER || 'user',
        pass: process.env.DB_PASS || 'pass',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ||  5432,
        dialect: process.env.DB_DIALECT || 'postgres'
    }
};

//genero objeto con todas las variables de entorno
//llamado se hace una sola vez y se guarda en memoria de archivo de config, ya no hay que volver a llamarlo, escribirlo .solo  leerlo , ahorrandose eso
//de 3 me ahorro 2
