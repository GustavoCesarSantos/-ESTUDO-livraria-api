import AtualizarAutorRequestDTO from './AtualizarAutorRequestDTO.js';
import AtualizarAutorUseCase from './AtualizarAutorUseCase.js';
import AutorRepositoryPostgres from '../Repository/AutorRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class AtualizarAutorController {
  constructor() {}

  async handler(request, response) {
    const atualizarAutorRequestDTO = new AtualizarAutorRequestDTO({
      ...request.body,
    });
    const atualizarAutorRepository = new AutorRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const atualizarAutorUseCase = new AtualizarAutorUseCase(
      atualizarAutorRepository
    );
    await atualizarAutorUseCase.execute(atualizarAutorRequestDTO);
    response.status(204).end();
  }
}
