import React, {Component} from "react";
import './Main.css';
import Form from './Form';
import Tarefas from './Tarefas';
//classe main que herda Component e vai ser exportada
export default class Main extends Component {

  // Usando class fields
  state = {
    novaTarefa: '',
    tarefas: [],
    inde: -1
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if(tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

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

        <Form
         handleSubmit={this.handleSubmit}
         handleChange={this.handleChange}
         novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
        

      </div>
    );
  }
}
