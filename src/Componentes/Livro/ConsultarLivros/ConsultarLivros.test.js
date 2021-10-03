import ConsultarLivrosUseCase from './ConsultarLivrosUseCase.js';
import LivroRepositoryMemory from '../Repository/LivroRepositoryMemory.js';

let livroRepositoryMemory;

describe('Consultar livros testes integração', () => {
  beforeAll(() => {
    livroRepositoryMemory = new LivroRepositoryMemory();
  });

  it('Deve consultar os livros', async () => {
    const consultarLivrosUseCase = new ConsultarLivrosUseCase(
      livroRepositoryMemory
    );
    const livros = await consultarLivrosUseCase.execute();
    expect(livros).toHaveLength(2);
  });
});
