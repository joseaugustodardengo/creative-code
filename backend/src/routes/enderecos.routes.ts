import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import EnderecosRespository from '../repositories/EnderecosRespository';
import CreateEnderecoService from '../services/CreateEnderecoService';

const enderecosRouter = Router();

enderecosRouter.get('/', async (request, response) => {
  try {
    const enderecosRepository = getCustomRepository(EnderecosRespository);
    const enderecos = await enderecosRepository.find();

    return response.json(enderecos);
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }
})

enderecosRouter.get('/:id', async (request, response) => {
  try {
    const enderecosRepository = getCustomRepository(EnderecosRespository);
    const endereco = await enderecosRepository.findOne(request.params.id);

    return response.send(endereco);
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }
})

enderecosRouter.post('/', async (request, response) => {
  try {
    const { usuario_id, endereco, numero, complemento, cep, cidade, estado } = request.body;

    const createEndereco = new CreateEnderecoService();

    const novoEndereco = await createEndereco.execute({ usuario_id, endereco, numero, complemento, cep, cidade, estado })

    return response.json(novoEndereco);
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }

})

enderecosRouter.put('/:id', async (request, response) => {
  try {
    const { usuario_id, endereco, numero, complemento, cep, cidade, estado } = request.body;

    const enderecosRepository = getCustomRepository(EnderecosRespository);

    const enderecoNovo = await enderecosRepository.update(request.params.id, {
      usuario_id,
      endereco,
      numero,
      complemento,
      cep,
      cidade,
      estado
    });

    return response.json(enderecoNovo);

  } catch (error) {
    return response.status(400).json({ error: error.message })
  }

})

enderecosRouter.delete('/:id', async (request, response) => {
  try {
    const enderecosRepository = getCustomRepository(EnderecosRespository);
    const endereco = await enderecosRepository.delete(request.params.id);

    return response.send(endereco);
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }
})

export default enderecosRouter;