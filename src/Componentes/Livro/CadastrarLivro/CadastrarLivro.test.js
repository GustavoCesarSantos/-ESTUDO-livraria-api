import CadastrarLivroUseCase from './CadastrarLivroUseCase.js';
import LivroRepositoryMemory from '../Repository/LivroRepositoryMemory.js';

let livroRepositoryMemory;

describe('Cadastrar livro testes integração', () => {
  beforeAll(() => {
    livroRepositoryMemory = new LivroRepositoryMemory();
  });

  it('Deve cadastrar um livro', () => {
    const livro = {
      nome: 'teste',
      valor: 23.99,
      estoque: 1,
      autor_id: 1,
    };
    const cadastrarLivroUseCase = new CadastrarLivroUseCase(
      livroRepositoryMemory
    );
    expect(() => cadastrarLivroUseCase.execute(livro)).not.toThrow();
  });
});
