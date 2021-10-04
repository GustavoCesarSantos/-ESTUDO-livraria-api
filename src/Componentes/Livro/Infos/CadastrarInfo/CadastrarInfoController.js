import CadastrarInfoRequestDTO from './CadastrarInfoRequestDTO.js';
import CadastrarInfoUseCase from './CadastrarInfoUseCase.js';
import InfoRepositoryMongoDb from '../Repository/InfoRepositoryMongoDb.js';
import MongoDbDatabase from '../../../../infra/database/MongoDbDatabase.js';

export default class CadastrarInfoController {
  constructor() {}

  async handler(request, response) {
    const cadastrarInfoRequestDTO = new CadastrarInfoRequestDTO({
      ...request.body,
    });
    const infoRepository = new InfoRepositoryMongoDb(
      MongoDbDatabase.getInstance()
    );
    const cadastrarInfoUseCase = new CadastrarInfoUseCase(infoRepository);
    await cadastrarInfoUseCase.execute(cadastrarInfoRequestDTO);
    response.status(201).json({ message: 'Info cadastrada com sucesso.' });
  }
}
