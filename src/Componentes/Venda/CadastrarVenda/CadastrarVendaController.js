import CadastrarVendaRequestDTO from './CadastrarVendaRequestDTO.js';
import CadastrarVendaUseCase from './CadastrarVendaUseCase.js';
import LivroRepositoryPostgres from '../../Livro/Repository/LivroRepositoryPostgres';
import VendaRepositoryPostgres from '../Repository/VendaRepositoryPostgres.js';
import PgPromiseDatabase from '../../../infra/database/PgPromiseDatabase.js';

export default class CadastrarVendaController {
  constructor() {}

  async handler(request, response) {
    const cadastrarVendaRequestDTO = new CadastrarVendaRequestDTO({
      ...request.body,
    });
    const livroRepository = new LivroRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const vendaRepository = new VendaRepositoryPostgres(
      PgPromiseDatabase.getInstance()
    );
    const cadastrarVendaUseCase = new CadastrarVendaUseCase(
      livroRepository,
      vendaRepository
    );
    await cadastrarVendaUseCase.execute(cadastrarVendaRequestDTO);
    response.status(201).json({ message: 'Venda cadastrado com sucesso.' });
  }
}
