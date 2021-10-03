import CadastrarInfoRequestDTO from './CadastrarInfoRequestDTO.js';
import CadastrarInfoUseCase from './CadastrarInfoUseCase.js';
import InfoRepositoryPostgres from '../Repository/InfoRepositoryPostgres.js';
import MongoDbDatabase from '../../../../infra/database/MongoDbDatabase.js';

export default class CadastrarInfoController {
  constructor() {}

  async handler(request, response) {
    const cadastrarInfoRequestDTO = new CadastrarInfoRequestDTO({
      ...request.body,
    });
    const infoRepository = new InfoRepositoryPostgres(
      MongoDbDatabase.getInstance()
    );
    const cadastrarInfoUseCase = new CadastrarInfoUseCase(infoRepository);
    await cadastrarInfoUseCase.execute(cadastrarInfoRequestDTO);
    response.status(201).json({ message: 'Info cadastrada com sucesso.' });
  }
}
