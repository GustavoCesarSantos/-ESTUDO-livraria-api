import CadastrarClienteRequestDTO from './CadastrarClienteRequestDTO.js';
import CadastrarClienteUseCase from './CadastrarClienteUseCase.js';
import ClienteRepositoryPostgres from '../Repository/ClienteRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class CadastrarClienteController {
  constructor() {}

  async handler(request, response) {
    const cadastrarClienteRequestDTO = new CadastrarClienteRequestDTO({
      ...request.body,
    });
    const clienteRepository = new ClienteRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const cadastrarClienteUseCase = new CadastrarClienteUseCase(
      clienteRepository
    );
    await cadastrarClienteUseCase.execute(cadastrarClienteRequestDTO);
    response.status(201).json({ message: 'Cliente cadastrado com sucesso.' });
  }
}
