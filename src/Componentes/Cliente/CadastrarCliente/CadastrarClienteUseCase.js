export default class CadastrarClienteUseCase {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  execute(clienteRequestDTO) {
    this.clienteRepository.save(clienteRequestDTO);
  }
}
