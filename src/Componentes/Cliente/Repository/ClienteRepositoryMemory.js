export default class ClienteRepositoryMemory {
  constructor() {
    this.clientes = [
      {
        cliente_id: 99,
        nome: 'teste',
      },
    ];
  }

  save(cliente) {
    this.clientes.push(cliente);
  }

  update(cliente) {
    const index = this.clientes.findIndex(
      (item) => item.id === cliente.cliente_id
    );
    this.clientes[index] = cliente;
  }

  delete(cliente) {
    const index = this.clientes.findIndex(
      (item) => item.id === cliente.cliente_id
    );
    this.clientes.splice(index, 1);
  }

  many() {
    return this.clientes;
  }

  one(cliente) {
    return this.clientes.find((item) => item.cliente_id === cliente.cliente_id);
  }
}
