import AtualizarInfoUseCase from './AtualizarInfoUseCase.js';
import InfoRepositoryMemory from '../Repository/InfoRepositoryMemory.js';

let infoRepositoryMemory;

describe('Atualizar info testes integração', () => {
  beforeAll(() => {
    infoRepositoryMemory = new InfoRepositoryMemory();
  });

  it('Deve atualizar um info', () => {
    const info = {
      livroId: 99,
      descricao: 'teste atualizado',
    };
    const atualizarInfoUseCase = new AtualizarInfoUseCase(infoRepositoryMemory);
    expect(() => atualizarInfoUseCase.execute(info)).not.toThrow();
  });
});
