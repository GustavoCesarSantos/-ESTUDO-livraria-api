export default class AutorRepositoryPostgres {
  constructor(database) {
    this.database = database;
  }

  async save(autor) {
    const query = `insert into autores ( 
      nome, 
      email, 
      telefone
    ) values ( 
      $1, 
      $2, 
      $3
    )`;
    const parameters = [autor.nome, autor.email, autor.telefone];
    await this.database.none(query, parameters);
  }

  async update(autor) {
    const query = `update autores set 
      nome = $1, 
      email = $2, 
      telefone = $3
    where autor_id = $4`;
    const parameters = [
      autor.nome,
      autor.email,
      autor.telefone,
      autor.autor_id,
    ];
    await this.database.none(query, parameters);
  }

  async delete(autor) {
    const query = `delete from autores where autor_id = $1`;
    const parameters = [autor.autor_id];
    await this.database.none(query, parameters);
  }

  async many() {
    const query = `select * from autores`;
    const parameters = [];
    return await this.database.many(query, parameters);
  }

  async one(autor) {
    const query = `select * from autores where autor_id = $1`;
    const parameters = [autor.autor_id];
    return await this.database.one(query, parameters);
  }
}
