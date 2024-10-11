import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import RickandMorty from './componentes/Rick_and_Morty';
import Main from './componentes/main';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/rym' element={<RickandMorty/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
