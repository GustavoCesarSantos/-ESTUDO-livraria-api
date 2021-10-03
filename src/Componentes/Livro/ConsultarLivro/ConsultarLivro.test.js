import ConsultarLivroUseCase from './ConsultarLivroUseCase.js';
import LivroRepositoryMemory from '../Repository/LivroRepositoryMemory.js';

let livroRepositoryMemory;

describe('Consultar livro testes integração', () => {
  beforeAll(() => {
    livroRepositoryMemory = new LivroRepositoryMemory();
  });

  it('Deve consultar o livro', async () => {
    const livroMock = {
      livro_id: 99,
    };
    const consultarLivroUseCase = new ConsultarLivroUseCase(
      livroRepositoryMemory
    );
    const livro = await consultarLivroUseCase.execute(livroMock);
    expect(livro).toEqual({
      livro_id: 99,
      nome: 'teste',
      valor: undefined,
      estoque: undefined,
      autor_id: undefined,
    });
  });
});
