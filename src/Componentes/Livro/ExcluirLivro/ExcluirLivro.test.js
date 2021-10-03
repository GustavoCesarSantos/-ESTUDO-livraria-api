import ExcluirLivroUseCase from './ExcluirLivroUseCase.js';
import LivroRepositoryMemory from '../Repository/LivroRepositoryMemory.js';

let livroRepositoryMemory;

describe('Excluir livro testes integração', () => {
  beforeAll(() => {
    livroRepositoryMemory = new LivroRepositoryMemory();
  });

  it('Deve excluir um livro', () => {
    const livro = { livro_id: 1 };
    const excluirLivroUseCase = new ExcluirLivroUseCase(livroRepositoryMemory);
    expect(() => excluirLivroUseCase.execute(livro)).not.toThrow();
  });
});
