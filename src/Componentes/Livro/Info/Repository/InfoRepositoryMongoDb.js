export default class InfoRepositoryMongoDb {
  constructor(database) {
    this.database = database;
  }

  async save(info) {
    await this.database.insert('livraria', 'livroInfo', info);
  }

  async update(info) {
    const query = { livroId: info.livro_id };
    await this.database.update('livraria', 'livroInfo', query, info);
  }

  async delete(info) {
    const query = { livroId: info.livro_id };
    await this.database.delete('livraria', 'livroInfo', query);
  }

  async one(info) {
    const query = { livroId: info.livro_id };
    return await this.database.one('livraria', 'livroInfo', query);
  }
}
