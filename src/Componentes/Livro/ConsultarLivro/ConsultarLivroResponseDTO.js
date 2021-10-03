export default class ConsultarLivroResponseDTO {
  constructor(livro) {
    this.livro_id = livro.livro_id;
    this.nome = livro.nome;
    this.valor = livro.valor;
    this.estoque = livro.estoque;
    this.autor_id = livro.autor_id;
  }
}
