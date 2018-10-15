import React from 'react';
import Input from './components/Input/Input';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      marca: '',
      quantidade: ''      
    }
  }

  atualizarInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    
  }
  enviarDados = () => {
    let dados = {
      nome: this.state.nome,
      marca: this.state.marca,
      quantidade: this.state.quantidade
    }
    
    fetch( 'http://localhost:5000/produto/novo' , {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados)
    }).then().then().catch();

  }

  componentDidMount () {
    fetch('http://localhost:5000/produtos').then(
      resposta => resposta.json()
    ).then(
      dados => {
        let lista = []
        for (let dados of lista){
          lista.push(dados);
        }
        this.setState({
          registros: lista
        });
      }
    ).catch();
  }

  render() {
    console.table(this.state);
    return (
      <div>
      <h1>Lista de Compras</h1>
      <section id="novo">
      <h3>Novo produto:</h3>
      <div>
      <Input valor={this.state.nome} atualizar={this.atualizarInput} name = 'nome' type="text" placeholder="Nome do produto"/>
      <Input valor={this.state.marca} atualizar={this.atualizarInput} name = 'marca' type="text" placeholder="Marca (opcional)"/>
      <Input valor={this.state.quantidade} atualizar={this.atualizarInput} name = 'quantidade' type="number" placeholder="Quantidade"/>
      <button onClick={this.enviarDados}>Cadastrar</button>
      </div>
      </section>
      <section id="lista">
      </section>
      </div>
    )};
  }
  
  export default App;