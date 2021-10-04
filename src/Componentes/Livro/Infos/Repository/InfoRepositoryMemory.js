export default class InfoRepositoryMemory {
  constructor() {
    this.infos = [
      {
        livroId: 1,
        descricao: 'teste',
        paginas: 300,
        editora: 'teste',
        avaliacoes: [
          {
            nome: 'teste',
            nota: 10,
            avaliacao: 'teste',
          },
        ],
      },
      {
        livroId: 99,
        descricao: 'teste',
      },
    ];
  }

  save(info) {
    this.infos.push(info);
  }

  update(info) {
    const index = this.infos.findIndex((item) => item.livroId === info.livroId);
    this.infos[index] = info;
  }

  delete(info) {
    const index = this.infos.findIndex((item) => item.livroId === info.livroId);
    this.infos.splice(index, 1);
  }

  one(info) {
    return this.infos.find((item) => item.livroId === info.livroId);
  }
}
