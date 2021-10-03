export default class AtualizarAutorUseCase {
  constructor(autorRepository) {
    this.autorRepository = autorRepository;
  }

  execute(autorRequestDTO) {
    this.autorRepository.update(autorRequestDTO);
  }
}
