import { useEffect, useState } from 'react';
import './App.css';
import { Todo } from './Components/Todo';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:4200/')
      const output = await res.json()
      setData(output)
      console.log(output,'data')
    })();

  }, [])

  
  
  return (
    <div className="App">
      <Todo data = {data}/>
    </div>
  );
}

export default App;
