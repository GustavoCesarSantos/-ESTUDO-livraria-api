import ConsultarLivrosPorAutorResponseDTO from './ConsultarLivrosPorAutorResponseDTO.js';

export default class ConsultarLivrosPorAutorUseCase {
  constructor(livroRepository) {
    this.livroRepository = livroRepository;
  }

  async execute(livroPorAutorRequestDTO) {
    const livrosPorAutorDb = await this.livroRepository.manyByAutor(
      livroPorAutorRequestDTO
    );
    const livros = [];
    for (const livro of livrosPorAutorDb) {
      livros.push(new ConsultarLivrosPorAutorResponseDTO(livro));
    }
    return livros;
  }
}
