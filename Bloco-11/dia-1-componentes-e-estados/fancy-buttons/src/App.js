import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroAtual: 0
    }
  }
  soma = () => {  
    this.setState((estadoAtual, _props) => ({
      numeroAtual: estadoAtual.numeroAtual + 1,
      
    })) 
  }
  cor = (num) => {
    return num % 2 === 0 ? 'green' : 'red';
  }
  render() {
  return (
  <div className="pai">
    <button 
    onClick={this.soma} 
    style={{ backgroundColor: this.cor(this.soma())}}
    >
      {this.state.numeroAtual}
    </button>
  </div>
  )
  }
}

export default App;
