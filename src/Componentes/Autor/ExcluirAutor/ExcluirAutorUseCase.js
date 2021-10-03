export default class ExcluirAutorUseCase {
  constructor(autorRepository) {
    this.autorRepository = autorRepository;
  }

  execute(autorRequestDTO) {
    //REGRA DE NEGÓCIO: Se existir livros ligadas ao autor, não deve ser possível excluir o mesmo
    this.autorRepository.delete(autorRequestDTO);
  }
}
