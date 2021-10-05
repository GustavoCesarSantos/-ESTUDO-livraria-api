import CadastrarVendaUseCase from './CadastrarVendaUseCase.js';
import LivroRepositoryMemory from '../../Livro/Repository/LivroRepositoryMemory';
import VendaRepositoryMemory from '../Repository/VendaRepositoryMemory.js';

let livroRepositoryMemory;
let vendaRepositoryMemory;

describe('Cadastrar venda testes integração', () => {
  beforeAll(() => {
    livroRepositoryMemory = new LivroRepositoryMemory();
    vendaRepositoryMemory = new VendaRepositoryMemory();
  });

  it('Deve cadastrar um venda', () => {
    const venda = {
      valor: '',
      data: new Date(),
      cliente_id: 1,
      livro_id: 1,
    };
    const cadastrarVendaUseCase = new CadastrarVendaUseCase(
      livroRepositoryMemory,
      vendaRepositoryMemory
    );
    expect(() => cadastrarVendaUseCase.execute(venda)).not.toThrow();
  });
});
