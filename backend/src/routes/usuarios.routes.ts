import { Router } from 'express';
import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';
import CreateUsuarioService from '../services/CreateUsuarioService';

const usuariosRouter = Router();

usuariosRouter.get('/', async (request, response) => {
  try {
    const usuariosRepository = getRepository(Usuario);
    const usuarios = await usuariosRepository.find();

    return response.json(usuarios);
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }
})

usuariosRouter.post('/', async (request, response) => {
  try {
    const { nome, telefone, email, senha, idade, peso, etnia, role } = request.body;

    const createUsuario = new CreateUsuarioService();

    const usuario = await createUsuario.execute({
      nome,
      telefone,
      email,
      senha,
      idade,
      peso,
      etnia,
      role,
    });

    return response.json(usuario);

  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
})

export default usuariosRouter;