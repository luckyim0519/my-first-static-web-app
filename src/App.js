import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SpeechHome from './components/SpeechHome';

function App() {
  const [data, setData] = useState('');

  return (
    <Router>
      <div>
        <h1>Hello, this is our AI classroom</h1>
        <Link to="/SpeechHome">SpeechHome</Link>
      </div>
      <div>Hello?</div>
      <Route path="SpeechHome">
        <SpeechHome />
      </Route>
    </Router>
  );
}

export default App;