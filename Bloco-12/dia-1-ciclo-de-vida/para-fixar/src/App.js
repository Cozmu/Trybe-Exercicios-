import React from 'react';
import './App.css';
import Corpo from './components/Corpo'

class App extends React.Component{
  state = {
    api: [],
    loading: false,
  };

  async componentDidMount() {
    const endPoint = 'https://api.randomuser.me/';
    const data = await fetch(endPoint);
    const result = await data.json();
    console.log(result.results);
    this.setState((prev) => ({ 
      api: result.results, 
      loading: !prev.loading,
    }))
  }
  render() {
    const { api, loading } = this.state;
    return (
      <div>
        {loading ? <p>carregando...</p> : 
          api.map((elements) => (
            <Corpo { ...elements }/>
          ))}
      </div>
    )
  }
}

export default App;
