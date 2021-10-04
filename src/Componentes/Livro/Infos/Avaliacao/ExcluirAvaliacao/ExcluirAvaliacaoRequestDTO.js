export default class ExcluirAvaliacaoRequestDTO {
  constructor(avaliacao) {
    this.livroId = avaliacao.livroId;
    this.avaliacaoIndex = avaliacao.index;
  }
}
