import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnswerChoice from './components/AnswerChoices';
import HomePage from './HomePage';
import GameOver from './GameOver';
import Questions from './Questions';
import ScoreTracker from './components/ScoreTracker';
import Timer from './components/Timer';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Route for HomePage */}
          <Route path="/questions" element={<Questions />} />
          <Route path="/answer" element={<AnswerChoice />} />
          <Route path="/score" element={<ScoreTracker />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/gameover" element={<GameOver />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;