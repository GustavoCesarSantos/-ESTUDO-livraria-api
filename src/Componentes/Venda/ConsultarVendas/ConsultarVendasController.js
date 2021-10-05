import ConsultarVendasUseCase from './ConsultarVendasUseCase.js';
import VendaRepositoryPostgres from '../Repository/VendaRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ConsultarVendasController {
  constructor() {}

  async handler(request, response) {
    const vendaRepository = new VendaRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const consultarVendasUseCase = new ConsultarVendasUseCase(vendaRepository);
    const vendas = await consultarVendasUseCase.execute();
    response.status(201).json(vendas);
  }
}
