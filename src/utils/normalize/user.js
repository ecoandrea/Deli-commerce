
/**
 * 
 * @param {Object} data -Datos que llegan desde petición con la información del usuario a destructurar
 * @returns {Array}  - Array con 3 elementos , los datos generales del usuario como objeto, el email en la segunda posicion, y la contraseña en la última.
 */
export const destructuringUserData = (data) => {
    const {
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        telefono,
        password,
        fecha_nacimiento,
        admin
    } = data;

    const globalDataUser = {
        nombre,
        apellido_paterno,
        apellido_materno,
        telefono,
        fecha_nacimiento,
        admin
    };

  
    return [globalDataUser, email, password]; //se necesita la info, pero el password se debe aparte ver si es unico , y el password hat que cachearla y transformarla
};

//esta funcion abstrae la info y se puede volver a reutilizar tantas veces sea necesaria la info
// retorna un arreglo un objeto con toda las propieddes y el email y password por separado


export const normalizeUserData = (email, password, generalData = {}) => { //se convierte en objeto con valor default vacio de base y ahi se puede aplicar el rest operator
    return {
        email,
        password,
        ...generalData
    };
};

//rest operator data se convierte en array , al tener que guardarlo como objeto, en esta forma se guarda datos pero sin propiedades, se mete array dentro de propiedad de objeto y eso no funciona alcargar

//no va a tener estructura del modelo


/*
export const normalizeUserData = (email, password, ...generalData) => {
    return {
        email,
        password,
        ...generalData
    };
};
*/ 

export const normalizeUserPrivateData = (user) => {
    const { id, nombre, apellido_paterno, apellido_materno, email } = user;

    //se retorna objeto nuevo con datos , que sera una copia del de arriba
    return {
        id,
        nombre,
        apellido_paterno,
        apellido_materno,
        email
    };
};