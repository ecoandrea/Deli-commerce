import express from 'express';
import {engine} from 'express-handlebars'
import path from 'path'
import cors from 'cors'


import { serverInit } from './services/ServerInit.js';

//rutas
import UsuarioRouter from './routes/usuario.routes.js'
import ProductoRouter from './routes/producto.routes.js'
import AuthRouter from './routes/auth.routes.js' 
import viewsRouter from './routes/views.routes.js'


import { errorHandler } from './middlewares/errorHandlers.js';

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(process.cwd(), 'public')))

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Handlebars
app.engine('.hbs', engine({ 
    extname: '.hbs', 
    layoutsDir: path.join(process.cwd(), 'src', 'views', 'layouts'),// crea camino, es obligatorios
    defaultLayout: 'main', //por defecto es main , no seria necesario escribirlo, es opcional
    partialsDir: path.join(process.cwd(), 'src', 'views', 'partials'), 
}));

app.set('views', path.join(process.cwd(), 'src', 'views')) //Con esto corremos todas las vistas incluso las que estan fuera de partials
app.set('view engine', '.hbs');

//Agregar configuraciones y middlewares para rutas

app.use('/api/v1', UsuarioRouter);
app.use('/api/v1', ProductoRouter);
app.use('/api/v1', AuthRouter);
app.use('', viewsRouter) //la de handlebars

app.use(errorHandler);

app.get('/', (req, res) => {
    res.render('pages/home') //busca lo que esta en pages y saca el home, busca listas seteadas
})

serverInit(app, PORT);