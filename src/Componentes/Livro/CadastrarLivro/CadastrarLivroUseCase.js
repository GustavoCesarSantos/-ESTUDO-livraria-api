export default class CadastrarLivroUseCase {
  constructor(livroRepository) {
    this.livroRepository = livroRepository;
  }

  execute(livroRequestDTO) {
    this.livroRepository.save(livroRequestDTO);
  }
}
