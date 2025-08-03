// src/App.js
import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayersComponent from './IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>CricketApp</h1>
      <button onClick={() => setFlag(!flag)}>
        Toggle Component (Current: {flag ? 'ListofPlayers' : 'IndianPlayers'})
      </button>
      <hr />
      {flag ? <ListofPlayers /> : <IndianPlayersComponent />}
    </div>
  );
}

export default App;
