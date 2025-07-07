import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hello/")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>React + Django App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
