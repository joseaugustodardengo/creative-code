import { getRepository } from 'typeorm';

import Usuario from "../models/Usuario";

export enum UsuarioRole {
  ADMIN = "admin",
  BASICO = "basico"
}

export enum Etnia {
  BRANCO = "branco",
  NEGRO = "negro",
  INDIGENA = "indigena",
  PARDO = "pardo"
}

interface Request {
  nome: string;
  telefone: string;
  email: string;
  senha: string;
  idade: number;
  peso: number;
  etnia: Etnia;
  role: UsuarioRole;
}

class CreateUsuarioService {

  public async execute({ nome, telefone, email, senha, idade, peso, etnia, role }: Request): Promise<Usuario> {
    const usuariosRepository = getRepository(Usuario);

    const verificaSeUsuarioExiste = await usuariosRepository.findOne({
      where: { email }
    });

    if (verificaSeUsuarioExiste) {
      throw new Error('Endereço de email já está em uso.')
    }

    if (etnia !== 'branco' || 'negro' || 'indigena' || 'pardo') {
      throw new Error('Etnia está diferente das opções branco, negro, indigena, pardo')
    }

    if (role !== 'admin' || 'basico') {
      throw new Error('Role está diferente das opções admin ou usuario')
    }

    const novoUsuario = usuariosRepository.create({ nome, telefone, email, senha, idade, peso, etnia, role })

    await usuariosRepository.save(novoUsuario);

    return novoUsuario;
  }
}

export default CreateUsuarioService;