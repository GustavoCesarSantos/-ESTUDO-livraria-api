export default class CadastrarClienteUseCase {
  constructor(cadastrarClienteRepository) {
    this.cadastrarClienteRepository = cadastrarClienteRepository;
  }

  execute(clienteRequestDTO) {
    this.cadastrarClienteRepository.update(clienteRequestDTO);
  }
}
