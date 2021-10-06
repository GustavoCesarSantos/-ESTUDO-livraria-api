export default class VendaRepositoryPostgres {
  constructor(database) {
    this.database = database;
  }

  async save(venda) {
    const query = `insert into vendas ( 
      valor, 
      data,  
      cliente_id,
      livro_id
    ) values ( 
      $1, 
      $2, 
      $3, 
      $4 
    )`;
    const parameters = [
      venda.valor,
      venda.data,
      venda.cliente_id,
      venda.livro_id,
    ];
    await this.database.none(query, parameters);
  }

  async one(venda) {
    const query = `select * from vendas where venda_id = $1`;
    const parameters = [venda.venda_id];
    return await this.database.one(query, parameters);
  }

  async many() {
    const query = `select * from vendas`;
    const parameters = [];
    return await this.database.many(query, parameters);
  }

  async manyByCliente(venda) {
    const query = `select * from vendas where cliente_id = $1`;
    const parameters = [venda.cliente_id];
    return await this.database.many(query, parameters);
  }

  async manyByLivro(venda) {
    const query = `select * from vendas where livro_id = $1`;
    const parameters = [venda.livro_id];
    return await this.database.many(query, parameters);
  }
}
