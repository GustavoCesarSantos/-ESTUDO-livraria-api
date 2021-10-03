import ConsultarLivroRequestDTO from './ConsultarLivroRequestDTO.js';
import ConsultarLivroUseCase from './ConsultarLivroUseCase.js';
import LivroRepositoryPostgres from '../Repository/LivroRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ConsultarLivroController {
  constructor() {}

  async handler(request, response) {
    const consultarLivroRequestDTO = new ConsultarLivroRequestDTO({
      ...request.params,
    });
    const livroRepository = new LivroRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const consultarLivroUseCase = new ConsultarLivroUseCase(livroRepository);
    const livro = await consultarLivroUseCase.execute(consultarLivroRequestDTO);
    response.status(201).json(livro);
  }
}
