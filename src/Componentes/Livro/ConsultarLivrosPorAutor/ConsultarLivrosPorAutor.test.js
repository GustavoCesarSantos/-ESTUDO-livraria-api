import ConsultarLivrosPorAutorUseCase from './ConsultarLivrosPorAutorUseCase.js';
import LivroRepositoryMemory from '../Repository/LivroRepositoryMemory.js';

let livroRepositoryMemory;

describe('Consultar livros por autor testes integração', () => {
  beforeAll(() => {
    livroRepositoryMemory = new LivroRepositoryMemory();
  });

  it('Deve consultar o livro', async () => {
    const autorIdMock = {
      autor_id: 99,
    };
    const consultarLivrosPorAutorUseCase = new ConsultarLivrosPorAutorUseCase(
      livroRepositoryMemory
    );
    const livros = await consultarLivrosPorAutorUseCase.execute(autorIdMock);
    expect(livros).toHaveLength(1);
  });
});
