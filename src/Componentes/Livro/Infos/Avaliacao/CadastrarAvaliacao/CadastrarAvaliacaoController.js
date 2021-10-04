import CadastrarAvaliacaoRequestDTO from './CadastrarAvaliacaoRequestDTO.js';
import CadastrarAvaliacaoUseCase from './CadastrarAvaliacaoUseCase.js';
import InfoRepositoryMongoDb from '../../Repository/InfoRepositoryMongoDb.js';
import MongoDbDatabase from '../../../../../infra/database/MongoDbDatabase.js';

export default class CadastrarAvaliacaoController {
  constructor() {}

  async handler(request, response) {
    const cadastrarAvaliacaoRequestDTO = new CadastrarAvaliacaoRequestDTO({
      ...request.body,
    });
    const infoRepository = new InfoRepositoryMongoDb(
      MongoDbDatabase.getInstance()
    );
    const cadastrarAvaliacaoUseCase = new CadastrarAvaliacaoUseCase(
      infoRepository
    );
    await cadastrarAvaliacaoUseCase.execute(cadastrarAvaliacaoRequestDTO);
    response.status(201).json({ message: 'Avaliacao cadastrado com sucesso.' });
  }
}
