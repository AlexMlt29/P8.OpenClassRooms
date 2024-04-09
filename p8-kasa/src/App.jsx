import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import Error from './page/Error';
import About from './page/About';
import HousingSheet from './page/HousingSheet';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/:id" element={<HousingSheet />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
