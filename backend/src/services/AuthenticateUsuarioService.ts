import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import Usuario from "../models/Usuario";

interface Request {
  email: string;
  senha: string;
}

interface Response {
  usuario: Usuario;
}

class AuthenticateUsuarioService {

  public async execute({ email, senha }: Request): Promise<Response> {
    const usuariosRepository = getRepository(Usuario);

    const usuario = await usuariosRepository.findOne({
      where: { email }
    });

    if (!usuario) {
      throw new Error('Combinação de Email/senha incorreto.')
    }

    const senhaCorrespondida = await compare(senha, usuario.senha);

    if (!senhaCorrespondida) {
      throw new Error('Combinação de Email/senha incorreto.')
    }

    return { usuario }

  }
}

export default AuthenticateUsuarioService;