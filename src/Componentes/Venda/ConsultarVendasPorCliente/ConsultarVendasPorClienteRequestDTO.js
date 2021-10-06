export default class ConsultarVendasPorClienteRequestDTO {
  constructor(venda) {
    this.cliente_id = venda.clienteId * 1;
  }
}
