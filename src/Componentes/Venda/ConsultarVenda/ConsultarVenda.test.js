import ConsultarVendaUseCase from './ConsultarVendaUseCase.js';
import VendaRepositoryMemory from '../Repository/VendaRepositoryMemory.js';

let vendaRepositoryMemory;

describe('Consultar venda testes integração', () => {
  beforeAll(() => {
    vendaRepositoryMemory = new VendaRepositoryMemory();
  });

  it('Deve consultar o venda', async () => {
    const vendaMock = {
      venda_id: 99,
    };
    const consultarVendaUseCase = new ConsultarVendaUseCase(
      vendaRepositoryMemory
    );
    const venda = await consultarVendaUseCase.execute(vendaMock);
    expect(venda).toEqual({
      venda_id: 99,
      valor: 100,
      data: undefined,
      cliente_id: undefined,
      livro_id: undefined,
    });
  });
});
