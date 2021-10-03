export default class ClienteRepositoryPostgres {
  constructor(database) {
    this.database = database;
  }

  async save(cliente) {
    const query = `insert into clientes ( 
      nome, 
      email, 
      senha, 
      telefone, 
      endereco
    ) values ( 
      $1, 
      $2, 
      $3, 
      $4, 
      $5 
    )`;
    const parameters = [
      cliente.nome,
      cliente.email,
      cliente.senha,
      cliente.telefone,
      cliente.endereco,
    ];
    await this.database.none(query, parameters);
  }

  async update(cliente) {
    const query = `update clientes set 
      nome = $1, 
      email = $2, 
      senha = $3, 
      telefone = $4, 
      endereco = $5
    where cliente_id = $6 `;
    const parameters = [
      cliente.nome,
      cliente.email,
      cliente.senha,
      cliente.telefone,
      cliente.endereco,
      cliente.cliente_id,
    ];
    await this.database.none(query, parameters);
  }

  async delete(cliente) {
    const query = `delete from clientes where cliente_id = $1`;
    const parameters = [cliente.cliente_id];
    await this.database.none(query, parameters);
  }

  async many() {
    const query = `select * from clientes`;
    const parameters = [];
    return await this.database.many(query, parameters);
  }

  async one(cliente) {
    const query = `select * from clientes where cliente_id = $1`;
    const parameters = [cliente.cliente_id];
    return await this.database.one(query, parameters);
  }
}
