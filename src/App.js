// src/App.js
import React from 'react';
import WordDefinition from './components/WordDefinition';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WordDefinition />
      </header>
    </div>
  );
}

export default App;