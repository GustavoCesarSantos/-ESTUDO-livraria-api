export default class ExcluirAvaliacaoUseCase {
  constructor(infoRepository) {
    this.infoRepository = infoRepository;
  }

  execute(avaliacaoRequestDTO) {
    const info = this.infoRepository.one(avaliacaoRequestDTO);
    info.avaliacoes.splice(avaliacaoRequestDTO.avaliacaoIndex, 1);
    this.infoRepository.update(info);
  }
}
