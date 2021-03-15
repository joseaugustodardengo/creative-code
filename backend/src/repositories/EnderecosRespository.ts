import Endereco from "../models/Endereco";

interface CreateEnderecoDTO {
  endereco: string;
  numero: number;
  complemento: string;
  cep: string;
  cidade: string;
  estado: string
}

class EnderecosRespository {
  private enderecos: Endereco[];

  constructor() {
    this.enderecos = [];
  }

  public all(): Endereco[] {
    return this.enderecos;
  }

  public create({ endereco, numero, complemento, cep, cidade, estado }: CreateEnderecoDTO): Endereco {
    const novoEndereco = new Endereco({ endereco, numero, complemento, cep, cidade, estado });

    this.enderecos.push(novoEndereco);

    return novoEndereco;
  }
}

export default EnderecosRespository;