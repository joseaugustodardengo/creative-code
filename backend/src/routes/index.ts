import { Router } from 'express';
import enderecosRouter from './enderecos.routes';
import usuariosRouter from './usuarios.routes';
import sessaoRouter from './sessao.routes';

const routes = Router();

routes.use('/usuarios', usuariosRouter);
routes.use('/enderecos', enderecosRouter);
routes.use('/sessao', sessaoRouter);

export default routes;