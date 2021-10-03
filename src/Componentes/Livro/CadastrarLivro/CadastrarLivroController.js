import CadastrarLivroRequestDTO from './CadastrarLivroRequestDTO.js';
import CadastrarLivroUseCase from './CadastrarLivroUseCase.js';
import LivroRepositoryPostgres from '../Repository/LivroRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class CadastrarLivroController {
  constructor() {}

  async handler(request, response) {
    const cadastrarLivroRequestDTO = new CadastrarLivroRequestDTO({
      ...request.body,
    });
    const livroRepository = new LivroRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const cadastrarLivroUseCase = new CadastrarLivroUseCase(livroRepository);
    await cadastrarLivroUseCase.execute(cadastrarLivroRequestDTO);
    response.status(201).json({ message: 'Livro cadastrado com sucesso.' });
  }
}
