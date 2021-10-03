export default class InfoRepositoryPostgres {
  constructor(database) {
    this.database = database;
  }

  async save(info) {
    await this.database.insert('livraria', 'livroinfo', info);
  }

  async update(info) {
    const query = { livroId: info.livroId };
    await this.database.update('livraria', 'livroinfo', query, info);
  }

  async delete(info) {
    const query = { livroId: info.livroId };
    await this.database.delete('livraria', 'livroinfo', query);
  }
}
