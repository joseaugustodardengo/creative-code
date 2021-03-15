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
  private enderecosRepository: EnderecosRespository;

  constructor(enderecosRepository: EnderecosRespository) {
    this.enderecosRepository = enderecosRepository;
  }

  public execute({ endereco, numero, complemento, cep, cidade, estado }: Request): Endereco {
    const novoEndereco = this.enderecosRepository.create({ endereco, numero, complemento, cep, cidade, estado });

    return novoEndereco;
  }
}

export default CreateEnderecoService;