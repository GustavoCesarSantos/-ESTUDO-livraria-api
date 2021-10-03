import AtualizarClienteRequestDTO from './AtualizarClienteRequestDTO.js';
import AtualizarClienteUseCase from './AtualizarClienteUseCase.js';
import AtualizarClienteRepositoryPostgres from './AtualizarClienteRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class AtualizarClienteController {
  constructor() {}

  async handler(request, response) {
    const atualizarClienteRequestDTO = new AtualizarClienteRequestDTO({
      ...request.body,
    });
    const atualizarClienteRepository = new AtualizarClienteRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const atualizarClienteUseCase = new AtualizarClienteUseCase(
      atualizarClienteRepository
    );
    await atualizarClienteUseCase.execute(atualizarClienteRequestDTO);
    response.status(204).end();
  }
}
