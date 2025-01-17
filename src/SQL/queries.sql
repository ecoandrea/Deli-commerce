

SELECT * FROM usuario;

SELECT * FROM productos;

SELECT * FROM usuario_producto;





--Crear Usuario
INSERT INTO usuarios (
    "id", "nombre", "apellido_paterno", "apellido_materno", "email", "telefono", "password", admin, "fecha_nacimiento", "createdAt", 
	"updatedAt"
) 
VALUES (
    '054f4986-53e0-451a-bafd-58bf3e17fa61', -- Ver como  generar un UUID v4y asi no poner uno el id
    'Juan',              
    'Pérez',             
    'Gómez',            
    'juan.perez@example.com', 
    '+56912345678',     
    'hashed_password',   --ver tema contraseña hasheada
    false,               
    '1990-01-01',        
	NOW(),
	NOW()
	
	
);


--Update Usuario

UPDATE usuarios
SET 
    nombre = 'Carlos',          -- Nuevo nombre
    apellido_paterno = 'Gómez',      -- Nuevo apellido paterno
    email = 'carperez@gmsil.com' -- Nuevo email
WHERE 
    id = '054f4986-53e0-451a-bafd-58bf3e17fa61';           -- Reemplaza con el UUID del usuario que deseas actualizar



--Delete usuarios

DELETE FROM usuarios
WHERE 
    id = '054f4986-53e0-451a-bafd-58bf3e17fa61';  -- Reemplaza con el UUID del usuario que deseas eliminar


--Crear un producto

INSERT INTO productos (
    "id", "nombre", "descripcion", "precio", "stock", "createdAt", "updatedAt"
)
VALUES (
   '054f4986-53e0-451a-bafd-58bf3e112345',        -- Generar un UUID para el producto
    'Tofu 500gr',              
    'Descripción del producto', -- Descripción
    1000,                      -- Precio
    50,
	NOW(),
	NOW()
);



--update producto
UPDATE productos
SET 
    nombre = 'Nuevo Producto',      -- Nuevo nombre
    descripcion = 'Tofu de fabricación artesanal, libre de preservantes.', -- Nueva descripción
    precio = 4200,                 -- Nuevo precio
    stock = 30                     -- Nuevo stock
WHERE 
    id = '054f4986-53e0-451a-bafd-58bf3e112345';        -- Reemplaza con el UUID del producto que deseas actualizar


--Delete producto

DELETE FROM productos
WHERE 
    id = '054f4986-53e0-451a-bafd-58bf3e112345';  -- Reemplaza con el UUID del producto que deseas eliminar



--1. Consultar el producto por ID, incluyendo los usuarios
SELECT p.id AS producto_id, 
       p.nombre AS  nombre_producto, 
       u.id AS usuario_id, 
       u.nombre,  
       u.apellido_paterno  
FROM productos p
JOIN usuario_producto up ON p.id = up."productoId"
JOIN usuarios u ON up."usuarioId" = u.id 
WHERE p.id = '4203c1c6-f4f2-487e-a7ce-3ee7a6369d83';  



--2. Listar todos los Bootcamps con sus usuarios 
SELECT p.id AS producto_id, 
       p.nombre AS  nombre_producto, 
       u.id AS usuario_id, 
       u.nombre,  
       u.apellido_paterno  
FROM productos p
JOIN usuario_producto up ON p.id = up."productoId"
JOIN usuarios u ON up."usuarioId" = u.id 



--3. Consultar un usuario por ID, incluyendo los Bootcamps
SELECT 
    u.id AS user_id,
    u.nombre AS usuario_nombre,  
    u."apellido_paterno" as apellido ,
    p.id AS producto_id,
    p.nombre AS producto_
FROM usuarios u
JOIN usuario_producto up ON u.id = up."usuarioId"
JOIN productos p ON up."productoId" = p.id
WHERE u.id = '16c89d2a-4872-4b38-ba34-3dedc1b09e9b';



--4. Listar los usuarios con sus Bootcamps.

SELECT 
    u.id AS user_id,
    u.nombre AS usuario_nombre,  
    u."apellido_paterno" as apellido ,
    p.id AS producto_id,
    p.nombre AS producto_
FROM usuarios u
JOIN usuario_producto up ON u.id = up."usuarioId"
JOIN productos p ON up."productoId" = p.id



