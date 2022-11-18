import './App.css';
import { Route, Switch } from 'react-router-dom';
import Form from './pages/Form';
import Emails from './pages/Emails';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={ (props) => (
          <Form
            { ...props }
          />) }
      />
      <Route path="/emails" component={ Emails } />
    </Switch>
  );
}

export default App;
