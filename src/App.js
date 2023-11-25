import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SpeechHome from './components/SpeechHome';

function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <Router>
      <div>
        <h1>Hello, this is our AI classroom</h1>
        <Link to="/SpeechHome">SpeechHome</Link>
      </div>
      <div>
        {data}
      </div>
      <Route path="SpeechHome">
        <SpeechHome />
      </Route>
    </Router>
  );
}

export default App;