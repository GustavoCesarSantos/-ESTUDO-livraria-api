import AtualizarLivroUseCase from './AtualizarLivroUseCase.js';
import LivroRepositoryMemory from '../Repository/LivroRepositoryMemory.js';

let livroRepositoryMemory;

describe('Atualizar livro testes integração', () => {
  beforeAll(() => {
    livroRepositoryMemory = new LivroRepositoryMemory();
  });

  it('Deve atualizar um livro', () => {
    const livro = {
      livro_id: 99,
      valor: 25.0,
    };
    const atualizarLivroUseCase = new AtualizarLivroUseCase(
      livroRepositoryMemory
    );
    expect(() => atualizarLivroUseCase.execute(livro)).not.toThrow();
  });
});
