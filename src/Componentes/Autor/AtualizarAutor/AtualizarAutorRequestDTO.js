export default class AtualizarAutorRequestDTO {
  constructor(autor) {
    this.autor_id = autor.autor_id;
    this.nome = autor.nome;
    this.email = autor.email;
    this.telefone = autor.telefone;
  }
}
