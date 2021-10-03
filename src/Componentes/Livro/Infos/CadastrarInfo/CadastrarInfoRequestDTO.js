export default class CadastrarInfoRequestDTO {
  constructor(info) {
    this.livroId = info.livroId;
    this.descricao = info.descricao;
    this.paginas = info.paginas;
    this.editora = info.editora;
    this.avaliacoes = [];
  }
}
