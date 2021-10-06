import AtualizarInfoRequestDTO from './AtualizarInfoRequestDTO.js';
import AtualizarInfoUseCase from './AtualizarInfoUseCase.js';
import InfoRepositoryMongoDb from '../Repository/InfoRepositoryMongoDb.js';
import MongoDbDatabase from '../../../../infra/database/MongoDbDatabase.js';

export default class AtualizarInfoController {
  constructor() {}

  async handler(request, response) {
    const atualizarInfoRequestDTO = new AtualizarInfoRequestDTO({
      ...request.body,
    });
    const atualizarInfoRepository = new InfoRepositoryMongoDb(
      MongoDbDatabase.getInstance()
    );
    const atualizarInfoUseCase = new AtualizarInfoUseCase(
      atualizarInfoRepository
    );
    await atualizarInfoUseCase.execute(atualizarInfoRequestDTO);
    response.status(204).end();
  }
}
