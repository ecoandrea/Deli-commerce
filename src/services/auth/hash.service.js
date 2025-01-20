import * as bcrypt from 'bcrypt'; //bcrypts usa algoritmo de rondas
import { InternalServerError } from '../../errors/TypeError.js';

const SALT_ROUND = 10;

//funcion que hashea la pass
export const hashPassword = async(plainPassword) =>{
    try {
        const salt = await bcrypt.genSalt(SALT_ROUND); // cantidd de rondas, + rondas mas seguras
        const hashedPassword = await bcrypt.hash(plainPassword, salt); // password a hashear y el salt generado, recibe 2 arg , 1ero texto plano, 2do num de rondas

        return hashedPassword;
    } catch(error){

        throw new InternalServerError('No pudimos encriptar la contraseña', 500, error);
    }
};

//comparar la contraseña la de texto plano con la encriptada, bcript ya tiene el algoritmo y es rapido y facil que lo haga

export const comparePassword = async(plainPassword, hashedPassword) =>{
    try {
        const password = bcrypt.compare(plainPassword, hashedPassword);
        
        return password;
    } catch (error) {
        throw new InternalServerError('No pudimos desencriptar la contraseña', 500, error);
    }
};


//esta func devuelve un boolean
