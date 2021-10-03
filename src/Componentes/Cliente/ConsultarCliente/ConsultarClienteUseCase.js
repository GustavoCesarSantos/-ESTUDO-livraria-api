import ConsultarClienteResponseDTO from './ConsultarClienteResponseDTO.js';

export default class ConsultarClienteUseCase {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  async execute(clienteRequestDTO) {
    const clienteDb = await this.clienteRepository.one(clienteRequestDTO);
    return new ConsultarClienteResponseDTO(clienteDb);
  }
}
