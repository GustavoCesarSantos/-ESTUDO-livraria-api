export default class ExcluirAvaliacaoUseCase {
  constructor(infoRepository) {
    this.infoRepository = infoRepository;
  }

  async execute(avaliacaoRequestDTO) {
    const info = await this.infoRepository.one(avaliacaoRequestDTO);
    info.avaliacoes.splice(avaliacaoRequestDTO.avaliacaoIndex, 1);
    this.infoRepository.update(info);
  }
}
