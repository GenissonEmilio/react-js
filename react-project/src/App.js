import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero={228} />
      <Evento numero={42} />
      <Form />
    </div>
  );
}

export default App;
