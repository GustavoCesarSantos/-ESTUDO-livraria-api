import CadastrarAvaliacaoUseCase from './CadastrarAvaliacaoUseCase.js';
import InfoRepositoryMemory from '../../Repository/InfoRepositoryMemory.js';

let infoRepositoryMemory;

describe('Cadastrar avaliacao testes integração', () => {
  beforeAll(() => {
    infoRepositoryMemory = new InfoRepositoryMemory();
  });

  it('Deve cadastrar um avaliacao', () => {
    const avaliacao = {
      livroId: 1,
      avaliacao: {
        nome: 'teste',
        nota: 10,
        avaliacao: 'teste',
      },
    };
    const cadastrarAvaliacaoUseCase = new CadastrarAvaliacaoUseCase(
      infoRepositoryMemory
    );
    expect(() => cadastrarAvaliacaoUseCase.execute(avaliacao)).not.toThrow();
  });
});
