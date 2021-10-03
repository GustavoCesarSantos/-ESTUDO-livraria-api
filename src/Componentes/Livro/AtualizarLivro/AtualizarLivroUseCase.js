export default class AtualizarLivroUseCase {
  constructor(livroRepository) {
    this.livroRepository = livroRepository;
  }

  execute(livroRequestDTO) {
    this.livroRepository.update(livroRequestDTO);
  }
}
