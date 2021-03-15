import { v4 as uuid } from 'uuid';

class Endereco {
  id: string;

  endereco: string;

  numero: number;

  complemento: string;

  cep: string;

  cidade: string;

  estado: string;

  constructor({ endereco, numero, complemento, cep, cidade, estado }: Omit<Endereco, 'id'>) {
    this.id = uuid();
    this.endereco = endereco;
    this.numero = numero;
    this.complemento = complemento;
    this.cep = cep;
    this.cidade = cidade;
    this.estado = estado;
  }
}

export default Endereco;