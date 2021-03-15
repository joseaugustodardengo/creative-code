import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const usuariosRouter = Router();

const usuarios = [];

usuariosRouter.post('/', (request, response) => {
  try {
    const { nome, telefone, email, idade, peso, etinia, role } = request.body;

    const usuario = {
      id: uuid(),
      nome,
      telefone,
      email,
      idade,
      peso,
      etinia,
      role,
    };

    usuarios.push(usuario);

    return response.json(usuario);

  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
})

export default usuariosRouter;