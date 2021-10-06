import CadastrarClienteController from '../../Componentes/Cliente/CadastrarCliente/CadastrarClienteController.js';
import AtualizarClienteController from '../../Componentes/Cliente/AtualizarCliente/AtualizarClienteController.js';
import ExcluirClienteController from '../../Componentes/Cliente/ExcluirCliente/ExcluirClienteController.js';
import ConsultarClientesController from '../../Componentes/Cliente/ConsultarClientes/ConsultarClientesController.js';
import ConsultarClienteController from '../../Componentes/Cliente/ConsultarCliente/ConsultarClienteController.js';

import CadastrarAutorController from '../../Componentes/Autor/CadastrarAutor/CadastrarAutorController.js';
import AtualizarAutorController from '../../Componentes/Autor/AtualizarAutor/AtualizarAutorController.js';
import ExcluirAutorController from '../../Componentes/Autor/ExcluirAutor/ExcluirAutorController.js';
import ConsultarAutoresController from '../../Componentes/Autor/ConsultarAutores/ConsultarAutoresController.js';
import ConsultarAutorController from '../../Componentes/Autor/ConsultarAutor/ConsultarAutorController.js';

import CadastrarLivroController from '../../Componentes/Livro/CadastrarLivro/CadastrarLivroController.js';
import AtualizarLivroController from '../../Componentes/Livro/AtualizarLivro/AtualizarLivroController.js';
import ExcluirLivroController from '../../Componentes/Livro/ExcluirLivro/ExcluirLivroController.js';
import ConsultarLivroController from '../../Componentes/Livro/ConsultarLivro/ConsultarLivroController.js';
import ConsultarLivrosController from '../../Componentes/Livro/ConsultarLivros/ConsultarLivrosController.js';

import CadastrarInfoController from '../../Componentes/Livro/Info/CadastrarInfo/CadastrarInfoController.js';
import AtualizarInfoController from '../../Componentes/Livro/Info/AtualizarInfo/AtualizarInfoController.js';
import ExcluirInfoController from '../../Componentes/Livro/Info/ExcluirInfo/ExcluirInfoController.js';

import CadastrarAvaliacaoController from '../../Componentes/Livro/Info/Avaliacao/CadastrarAvaliacao/CadastrarAvaliacaoController.js';
import ExcluirAvaliacaoController from '../../Componentes/Livro/Info/Avaliacao/ExcluirAvaliacao/ExcluirAvaliacaoController.js';

const cadastrarClienteController = new CadastrarClienteController();
const atualizarClienteController = new AtualizarClienteController();
const excluirClienteController = new ExcluirClienteController();
const consultarClientesController = new ConsultarClientesController();
const consultarClienteController = new ConsultarClienteController();

const cadastrarAutorController = new CadastrarAutorController();
const atualizarAutorController = new AtualizarAutorController();
const excluirAutorController = new ExcluirAutorController();
const consultarAutoresController = new ConsultarAutoresController();
const consultarAutorController = new ConsultarAutorController();

const cadastrarLivroController = new CadastrarLivroController();
const atualizarLivroController = new AtualizarLivroController();
const excluirLivroController = new ExcluirLivroController();
const consultarLivroController = new ConsultarLivroController();
const consultarLivrosController = new ConsultarLivrosController();

const cadastrarInfoController = new CadastrarInfoController();
const atualizarInfoController = new AtualizarInfoController();
const excluirInfoController = new ExcluirInfoController();

const cadastrarAvaliacaoController = new CadastrarAvaliacaoController();
const excluirAvaliacaoController = new ExcluirAvaliacaoController();

export default class Routes {
  constructor(http) {
    this.http = http;
  }

  build() {
    this.http.post('/cliente', cadastrarClienteController.handler);
    this.http.put('/cliente', atualizarClienteController.handler);
    this.http.delete('/cliente/:clienteId', excluirClienteController.handler);
    this.http.get('/cliente', consultarClientesController.handler);
    this.http.get('/cliente/:clienteId', consultarClienteController.handler);

    this.http.post('/autor', cadastrarAutorController.handler);
    this.http.put('/autor', atualizarAutorController.handler);
    this.http.delete('/autor/:autorId', excluirAutorController.handler);
    this.http.get('/autor', consultarAutoresController.handler);
    this.http.get('/autor/:autorId', consultarAutorController.handler);

    this.http.post('/livro', cadastrarLivroController.handler);
    this.http.put('/livro', atualizarLivroController.handler);
    this.http.delete('/livro/:livroId', excluirLivroController.handler);
    this.http.get('/livro/:livroId', consultarLivroController.handler);
    this.http.get('/livro', consultarLivrosController.handler);

    this.http.post('/livro/info', cadastrarInfoController.handler);
    this.http.put('/livro/info', atualizarInfoController.handler);
    this.http.delete('/livro/info/:livroId', excluirInfoController.handler);

    this.http.post(
      '/livro/:livroId/avaliacao',
      cadastrarAvaliacaoController.handler
    );
    this.http.delete(
      '/livro/:livroId/avaliacao/:index',
      excluirAvaliacaoController.handler
    );
  }
}
