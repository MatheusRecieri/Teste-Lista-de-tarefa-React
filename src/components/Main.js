import React, {Component} from "react";

import './Main.css';

//form
import { FaPlus } from 'react-icons/fa';

import { FaEdit, FaWindowClose } from 'react-icons/fa';
//classe main que herda Component e vai ser exportada
export default class Main extends Component {

  // constructor(props) {
  //   super(props); //chama o construtor da classe que está sendo herdada

  //   this.state = {
  //     novaTarefa: '',
  //   };
    
  //   //garante que o this referencia o metdo correto
  //   this.mudaInput = this.mudaInput.bind(this);
  // }
  
  // Usando class fields
  state = {
    novaTarefa: '',
    tarefas: [],
    inde: -1
  };

  //muda o estado (evita o evento de recarga da pagina)
  handleChange = (e) =>  {
    // console.log('teste');
    this.setState({
      novaTarefa: e.target.value
    });
    
  };

  //fução que captura o que vai ser digitado
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } =this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1 ) return;

    const novasTarevas = [...tarefas];

    if(index === -1) {
      this.setState({
        tarefas: [...novasTarevas, novaTarefa],
        novaTarefa: ''
      });
    } else {
      novasTarevas[index] = novaTarefa;;

      this.setState({
        tarefas: [...novasTarevas],
        index: -1
      });
    }

   

  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarevas = [...tarefas];
    novasTarevas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarevas]
    });

  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index]
    }); 

  };

  //metodo que renderiza os elementos HTML
  render() {

    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa}></input>
          <div className="lista-de-tarefas">
          </div>
          <button type="submit">
            <FaPlus/>
          </button>
        </form>

        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
              <li key={tarefa}>
                {tarefa}
                <span>
                  <FaEdit onClick={ e => this.handleEdit(e, index)} className="edit"/>
                  <FaWindowClose onClick={ e => this.handleDelete(e, index)} className="delete"/>
                </span>
              </li>
            ))}
        </ul> 

      </div>
    );
  }
}
