export default class CadastrarInfoUseCase {
  constructor(infoRepository) {
    this.infoRepository = infoRepository;
  }

  execute(infoRequestDTO) {
    this.infoRepository.save(infoRequestDTO);
  }
}
