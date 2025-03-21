import './App.css';

function App() {
  const url = 'https://placehold.co/600x400';

  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;
