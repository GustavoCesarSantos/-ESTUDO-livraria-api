export default class CadastrarVendaUseCase {
  constructor(livroRepository, vendaRepository) {
    this.livroRepository = livroRepository;
    this.vendaRepository = vendaRepository;
  }

  execute(vendaRequestDTO) {
    const livro = this.livroRepository.one(vendaRequestDTO);
    if (livro.estoque === 0) throw new Error('Livro fora de estoque.');
    vendaRequestDTO.valor = livro.valor;
    this.vendaRepository.save(vendaRequestDTO);
    livro.estoque--;
    return this.livroRepository.update(livro);
  }
}
