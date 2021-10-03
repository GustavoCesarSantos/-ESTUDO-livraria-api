export default class CadastrarAutorUseCase {
  constructor(autorRepository) {
    this.autorRepository = autorRepository;
  }

  execute(autorRequestDTO) {
    this.autorRepository.save(autorRequestDTO);
  }
}
