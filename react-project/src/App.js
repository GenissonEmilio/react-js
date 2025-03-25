import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  const name = "Genisson";

  return (
    <div className="App">
      <HelloWorld />
      <List />
      <SayMyName name={name} />
      <Pessoa name="Genisson" age="18" profession="Desenvolvedor" image="https://placehold.co/400x400" />
    </div>
  );
}

export default App;
