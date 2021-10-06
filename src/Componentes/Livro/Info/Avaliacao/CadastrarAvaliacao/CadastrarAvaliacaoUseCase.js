export default class CadastrarAvaliacaoUseCase {
  constructor(infoRepository) {
    this.infoRepository = infoRepository;
  }

  async execute(avaliacaoRequestDTO) {
    const info = await this.infoRepository.one(avaliacaoRequestDTO);
    info.avaliacoes.push(avaliacaoRequestDTO.avaliacoes);
    this.infoRepository.update(info);
  }
}
