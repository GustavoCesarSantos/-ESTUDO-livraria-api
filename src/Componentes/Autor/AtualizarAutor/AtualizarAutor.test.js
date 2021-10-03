import AtualizarAutorUseCase from './AtualizarAutorUseCase.js';
import AutorRepositoryMemory from '../Repository/AutorRepositoryMemory.js';

let autorRepositoryMemory;

describe('Atualizar autor testes integração', () => {
  beforeAll(() => {
    autorRepositoryMemory = new AutorRepositoryMemory();
  });

  it('Deve atualizar um autor', () => {
    const autor = {
      autor_id: 1,
      nome: 'testeAtualizado',
      email: 'teste@teste.com.br',
      telefone: '(11) 99999-9999',
    };
    const atualizarAutorUseCase = new AtualizarAutorUseCase(
      autorRepositoryMemory
    );
    expect(() => atualizarAutorUseCase.execute(autor)).not.toThrow();
  });
});
