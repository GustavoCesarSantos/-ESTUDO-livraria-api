import ConsultarClientesUseCase from './ConsultarClientesUseCase.js';
import ClienteRepositoryMemory from '../Repository/ClienteRepositoryMemory.js';

let clienteRepositoryMemory;

describe('Consultar clientes testes integração', () => {
  beforeAll(() => {
    clienteRepositoryMemory = new ClienteRepositoryMemory();
  });

  it('Deve consultar os clientes', async () => {
    const consultarClientesUseCase = new ConsultarClientesUseCase(
      clienteRepositoryMemory
    );
    const clientes = await consultarClientesUseCase.execute();
    expect(clientes).toHaveLength(1);
  });
});
