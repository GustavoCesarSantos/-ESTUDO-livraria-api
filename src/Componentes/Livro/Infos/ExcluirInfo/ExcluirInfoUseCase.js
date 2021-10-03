export default class ExcluirInfoUseCase {
  constructor(infoRepository) {
    this.infoRepository = infoRepository;
  }

  execute(infoRequestDTO) {
    this.infoRepository.delete(infoRequestDTO);
  }
}
