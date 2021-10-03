export default class AtualizarLivroRequestDTO {
  constructor(livro) {
    this.livro_id = livro.livro_id;
    this.valor = livro.valor;
  }
}
