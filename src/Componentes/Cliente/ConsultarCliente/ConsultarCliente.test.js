import ConsultarClienteUseCase from './ConsultarClienteUseCase.js';
import ClienteRepositoryMemory from '../Repository/ClienteRepositoryMemory.js';

let clienteRepositoryMemory;

describe('Consultar cliente testes integração', () => {
  beforeAll(() => {
    clienteRepositoryMemory = new ClienteRepositoryMemory();
  });

  it('Deve consultar o cliente', async () => {
    const clienteMock = {
      cliente_id: 99,
    };
    const consultarClienteUseCase = new ConsultarClienteUseCase(
      clienteRepositoryMemory
    );
    const cliente = await consultarClienteUseCase.execute(clienteMock);
    expect(cliente).toEqual({
      email: undefined,
      endereco: undefined,
      nome: 'teste',
      telefone: undefined,
    });
  });
});
