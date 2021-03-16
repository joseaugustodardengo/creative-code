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

    const usuarioSemSenha = {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      idade: usuario.idade,
      peso: usuario.peso,
      etnia: usuario.etnia,
      role: usuario.role,
      created_at: usuario.created_at,
      updated_at: usuario.updated_at,
    };

    return response.json(usuarioSemSenha);

  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
})

export default usuariosRouter;