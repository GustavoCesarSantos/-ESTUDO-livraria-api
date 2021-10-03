import ConsultarLivrosResponseDTO from './ConsultarLivrosResponseDTO.js';

export default class ConsultarLivrosUseCase {
  constructor(livroRepository) {
    this.livroRepository = livroRepository;
  }

  async execute() {
    const livrosDb = await this.livroRepository.many();
    const livros = [];
    for (const livro of livrosDb)
      livros.push(new ConsultarLivrosResponseDTO(livro));
    return livros;
  }
}
