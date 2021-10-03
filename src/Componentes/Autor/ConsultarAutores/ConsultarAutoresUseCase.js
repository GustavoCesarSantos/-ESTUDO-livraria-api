import ConsultarAutoresResponseDTO from './ConsultarAutoresResponseDTO.js';

export default class ConsultarAutoresUseCase {
  constructor(autorRepository) {
    this.autorRepository = autorRepository;
  }

  async execute() {
    const autoresDb = await this.autorRepository.many();
    const autores = [];
    for (const autor of autoresDb)
      autores.push(new ConsultarAutoresResponseDTO(autor));
    return autores;
  }
}
