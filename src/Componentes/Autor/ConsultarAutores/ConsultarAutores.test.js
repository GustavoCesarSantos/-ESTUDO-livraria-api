import ConsultarAutoresUseCase from './ConsultarAutoresUseCase.js';
import AutorRepositoryMemory from '../Repository/AutorRepositoryMemory.js';

let autorRepositoryMemory;

describe('Consultar autores testes integração', () => {
  beforeAll(() => {
    autorRepositoryMemory = new AutorRepositoryMemory();
  });

  it('Deve consultar os autores', async () => {
    const consultarAutoresUseCase = new ConsultarAutoresUseCase(
      autorRepositoryMemory
    );
    const autores = await consultarAutoresUseCase.execute();
    expect(autores).toHaveLength(2);
  });
});
