export default class ConsultarVendasPorLivroRequestDTO {
  constructor(venda) {
    this.livro_id = venda.livroId;
  }
}
