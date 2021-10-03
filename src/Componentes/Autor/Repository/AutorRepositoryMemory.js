export default class AutorRepositoryMemory {
  constructor() {
    this.autores = [
      {
        autor_id: 99,
        nome: 'teste',
      },
    ];
  }

  save(autor) {
    this.autores.push(autor);
  }

  update(autor) {
    const index = this.autores.findIndex((item) => item.id === autor.autor_id);
    this.autores[index] = autor;
  }

  delete(autor) {
    const index = this.autores.findIndex((item) => item.id === autor.autor_id);
    this.autores.splice(index, 1);
  }

  many() {
    return this.autores;
  }

  one(autor) {
    return this.autores.find((item) => item.autor_id === autor.autor_id);
  }
}
