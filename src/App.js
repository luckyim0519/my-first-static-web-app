import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SpeechHome from './components/SpeechHome';
s
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
      <div>{data}</div>
      <Route path="/SpeechHome">
        <SpeechHome />
      </Route>
    </Router>
  );
}

export default App;