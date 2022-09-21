import './App.css';
import Image from './Image';
import gato from './gato.jpg'

function App() {
  return (
    <Image source={gato} alternativeText='Cute cat staring' />
  );
}

export default App;
