import mongodb from 'mongodb';

export default class MongoDbDatabase {
  constructor() {
    this.instance;
    this.mongodb = new mongodb.MongoClient(
      `mongodb+srv://livrariaapi:livrariaapi@cluster0.ecscd.mongodb.net/livraria?retryWrites=true&w=majority`
    );
  }

  static getInstance() {
    if (!MongoDbDatabase.instance)
      MongoDbDatabase.instance = new MongoDbDatabase();
    return MongoDbDatabase.instance;
  }

  async insert(db, collection, data) {
    await this.mongodb.db(db).collection(collection).insertOne(data);
  }

  async update(db, collection, query, data) {
    await this.mongodb
      .db(db)
      .collection(collection)
      .updateOne(query, { $set: { ...data } });
  }

  async delete(db, collection, query) {
    await this.mongodb.db(db).collection(collection).deleteOne(query);
  }

  async one(db, collection, query) {
    await this.mongodb.db(db).collection(collection).findOne(query);
  }
}
