import ExcluirAvaliacaoUseCase from './ExcluirAvaliacaoUseCase.js';
import InfoRepositoryMemory from '../../Repository/InfoRepositoryMemory.js';

let infoRepositoryMemory;

describe('Excluir avaliacao testes integração', () => {
  beforeAll(() => {
    infoRepositoryMemory = new InfoRepositoryMemory();
  });

  it('Deve excluir uma avaliacao', () => {
    const avaliacao = { livroId: 1 };
    const excluirAvaliacaoUseCase = new ExcluirAvaliacaoUseCase(
      infoRepositoryMemory
    );
    expect(() => excluirAvaliacaoUseCase.execute(avaliacao)).not.toThrow();
  });
});
