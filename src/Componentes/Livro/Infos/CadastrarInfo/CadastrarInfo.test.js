import CadastrarInfoUseCase from './CadastrarInfoUseCase.js';
import InfoRepositoryMemory from '../Repository/InfoRepositoryMemory.js';

let infoRepositoryMemory;

describe('Cadastrar info testes integração', () => {
  beforeAll(() => {
    infoRepositoryMemory = new InfoRepositoryMemory();
  });

  it('Deve cadastrar um info', () => {
    const info = {
      livroId: 2,
      descricao: 'teste',
      paginas: 300,
      editora: 'teste',
      avaliacoes: [],
    };
    const cadastrarInfoUseCase = new CadastrarInfoUseCase(infoRepositoryMemory);
    expect(() => cadastrarInfoUseCase.execute(info)).not.toThrow();
  });
});
