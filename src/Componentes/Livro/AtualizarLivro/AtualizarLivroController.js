import AtualizarLivroRequestDTO from './AtualizarLivroRequestDTO.js';
import AtualizarLivroUseCase from './AtualizarLivroUseCase.js';
import LivroRepositoryPostgres from '../Repository/LivroRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class AtualizarLivroController {
  constructor() {}

  async handler(request, response) {
    const atualizarLivroRequestDTO = new AtualizarLivroRequestDTO({
      ...request.body,
    });
    const atualizarLivroRepository = new LivroRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const atualizarLivroUseCase = new AtualizarLivroUseCase(
      atualizarLivroRepository
    );
    await atualizarLivroUseCase.execute(atualizarLivroRequestDTO);
    response.status(204).end();
  }
}
