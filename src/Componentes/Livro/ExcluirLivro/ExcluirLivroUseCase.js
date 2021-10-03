export default class ExcluirLivroUseCase {
  constructor(livroRepository) {
    this.livroRepository = livroRepository;
  }

  execute(livroRequestDTO) {
    //REGRA DE NEGÓCIO: Se existir vendas ligadas ao livro, não deve ser possivel excluir o mesmo
    this.livroRepository.delete(livroRequestDTO);
  }
}
