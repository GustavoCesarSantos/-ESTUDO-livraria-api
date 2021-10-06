export default class AtualizarInfoRequestDTO {
  constructor(info) {
    this.livro_id = info.livroId;
    this.descricao = info.descricao;
    this.paginas = info.paginas;
    this.editora = info.editora;
  }
}
