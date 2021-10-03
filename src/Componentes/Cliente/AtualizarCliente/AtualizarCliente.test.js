import AtualizarClienteUseCase from './AtualizarClienteUseCase.js';
import ClienteRepositoryMemory from '../Repository/ClienteRepositoryMemory.js';

let clienteRepositoryMemory;

describe('Atualizar cliente testes integração', () => {
  beforeAll(() => {
    clienteRepositoryMemory = new ClienteRepositoryMemory();
  });

  it('Deve atualizar um cliente', () => {
    const cliente = {
      cliente_id: 1,
      nome: 'testeAtualizado',
      email: 'teste@teste.com.br',
      senha: 'teste',
      telefone: '(11) 99999-9999',
      endereco: 'av teste, 99',
    };
    const atualizarClienteUseCase = new AtualizarClienteUseCase(
      clienteRepositoryMemory
    );
    expect(() => atualizarClienteUseCase.execute(cliente)).not.toThrow();
  });
});
