import ExcluirAutorRequestDTO from './ExcluirAutorRequestDTO.js';
import ExcluirAutorUseCase from './ExcluirAutorUseCase.js';
import AutorRepositoryPostgres from '../Repository/AutorRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ExcluirAutorController {
  constructor() {}

  async handler(request, response) {
    const excluirAutorRequestDTO = new ExcluirAutorRequestDTO({
      ...request.params,
    });
    const AutorRepository = new AutorRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const excluirAutorUseCase = new ExcluirAutorUseCase(AutorRepository);
    await excluirAutorUseCase.execute(excluirAutorRequestDTO);
    response.status(201).end();
  }
}
