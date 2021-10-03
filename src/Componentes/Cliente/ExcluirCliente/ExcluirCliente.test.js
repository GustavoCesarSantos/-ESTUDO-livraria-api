import ExcluirClienteUseCase from './ExcluirClienteUseCase.js';
import ClienteRepositoryMemory from '../Repository/ClienteRepositoryMemory.js';

let clienteRepositoryMemory;

describe('Excluir cliente testes integração', () => {
  beforeAll(() => {
    clienteRepositoryMemory = new ClienteRepositoryMemory();
  });

  it('Deve excluir um cliente', () => {
    const cliente = { cliente_id: 1 };
    const excluirClienteUseCase = new ExcluirClienteUseCase(
      clienteRepositoryMemory
    );
    expect(() => excluirClienteUseCase.execute(cliente)).not.toThrow();
  });
});
