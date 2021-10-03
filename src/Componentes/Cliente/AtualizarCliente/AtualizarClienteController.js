import AtualizarClienteRequestDTO from './AtualizarClienteRequestDTO.js';
import AtualizarClienteUseCase from './AtualizarClienteUseCase.js';
import ClienteRepositoryPostgres from '../Repository/ClienteRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class AtualizarClienteController {
  constructor() {}

  async handler(request, response) {
    const atualizarClienteRequestDTO = new AtualizarClienteRequestDTO({
      ...request.body,
    });
    const atualizarClienteRepository = new ClienteRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const atualizarClienteUseCase = new AtualizarClienteUseCase(
      atualizarClienteRepository
    );
    await atualizarClienteUseCase.execute(atualizarClienteRequestDTO);
    response.status(204).end();
  }
}
