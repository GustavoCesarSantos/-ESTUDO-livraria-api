export default class CadastrarAvaliacaoRequestDTO {
  constructor(avaliacao) {
    this.livroId = avaliacao.livroId;
    this.avaliacao = {
      nome: avaliacao.nome,
      nota: avaliacao.nota,
      avaliacao: avaliacao.avaliacao,
    };
  }
}
