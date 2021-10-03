import ConsultarAutorResponseDTO from './ConsultarAutorResponseDTO.js';

export default class ConsultarAutorUseCase {
  constructor(autorRepository) {
    this.autorRepository = autorRepository;
  }

  async execute(autorRequestDTO) {
    const autorDb = await this.autorRepository.one(autorRequestDTO);
    return new ConsultarAutorResponseDTO(autorDb);
  }
}
