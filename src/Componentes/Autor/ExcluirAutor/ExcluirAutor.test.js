import ExcluirAutorUseCase from './ExcluirAutorUseCase.js';
import AutorRepositoryMemory from '../Repository/AutorRepositoryMemory.js';

let autorRepositoryMemory;

describe('Excluir autor testes integração', () => {
  beforeAll(() => {
    autorRepositoryMemory = new AutorRepositoryMemory();
  });

  it('Deve excluir um autor', () => {
    const autor = { autor_id: 1 };
    const excluirAutorUseCase = new ExcluirAutorUseCase(autorRepositoryMemory);
    expect(() => excluirAutorUseCase.execute(autor)).not.toThrow();
  });
});
