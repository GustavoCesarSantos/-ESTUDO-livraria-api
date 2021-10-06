import ConsultarVendasPorClienteRequestDTO from './ConsultarVendasPorClienteRequestDTO.js';
import ConsultarVendasPorClienteUseCase from './ConsultarVendasPorClienteUseCase.js';
import VendaRepositoryPostgres from '../Repository/VendaRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ConsultarVendasPorClienteController {
  constructor() {}

  async handler(request, response) {
    const consultarVendasPorClienteRequestDTO =
      new ConsultarVendasPorClienteRequestDTO({
        ...request.query,
      });
    const vendaRepository = new VendaRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const consultarVendasPorClienteUseCase =
      new ConsultarVendasPorClienteUseCase(vendaRepository);
    const vendas = await consultarVendasPorClienteUseCase.execute(
      consultarVendasPorClienteRequestDTO
    );
    response.status(201).json(vendas);
  }
}
