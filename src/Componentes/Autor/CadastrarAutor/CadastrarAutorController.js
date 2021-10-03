import CadastrarAutorRequestDTO from './CadastrarAutorRequestDTO.js';
import CadastrarAutorUseCase from './CadastrarAutorUseCase.js';
import AutorRepositoryPostgres from '../Repository/AutorRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class CadastrarAutorController {
  constructor() {}

  async handler(request, response) {
    const cadastrarAutorRequestDTO = new CadastrarAutorRequestDTO({
      ...request.body,
    });
    const autorRepository = new AutorRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const cadastrarAutorUseCase = new CadastrarAutorUseCase(autorRepository);
    await cadastrarAutorUseCase.execute(cadastrarAutorRequestDTO);
    response.status(201).json({ message: 'Autor cadastrado com sucesso.' });
  }
}
