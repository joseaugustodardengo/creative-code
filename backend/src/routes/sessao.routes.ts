import { Router } from 'express';
import AuthenticateUsuarioService from '../services/AuthenticateUsuarioService';

const sessaoRouter = Router();

sessaoRouter.post('/', async (request, response) => {
  try {
    const { email, senha } = request.body;

    const authenticateUsuario = new AuthenticateUsuarioService();

    const { usuario } = await authenticateUsuario.execute({ email, senha });

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
    return response.status(400).json({ error: error.message });
  }
})

export default sessaoRouter;