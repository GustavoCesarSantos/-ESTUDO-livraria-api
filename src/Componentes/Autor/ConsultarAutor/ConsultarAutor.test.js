import ConsultarAutorUseCase from './ConsultarAutorUseCase.js';
import AutorRepositoryMemory from '../Repository/AutorRepositoryMemory.js';

let autorRepositoryMemory;

describe('Consultar autor testes integração', () => {
  beforeAll(() => {
    autorRepositoryMemory = new AutorRepositoryMemory();
  });

  it('Deve consultar o autor', async () => {
    const autorMock = {
      autor_id: 99,
    };
    const consultarAutorUseCase = new ConsultarAutorUseCase(
      autorRepositoryMemory
    );
    const autor = await consultarAutorUseCase.execute(autorMock);
    expect(autor).toEqual({
      autor_id: 99,
      email: undefined,
      nome: 'teste',
      telefone: undefined,
    });
  });
});
