export default class AtualizarInfoUseCase {
  constructor(infoRepository) {
    this.infoRepository = infoRepository;
  }

  execute(infoRequestDTO) {
    this.infoRepository.update(infoRequestDTO);
  }
}
