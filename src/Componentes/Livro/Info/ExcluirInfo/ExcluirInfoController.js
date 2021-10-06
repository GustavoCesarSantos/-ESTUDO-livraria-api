import ExcluirInfoRequestDTO from './ExcluirInfoRequestDTO.js';
import ExcluirInfoUseCase from './ExcluirInfoUseCase.js';
import InfoRepositoryMongoDb from '../Repository/InfoRepositoryMongoDb.js';
import MongoDbDatabase from '../../../../infra/database/MongoDbDatabase.js';

export default class ExcluirInfoController {
  constructor() {}

  async handler(request, response) {
    const excluirInfoRequestDTO = new ExcluirInfoRequestDTO({
      ...request.params,
    });
    const infoRepository = new InfoRepositoryMongoDb(
      MongoDbDatabase.getInstance()
    );
    const excluirInfoUseCase = new ExcluirInfoUseCase(infoRepository);
    await excluirInfoUseCase.execute(excluirInfoRequestDTO);
    response.status(201).end();
  }
}
