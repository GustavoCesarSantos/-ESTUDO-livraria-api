export default class LivroRepositoryMemory {
  constructor() {
    this.livros = [
      {
        livro_id: 1,
        autor_id: 99,
      },
      {
        livro_id: 99,
        nome: 'teste',
      },
    ];
  }

  save(livro) {
    this.livros.push(livro);
  }

  update(livro) {
    const index = this.livros.findIndex(
      (item) => item.livro_id === livro.livro_id
    );
    this.livros[index] = livro;
  }

  delete(livro) {
    const index = this.livros.findIndex(
      (item) => item.livro_id === livro.livro_id
    );
    this.livros.splice(index, 1);
  }

  many() {
    return this.livros;
  }

  manyByAutor(livro) {
    const livros = this.livros.find((item) => item.autor_id === livro.autor_id);
    return [livros];
  }

  one(livro) {
    return this.livros.find((item) => item.livro_id === livro.livro_id);
  }
}
