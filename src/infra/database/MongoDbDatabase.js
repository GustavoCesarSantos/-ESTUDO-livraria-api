import { MongoClient } from 'mongodb';

export default class MongoDbDatabase {
  constructor() {
    this.instance;
    this.mongodb = new MongoClient(process.env.MONGO_URL);
  }

  static getInstance() {
    if (!MongoDbDatabase.instance)
      MongoDbDatabase.instance = new MongoDbDatabase();
    return MongoDbDatabase.instance;
  }

  async insert(db, collection, data) {
    try {
      await this.mongodb.connect();
      await this.mongodb.db(db).collection(collection).insertOne(data);
    } finally {
      await this.mongodb.close();
    }
  }

  async update(db, collection, query, data) {
    try {
      await this.mongodb.connect();
      await this.mongodb
        .db(db)
        .collection(collection)
        .updateOne(query, { $set: { ...data } });
    } finally {
      await this.mongodb.close();
    }
  }

  async delete(db, collection, query) {
    try {
      await this.mongodb.connect();
      await this.mongodb.db(db).collection(collection).deleteOne(query);
    } finally {
      await this.mongodb.close();
    }
  }

  async one(db, collection, query) {
    try {
      await this.mongodb.connect();
      return await this.mongodb
        .db(db)
        .collection(collection)
        .findOne({ $and: [query] });
    } finally {
      await this.mongodb.close();
    }
  }
}
