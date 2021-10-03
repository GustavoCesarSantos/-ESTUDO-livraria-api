import ConsultarAutorRequestDTO from './ConsultarAutorRequestDTO.js';
import ConsultarAutorUseCase from './ConsultarAutorUseCase.js';
import AutorRepositoryPostgres from '../Repository/AutorRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ConsultarAutorController {
  constructor() {}

  async handler(request, response) {
    const consultarAutorRequestDTO = new ConsultarAutorRequestDTO({
      ...request.params,
    });
    const autorRepository = new AutorRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const consultarAutorUseCase = new ConsultarAutorUseCase(autorRepository);
    const autor = await consultarAutorUseCase.execute(consultarAutorRequestDTO);
    response.status(201).json(autor);
  }
}
