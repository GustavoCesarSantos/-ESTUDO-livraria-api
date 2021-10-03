import ConsultarClientesResponseDTO from './ConsultarClientesResponseDTO.js';

export default class ConsultarClientesUseCase {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  async execute() {
    const clientesDb = await this.clienteRepository.many();
    const clientes = [];
    for (const cliente of clientesDb)
      clientes.push(new ConsultarClientesResponseDTO(cliente));
    return clientes;
  }
}
