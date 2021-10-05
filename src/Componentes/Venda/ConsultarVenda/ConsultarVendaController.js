import ConsultarVendaRequestDTO from './ConsultarVendaRequestDTO.js';
import ConsultarVendaUseCase from './ConsultarVendaUseCase.js';
import VendaRepositoryPostgres from '../Repository/VendaRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ConsultarVendaController {
  constructor() {}

  async handler(request, response) {
    const consultarVendaRequestDTO = new ConsultarVendaRequestDTO({
      ...request.params,
    });
    const vendaRepository = new VendaRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const consultarVendaUseCase = new ConsultarVendaUseCase(vendaRepository);
    const venda = await consultarVendaUseCase.execute(consultarVendaRequestDTO);
    response.status(201).json(venda);
  }
}
