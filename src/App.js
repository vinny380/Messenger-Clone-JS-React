import React, { useState }from 'react';
import './App.css';

function App() {
  const[input, setInput] = useState('');
  
  return (
    <div className="App">
      <h1>Vinny's Messenger</h1>

      <input/>
      <button>Send Message</button>
      {/*input field*/}
      {/*button*/}
      
      {/*messages*/}
    </div>
  );
}

export default App;
