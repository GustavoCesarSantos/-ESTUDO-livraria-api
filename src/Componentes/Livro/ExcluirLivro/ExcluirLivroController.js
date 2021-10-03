import ExcluirLivroRequestDTO from './ExcluirLivroRequestDTO.js';
import ExcluirLivroUseCase from './ExcluirLivroUseCase.js';
import LivroRepositoryPostgres from '../Repository/LivroRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ExcluirLivroController {
  constructor() {}

  async handler(request, response) {
    const excluirLivroRequestDTO = new ExcluirLivroRequestDTO({
      ...request.params,
    });
    const livroRepository = new LivroRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const excluirLivroUseCase = new ExcluirLivroUseCase(livroRepository);
    await excluirLivroUseCase.execute(excluirLivroRequestDTO);
    response.status(201).end();
  }
}
