export default class CadastrarAutorRequestDTO {
  constructor(autor) {
    this.nome = autor.nome;
    this.email = autor.email;
    this.telefone = autor.telefone;
  }
}
