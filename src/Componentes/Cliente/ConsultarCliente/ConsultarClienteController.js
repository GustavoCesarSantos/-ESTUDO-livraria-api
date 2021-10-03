import ConsultarClienteRequestDTO from './ConsultarClienteRequestDTO.js';
import ConsultarClienteUseCase from './ConsultarClienteUseCase.js';
import ClienteRepositoryPostgres from '../Repository/ClienteRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ConsultarClienteController {
  constructor() {}

  async handler(request, response) {
    const consultarClienteRequestDTO = new ConsultarClienteRequestDTO({
      ...request.params,
    });
    const clienteRepository = new ClienteRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const consultarClienteUseCase = new ConsultarClienteUseCase(
      clienteRepository
    );
    const cliente = await consultarClienteUseCase.execute(
      consultarClienteRequestDTO
    );
    response.status(201).json(cliente);
  }
}
