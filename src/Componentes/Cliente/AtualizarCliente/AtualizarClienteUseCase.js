export default class AtualizarClienteUseCase {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  execute(clienteRequestDTO) {
    this.clienteRepository.update(clienteRequestDTO);
  }
}
