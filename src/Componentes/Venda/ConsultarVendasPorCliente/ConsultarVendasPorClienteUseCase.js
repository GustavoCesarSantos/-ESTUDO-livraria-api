import ConsultarVendasPorClienteResponseDTO from './ConsultarVendasPorClienteResponseDTO.js';

export default class ConsultarVendasPorClienteUseCase {
  constructor(vendaRepository) {
    this.vendaRepository = vendaRepository;
  }

  async execute(vendaRequestDTO) {
    const vendasDb = await this.vendaRepository.manyByCliente(vendaRequestDTO);
    const vendas = [];
    for (const venda of vendasDb)
      vendas.push(new ConsultarVendasPorClienteResponseDTO(venda));
    return vendas;
  }
}
