import CadastrarAutorUseCase from './CadastrarAutorUseCase.js';
import AutorRepositoryMemory from '../Repository/AutorRepositoryMemory.js';

let autorRepositoryMemory;

describe('Cadastrar autor testes integração', () => {
  beforeAll(() => {
    autorRepositoryMemory = new AutorRepositoryMemory();
  });

  it('Deve cadastrar um autor', () => {
    const autor = {
      nome: 'teste',
      email: 'teste@teste.com.br',
      telefone: '(11) 99999-9999',
    };
    const cadastrarAutorUseCase = new CadastrarAutorUseCase(
      autorRepositoryMemory
    );
    expect(() => cadastrarAutorUseCase.execute(autor)).not.toThrow();
  });
});
