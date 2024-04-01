import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import APropos from './page/APropos';
import Error from './page/Error';
import FicheLogement from './page/FicheLogement';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/FicheLogement" element={<FicheLogement />} />
      </Routes>
    </Router>
  );
}

export default App;
