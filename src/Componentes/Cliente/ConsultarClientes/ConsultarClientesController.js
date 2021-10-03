import ConsultarClientesUseCase from './ConsultarClientesUseCase.js';
import ClienteRepositoryPostgres from '../Repository/ClienteRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ConsultarClientesController {
  constructor() {}

  async handler(request, response) {
    const clienteRepository = new ClienteRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const consultarClientesUseCase = new ConsultarClientesUseCase(
      clienteRepository
    );
    const clientes = await consultarClientesUseCase.execute();
    response.status(201).json(clientes);
  }
}
