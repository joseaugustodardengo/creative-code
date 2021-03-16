import { Router } from 'express';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Usuario from '../models/Usuario';
import CreateUsuarioService from '../services/CreateUsuarioService';

const usuariosRouter = Router();

usuariosRouter.get('/', async (request, response) => {
  try {
    const usuarioRepository = getRepository(Usuario);
    const usuarios = await usuarioRepository.find();

    return response.json(usuarios);
  } catch (error) {
    return response.status(error.statusCode).json({ error: error.message })
  }
})

usuariosRouter.get('/:id', async (request, response) => {
  try {
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.findOne(request.params.id);

    return response.send(usuario);
  } catch (error) {
    return response.status(error.statusCode).json({ error: error.message })
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
      telefone: usuario.telefone,
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
    return response.status(error.statusCode).json({ error: error.message });
  }
})

usuariosRouter.put('/:id', async (request, response) => {
  try {
    const { nome, telefone, email, senha, idade, peso, etnia, role } = request.body;

    const usuarioRepository = getRepository(Usuario);

    const hashedSenha = await hash(senha, 8);

    const usuario = await usuarioRepository.update(request.params.id, {
      nome,
      telefone,
      email,
      senha: hashedSenha,
      idade,
      peso,
      etnia,
      role
    });

    return response.json(usuario);

  } catch (error) {
    return response.status(error.statusCode).json({ error: error.message })
  }

})

usuariosRouter.delete('/:id', async (request, response) => {
  try {
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.delete(request.params.id);

    return response.send(usuario);
  } catch (error) {
    return response.status(error.statusCode).json({ error: error.message })
  }
})

export default usuariosRouter;