import ConsultarAutoresUseCase from './ConsultarAutoresUseCase.js';
import AutorRepositoryPostgres from '../Repository/AutorRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ConsultarAutoresController {
  constructor() {}

  async handler(request, response) {
    const autorRepository = new AutorRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const consultarAutoresUseCase = new ConsultarAutoresUseCase(
      autorRepository
    );
    const autores = await consultarAutoresUseCase.execute();
    response.status(201).json(autores);
  }
}
