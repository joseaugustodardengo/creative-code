import { getCustomRepository } from 'typeorm';

import Endereco from "../models/Endereco";
import EnderecosRespository from "../repositories/EnderecosRespository";

interface Request {
  endereco: string;
  numero: number;
  complemento: string;
  cep: string;
  cidade: string;
  estado: string
}

class CreateEnderecoService {

  public async execute({ endereco, numero, complemento, cep, cidade, estado }: Request): Promise<Endereco> {
    const enderecosRepository = getCustomRepository(EnderecosRespository)

    const novoEndereco = enderecosRepository.create({ endereco, numero, complemento, cep, cidade, estado });

    await enderecosRepository.save(novoEndereco);

    return novoEndereco;
  }
}

export default CreateEnderecoService;