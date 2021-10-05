import ConsultarVendasPorLivroRequestDTO from './ConsultarVendasPorLivroRequestDTO.js';
import ConsultarVendasPorLivroUseCase from './ConsultarVendasPorLivroUseCase.js';
import VendaRepositoryPostgres from '../Repository/VendaRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ConsultarVendasPorLivroController {
  constructor() {}

  async handler(request, response) {
    const consultarVendasPorLivroRequestDTO =
      new ConsultarVendasPorLivroRequestDTO({
        ...request.params,
      });
    const vendaRepository = new VendaRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const consultarVendasPorLivroUseCase = new ConsultarVendasPorLivroUseCase(
      vendaRepository
    );
    const vendas = await consultarVendasPorLivroUseCase.execute(
      consultarVendasPorLivroRequestDTO
    );
    response.status(201).json(vendas);
  }
}
