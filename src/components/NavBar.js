import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/questions">Questions</Link>
        </li>
        <li>
          <Link to="/answer">Answer Choice</Link>
        </li>
        <li>
          <Link to="/score">Score Tracker</Link>
        </li>
        <li>
          <Link to="/timer">Timer</Link>
        </li>
        <li>
          <Link to="/gameover">Game Over</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;