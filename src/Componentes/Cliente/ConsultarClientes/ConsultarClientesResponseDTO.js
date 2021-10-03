export default class ConsultarClientesResponseDTO {
  constructor(cliente) {
    this.nome = cliente.nome;
    this.email = cliente.email;
    this.telefone = cliente.telefone;
    this.endereco = cliente.endereco;
  }
}
