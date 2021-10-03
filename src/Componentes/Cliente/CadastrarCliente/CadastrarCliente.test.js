import CadastrarClienteUseCase from './CadastrarClienteUseCase.js';
import ClienteRepositoryMemory from '../Repository/ClienteRepositoryMemory.js';

let clienteRepositoryMemory;

describe('Cadastrar cliente testes integração', () => {
  beforeAll(() => {
    clienteRepositoryMemory = new ClienteRepositoryMemory();
  });

  it('Deve cadastrar um cliente', () => {
    const cliente = {
      nome: 'teste',
      email: 'teste@teste.com.br',
      senha: 'teste',
      telefone: '(11) 99999-9999',
      endereco: 'av teste, 99',
    };
    const cadastrarClienteUseCase = new CadastrarClienteUseCase(
      clienteRepositoryMemory
    );
    expect(() => cadastrarClienteUseCase.execute(cliente)).not.toThrow();
  });
});
