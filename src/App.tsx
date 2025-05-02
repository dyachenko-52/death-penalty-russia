
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import History from './pages/History';
import Law from './pages/Law';
import Arguments from './pages/Arguments';
import Cases from './pages/Cases';
import Opinions from './pages/Opinions';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/history" element={<History />} />
        <Route path="/law" element={<Law />} />
        <Route path="/arguments" element={<Arguments />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/opinions" element={<Opinions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
