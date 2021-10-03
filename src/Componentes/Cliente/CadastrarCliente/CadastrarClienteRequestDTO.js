export default class CadastrarClienteRequestDTO {
  constructor(cliente) {
    this.nome = cliente.nome;
    this.email = cliente.email;
    this.senha = cliente.senha;
    this.telefone = cliente.telefone;
    this.endereco = cliente.endereco;
  }
}
