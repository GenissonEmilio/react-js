import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';

function App() {

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/empresa' element={<Empresa />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
