import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AnswerChoice from './components/AnswerChoices';
import HomePage from './components/HomePage';
import GameOver from './components/GameOver';
import Questions from './components/Questions';
import ScoreTracker from './components/ScoreTracker';
import Timer from './components/Timer';
import { Container} from '@mui/material';

function App() {
  return (
    <Router>
      <Container>
        <div>
          <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/questions" component={Questions} />
          <Route path="/answer" component={AnswerChoice} />
          <Route path="/score" component={ScoreTracker} />
          <Route path="/timer" component={Timer} />
          <Route path="/gameover" component={GameOver} />
        </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;