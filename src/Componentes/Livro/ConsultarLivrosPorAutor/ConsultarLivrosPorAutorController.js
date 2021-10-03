import ConsultarLivrosPorAutorRequestDTO from './ConsultarLivrosPorAutorRequestDTO.js';
import ConsultarLivrosPorAutorUseCase from './ConsultarLivrosPorAutorUseCase.js';
import LivroRepositoryPostgres from '../Repository/LivroPorAutorRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ConsultarLivrosPorAutorController {
  constructor() {}

  async handler(request, response) {
    const consultarLivrosPorAutorRequestDTO =
      new ConsultarLivrosPorAutorRequestDTO({
        ...request.query,
      });
    const livroRepository = new LivroRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const consultarLivrosPorAutorUseCase = new ConsultarLivrosPorAutorUseCase(
      livroRepository
    );
    const livrosPorAutor = await consultarLivrosPorAutorUseCase.execute(
      consultarLivrosPorAutorRequestDTO
    );
    response.status(201).json(livrosPorAutor);
  }
}
