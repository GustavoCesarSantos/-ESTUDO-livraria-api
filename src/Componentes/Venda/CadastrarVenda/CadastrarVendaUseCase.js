export default class CadastrarVendaUseCase {
  constructor(livroRepository, vendaRepository) {
    this.livroRepository = livroRepository;
    this.vendaRepository = vendaRepository;
  }

  async execute(vendaRequestDTO) {
    const livro = await this.livroRepository.one(vendaRequestDTO);
    if (livro.estoque === 0) throw new Error('Livro fora de estoque.');
    vendaRequestDTO.valor = livro.valor;
    await this.vendaRepository.save(vendaRequestDTO);
    livro.estoque--;
    return await this.livroRepository.update(livro);
  }
}
