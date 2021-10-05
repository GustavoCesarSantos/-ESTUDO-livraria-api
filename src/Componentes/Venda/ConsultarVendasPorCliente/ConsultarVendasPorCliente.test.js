import ConsultarVendasPorClienteUseCase from './ConsultarVendasPorClienteUseCase.js';
import VendaRepositoryMemory from '../Repository/VendaRepositoryMemory.js';

let vendaRepositoryMemory;

describe('Consultar vendas por cliente testes integração', () => {
  beforeAll(() => {
    vendaRepositoryMemory = new VendaRepositoryMemory();
  });

  it('Deve consultar a venda', async () => {
    const clienteIdMock = {
      cliente_id: 1,
    };
    const consultarVendasPorClienteUseCase =
      new ConsultarVendasPorClienteUseCase(vendaRepositoryMemory);
    const vendas = await consultarVendasPorClienteUseCase.execute(
      clienteIdMock
    );
    expect(vendas).toHaveLength(1);
  });
});
