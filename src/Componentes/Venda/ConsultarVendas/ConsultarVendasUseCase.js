import ConsultarVendasResponseDTO from './ConsultarVendasResponseDTO.js';

export default class ConsultarVendasUseCase {
  constructor(vendaRepository) {
    this.vendaRepository = vendaRepository;
  }

  async execute() {
    const vendasDb = await this.vendaRepository.many();
    const vendas = [];
    for (const venda of vendasDb)
      vendas.push(new ConsultarVendasResponseDTO(venda));
    return vendas;
  }
}
