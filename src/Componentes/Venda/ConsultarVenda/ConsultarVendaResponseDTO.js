export default class ConsultarVendaResponseDTO {
  constructor(venda) {
    this.venda_id = venda.venda_id;
    this.valor = venda.valor;
    this.data = venda.data;
    this.cliente_id = venda.cliente_id;
    this.livro_id = venda.livro_id;
  }
}
