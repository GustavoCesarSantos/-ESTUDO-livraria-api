export default class CadastrarAvaliacaoUseCase {
  constructor(infoRepository) {
    this.infoRepository = infoRepository;
  }

  execute(avaliacaoRequestDTO) {
    const info = this.infoRepository.one(avaliacaoRequestDTO);
    info.avaliacoes.push(avaliacaoRequestDTO.avaliacao);
    this.infoRepository.update(info);
  }
}
