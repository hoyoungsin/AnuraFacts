import logo from './frog_1663170.png';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to AnuraFacts, your favotrite fact website for the order of Anura!
        </p>
        <p>This is currently a work-in-progress site</p>
        <p>{'Visit the '}
          <a
            className="App-link"
            href="https://github.com/hoyoungsin/AnuraFacts"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
