// import pgp from 'pg-promise';
import pgp from 'pg-promise';

export default class PgPromiseDatabase {
  constructor() {
    this.instance;
    this.pgp = pgp()({
      host: 'localhost',
      port: 5432,
      database: 'livraria',
      user: 'postgres',
      password: 'livrariaapi',
      max: 20,
      idleTimeoutMillis: 1000,
    });
  }

  static getInstance() {
    if (!PgPromiseDatabase.instance)
      PgPromiseDatabase.instance = new PgPromiseDatabase();
    return PgPromiseDatabase.instance;
  }

  many(query, parameters) {
    return this.pgp.query(query, parameters);
  }

  one(query, parameters) {
    return this.pgp.oneOrNone(query, parameters);
  }

  none(query, parameters) {
    return this.pgp.none(query, parameters);
  }
}
