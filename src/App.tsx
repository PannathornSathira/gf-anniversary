import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PetalBackground from './components/PetalBackground';
import NavDots from './components/NavDots';

import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import MapPage from './pages/MapPage';
import LovePage from './pages/LovePage';
import AlbumPage from './pages/AlbumPage';
import LetterPage from './pages/LetterPage';
import QuizPage from './pages/QuizPage';
import FinalePage from './pages/FinalePage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/love" element={<LovePage />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/letter" element={<LetterPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/finale" element={<FinalePage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PetalBackground />
      <NavDots />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
