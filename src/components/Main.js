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
    tarefas: [
      'Fazer Café',
      'Beber Àgua',
      'Estudar'
    ]
  };

  //muda o estado 
  handleChange = (e) =>  {
    // console.log('teste');
    this.setState({
      novaTarefa: e.target.value
    });
    
  };

  //metodo que renderiza os elementos HTML
  render() {

    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa}></input>
          <div className="lista-de-tarefas">
            {/* {novaTarefa}l */}
          </div>
          <button type="submit">
            <FaPlus/>
          </button>
        </form>

        <ul className="tarefas">
            {tarefas.map(tarefa => (
              <li key={tarefa}>
                {tarefa}
                <div>
                  <FaEdit className="edit"/>
                  <FaWindowClose className="delete"/>
                </div>
              </li>
            ))}
        </ul> 

      </div>
    );
  }
}
