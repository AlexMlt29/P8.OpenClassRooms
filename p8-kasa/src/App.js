import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import APropos from './components/APropos';
import Error from './components/Error';
import FicheLogement from './components/FicheLogement';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/error" element={<Error />} />
        <Route path="/FicheLogement" element={<FicheLogement />} />
      </Routes>
    </Router>
  );
}

export default App;
