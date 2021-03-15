import { Router } from 'express';
import EnderecosRespository from '../repositories/EnderecosRespository';
import CreateEnderecoService from '../services/CreateEnderecoService';

const enderecosRouter = Router();

const enderecosRepository = new EnderecosRespository();

enderecosRouter.get('/', (request, response) => {
  const enderecos = enderecosRepository.all();

  return response.json(enderecos);
})

enderecosRouter.post('/', (request, response) => {
  try {
    const { endereco, numero, complemento, cep, cidade, estado } = request.body;

    const createEndereco = new CreateEnderecoService(enderecosRepository);

    const novoEndereco = createEndereco.execute({ endereco, numero, complemento, cep, cidade, estado })

    return response.json(novoEndereco);
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }

})

export default enderecosRouter;