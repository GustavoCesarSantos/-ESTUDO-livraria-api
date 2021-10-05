export default class VendaRepositoryMemory {
  constructor() {
    this.vendas = [
      {
        venda_id: 1,
        valor: 100,
        data: new Date(),
        cliente_id: 1,
        livro_id: 1,
      },
      {
        venda_id: 99,
        valor: 100,
      },
    ];
  }

  save(venda) {
    this.vendas.push(venda);
  }

  one(venda) {
    return this.vendas.find((item) => item.venda_id === venda.venda_id);
  }

  many() {
    return this.vendas;
  }

  manyByCliente(venda) {
    const vendas = this.vendas.find(
      (item) => item.cliente_id === venda.cliente_id
    );
    return [vendas];
  }

  manyByLivro(venda) {
    const vendas = this.vendas.find((item) => item.livro_id === venda.livro_id);
    return [vendas];
  }
}
