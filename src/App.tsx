import { useState } from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState<string>('');

  const getMessage = async () => {
    const response = await fetch('/.netlify/functions/hello');
    const data = await response.json();
    console.log(data);
    setMessage(data.message);
  }
  const getChuck = async () => {
    const response = await fetch('/.netlify/functions/chuck');
    const { joke } = await response.json();
    setMessage(joke.value);
    console.log(joke.value);
  }


  return (
    <div className="App">
      <p><button onClick={getMessage}>Get Message!</button></p>
      <p>{message}</p>
      <p><button onClick={getChuck}>Get Chuck!</button></p>
    </div>
  )
}

export default App