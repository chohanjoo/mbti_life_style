import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="root-page">
          <img src="/vite.svg" alt="App Logo" className="app-logo" />
          <h1>Welcome to the MBTI Test App</h1>
          <p>Discover your personality type with our fun and engaging test!</p>
          <button className="start-button" onClick={() => window.location.href='/question/1'}>Start the Test</button>
        </div>
      } />
      <Route path="/question/:id" element={<QuestionPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
