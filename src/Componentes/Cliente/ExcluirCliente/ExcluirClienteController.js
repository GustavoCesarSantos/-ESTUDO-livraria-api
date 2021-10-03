import ExcluirClienteRequestDTO from './ExcluirClienteRequestDTO.js';
import ExcluirClienteUseCase from './ExcluirClienteUseCase.js';
import ClienteRepositoryPostgres from '../Repository/ClienteRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ExcluirClienteController {
  constructor() {}

  async handler(request, response) {
    const excluirClienteRequestDTO = new ExcluirClienteRequestDTO({
      ...request.params,
    });
    const clienteRepository = new ClienteRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const excluirClienteUseCase = new ExcluirClienteUseCase(clienteRepository);
    await excluirClienteUseCase.execute(excluirClienteRequestDTO);
    response.status(201).end();
  }
}
