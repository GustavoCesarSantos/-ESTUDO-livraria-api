export default class CadastrarVendaRequestDTO {
  constructor(venda) {
    this.valor = '';
    this.data = new Date();
    this.cliente_id = venda.cliente_id;
    this.livro_id = venda.livro_id;
  }
}
