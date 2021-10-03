export default class ExcluirClienteUseCase {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  execute(clienteRequestDTO) {
    //REGRA DE NEGÓCIO: Se existir vendas ligadas ao cliente, não deve ser possivel excluir o mesmo
    this.clienteRepository.delete(clienteRequestDTO);
  }
}
