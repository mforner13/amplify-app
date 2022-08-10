import cat from './assets/images/cat.jpeg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [fact, setFact] = useState('')
  
  const getCatFact = () => (
    fetch("https://meowfacts.herokuapp.com")
      .then(response => response.json())
      .then(json => setFact(json.data))
      .catch(error => console.log(error))
  )
  return (
    <div className="App">
      <header className="App-header">
        <img src={cat} alt="cat" />
        <br></br>
        <button onClick={getCatFact}>Get cat fact</button>
        <p>
          {fact}
        </p>
      </header>
    </div>
  );
}

export default App;
