import ConsultarVendasPorLivroResponseDTO from './ConsultarVendasPorLivroResponseDTO.js';

export default class ConsultarVendasPorLivroUseCase {
  constructor(vendaRepository) {
    this.vendaRepository = vendaRepository;
  }

  async execute(vendaRequestDTO) {
    const vendasDb = await this.vendaRepository.manyByLivro(vendaRequestDTO);
    const vendas = [];
    for (const venda of vendasDb)
      vendas.push(new ConsultarVendasPorLivroResponseDTO(venda));
    return vendas;
  }
}
