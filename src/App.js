import React, { useState, useEffect } from 'react';
import { Routes } from './Routes';


function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>, <Routes />;
}

export default App;