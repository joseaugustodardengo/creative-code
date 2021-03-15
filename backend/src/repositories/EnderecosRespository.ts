import { EntityRepository, Repository } from 'typeorm';
import Endereco from "../models/Endereco";
@EntityRepository(Endereco)
class EnderecosRespository extends Repository<Endereco> {

}

export default EnderecosRespository;