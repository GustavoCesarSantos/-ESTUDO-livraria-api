import ConsultarVendasUseCase from './ConsultarVendasUseCase.js';
import VendaRepositoryMemory from '../Repository/VendaRepositoryMemory.js';

let vendaRepositoryMemory;

describe('Consultar vendas testes integração', () => {
  beforeAll(() => {
    vendaRepositoryMemory = new VendaRepositoryMemory();
  });

  it('Deve consultar os vendas', async () => {
    const consultarVendasUseCase = new ConsultarVendasUseCase(
      vendaRepositoryMemory
    );
    const vendas = await consultarVendasUseCase.execute();
    expect(vendas).toHaveLength(2);
  });
});
