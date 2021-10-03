import ConsultarLivroResponseDTO from './ConsultarLivroResponseDTO.js';

export default class ConsultarLivroUseCase {
  constructor(livroRepository) {
    this.livroRepository = livroRepository;
  }

  async execute(livroRequestDTO) {
    const livroDb = await this.livroRepository.one(livroRequestDTO);
    return new ConsultarLivroResponseDTO(livroDb);
  }
}
