export default class CadastrarLivroRequestDTO {
  constructor(livro) {
    this.nome = livro.nome;
    this.valor = livro.valor;
    this.estoque = livro.estoque;
    this.autor_id = livro.autor_id;
  }
}
