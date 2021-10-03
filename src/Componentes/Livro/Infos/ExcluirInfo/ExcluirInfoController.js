import ExcluirInfoRequestDTO from './ExcluirInfoRequestDTO.js';
import ExcluirInfoUseCase from './ExcluirInfoUseCase.js';
import InfoRepositoryPostgres from '../Repository/InfoRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ExcluirInfoController {
  constructor() {}

  async handler(request, response) {
    const excluirInfoRequestDTO = new ExcluirInfoRequestDTO({
      ...request.params,
    });
    const infoRepository = new InfoRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const excluirInfoUseCase = new ExcluirInfoUseCase(infoRepository);
    await excluirInfoUseCase.execute(excluirInfoRequestDTO);
    response.status(201).end();
  }
}
