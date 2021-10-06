export default class LivroRepositoryPostgres {
  constructor(database) {
    this.database = database;
  }

  async save(livro) {
    const query = `insert into livros ( 
      nome, 
      valor,  
      estoque,
      autor_id
    ) values ( 
      $1, 
      $2, 
      $3, 
      $4
    )`;
    const parameters = [livro.nome, livro.valor, livro.estoque, livro.autor_id];
    await this.database.none(query, parameters);
  }

  async update(livro) {
    const query = `update livros set 
      valor = $1
    where livro_id = $2 `;
    const parameters = [livro.valor, livro.livro_id];
    await this.database.none(query, parameters);
  }

  async delete(livro) {
    const query = `delete from livros where livro_id = $1`;
    const parameters = [livro.livro_id];
    await this.database.none(query, parameters);
  }

  async many() {
    const query = `select * from livros`;
    const parameters = [];
    return await this.database.many(query, parameters);
  }

  async manyByAutor(livro) {
    const query = `select * from livros where autor_id = $1`;
    const parameters = [livro.autor_id];
    return await this.database.many(query, parameters);
  }

  async one(livro) {
    const query = `select * from livros where livro_id = $1`;
    const parameters = [livro.livro_id];
    return await this.database.one(query, parameters);
  }
}
