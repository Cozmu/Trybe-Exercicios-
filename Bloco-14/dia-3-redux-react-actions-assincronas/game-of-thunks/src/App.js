import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import ChosenCharacter from './pages/ChosenCharacter';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/ChosenCharacter" component={ ChosenCharacter } />
      </Switch>
    );
  }
}

export default App;
