import ConsultarVendasPorLivroUseCase from './ConsultarVendasPorLivroUseCase.js';
import VendaRepositoryMemory from '../Repository/VendaRepositoryMemory.js';

let vendaRepositoryMemory;

describe('Consultar vendas por livro testes integração', () => {
  beforeAll(() => {
    vendaRepositoryMemory = new VendaRepositoryMemory();
  });

  it('Deve consultar a venda', async () => {
    const livroIdMock = {
      livro_id: 1,
    };
    const consultarVendasPorLivroUseCase = new ConsultarVendasPorLivroUseCase(
      vendaRepositoryMemory
    );
    const vendas = await consultarVendasPorLivroUseCase.execute(livroIdMock);
    expect(vendas).toHaveLength(1);
  });
});
