import express from 'express';

export default class Express {
  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  listen(porta) {
    this.app.listen(porta, console.log(`Servidor rodando na porta: ${porta}`));
  }
}
