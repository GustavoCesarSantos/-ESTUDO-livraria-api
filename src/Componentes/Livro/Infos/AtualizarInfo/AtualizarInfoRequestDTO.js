export default class AtualizarInfoRequestDTO {
  constructor(info) {
    this.livroId = info.livroId;
    this.descricao = info.descricao;
    this.paginas = info.paginas;
    this.editora = info.editora;
  }
}
