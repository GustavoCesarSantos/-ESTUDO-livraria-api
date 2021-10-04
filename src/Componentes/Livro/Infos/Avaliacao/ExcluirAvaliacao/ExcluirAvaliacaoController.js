import ExcluirAvaliacaoRequestDTO from './ExcluirAvaliacaoRequestDTO.js';
import ExcluirAvaliacaoUseCase from './ExcluirAvaliacaoUseCase.js';
import InfoRepositoryMongoDb from '../../Repository/InfoRepositoryMongoDb.js';
import MongoDbDatabase from '../../../../../infra/database/MongoDbDatabase.js';

export default class ExcluirAvaliacaoController {
  constructor() {}

  async handler(request, response) {
    const excluirAvaliacaoRequestDTO = new ExcluirAvaliacaoRequestDTO({
      ...request.params,
    });
    const infoRepository = new InfoRepositoryMongoDb(
      MongoDbDatabase.getInstance()
    );
    const excluirAvaliacaoUseCase = new ExcluirAvaliacaoUseCase(infoRepository);
    await excluirAvaliacaoUseCase.execute(excluirAvaliacaoRequestDTO);
    response.status(201).end();
  }
}
