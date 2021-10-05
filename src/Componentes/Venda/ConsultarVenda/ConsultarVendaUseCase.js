import ConsultarVendaResponseDTO from './ConsultarVendaResponseDTO.js';

export default class ConsultarVendaUseCase {
  constructor(vendaRepository) {
    this.vendaRepository = vendaRepository;
  }

  async execute(vendaRequestDTO) {
    const vendaDb = await this.vendaRepository.one(vendaRequestDTO);
    return new ConsultarVendaResponseDTO(vendaDb);
  }
}
