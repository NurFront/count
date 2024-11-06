import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count +1)
  }

  return (
    <div className="App">
      <h1>Счёт: {count}</h1>
      <button onClick={counter}>+</button>
    </div>
  );
}

export default App;
