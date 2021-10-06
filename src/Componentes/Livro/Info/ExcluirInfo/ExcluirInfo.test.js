import ExcluirInfoUseCase from './ExcluirInfoUseCase.js';
import InfoRepositoryMemory from '../Repository/InfoRepositoryMemory.js';

let infoRepositoryMemory;

describe('Excluir info testes integração', () => {
  beforeAll(() => {
    infoRepositoryMemory = new InfoRepositoryMemory();
  });

  it('Deve excluir um info', () => {
    const info = { livroId: 1 };
    const excluirInfoUseCase = new ExcluirInfoUseCase(infoRepositoryMemory);
    expect(() => excluirInfoUseCase.execute(info)).not.toThrow();
  });
});
