import { Router } from 'express';
import enderecosRouter from './enderecos.routes';
import usuariosRouter from './usuarios.routes';

const routes = Router();

routes.use('/usuarios', usuariosRouter);
routes.use('/enderecos', enderecosRouter);

export default routes;