export default class ExcluirAvaliacaoRequestDTO {
  constructor(avaliacao) {
    this.livro_id = avaliacao.livroId * 1;
    this.avaliacaoIndex = avaliacao.index;
  }
}
