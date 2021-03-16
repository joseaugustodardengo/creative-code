import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';
import Usuario from "../models/Usuario";

interface Request {
  email: string;
  senha: string;
}

interface Response {
  usuario: Usuario;
  token: string;
}

class AuthenticateUsuarioService {

  public async execute({ email, senha }: Request): Promise<Response> {
    const usuariosRepository = getRepository(Usuario);

    const usuario = await usuariosRepository.findOne({
      where: { email }
    });

    if (!usuario) {
      throw new AppError('Combinação de Email/senha incorreto.', 401)
    }

    const senhaCorrespondida = await compare(senha, usuario.senha);

    if (!senhaCorrespondida) {
      throw new AppError('Combinação de Email/senha incorreto.', 401)
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: usuario.id,
      expiresIn
    });

    return { usuario, token }

  }
}

export default AuthenticateUsuarioService;