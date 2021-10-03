export default class ConsultarClientesResponseDTO {
  constructor(cliente) {
    this.cliente_id = cliente.cliente_id;
    this.nome = cliente.nome;
    this.email = cliente.email;
    this.telefone = cliente.telefone;
    this.endereco = cliente.endereco;
  }
}
