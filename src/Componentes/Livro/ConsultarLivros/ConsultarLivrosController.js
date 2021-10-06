import ConsultarLivrosUseCase from './ConsultarLivrosUseCase.js';
import ConsultarLivrosPorAutorController from '../ConsultarLivrosPorAutor/ConsultarLivrosPorAutorController.js';
import LivroRepositoryPostgres from '../Repository/LivroRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class ConsultarLivrosController {
  constructor() {}

  async handler(request, response) {
    if (request.query.autorId) {
      const consultarLivrosPorAutorController =
        new ConsultarLivrosPorAutorController();
      return consultarLivrosPorAutorController.handler(request, response);
    }
    const livroRepository = new LivroRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const consultarLivrosUseCase = new ConsultarLivrosUseCase(livroRepository);
    const livros = await consultarLivrosUseCase.execute();
    response.status(201).json(livros);
  }
}
