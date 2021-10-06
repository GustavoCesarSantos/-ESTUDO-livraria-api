export default class CadastrarAvaliacaoRequestDTO {
  constructor(avaliacao) {
    this.livro_id = avaliacao.livroId * 1;
    this.avaliacoes = {
      nome: avaliacao.nome,
      nota: avaliacao.nota,
      avaliacao: avaliacao.avaliacao,
    };
  }
}
