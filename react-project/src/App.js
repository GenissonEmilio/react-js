import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = "Eduarda";

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName name="Genisson" age="18" />
      <SayMyName name="João" age="25" />
      <SayMyName name={name} />
      <Pessoa name="Genisson" age="18" profession="Desenvolvedor" image="https://placehold.co/400x400" />
    </div>
  );
}

export default App;
