import { useState } from 'react';
import counter  from './components/counter';
import decrementHandler from './components/decrement';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [showH2, setShowH2] = useState(false);
    if (count == 10){
      setShowH2(true);
      setCount(0);
    }
    else{

    }
  
  return (
    <>
      <div>{count}
      <button onClick={()=> setCount(counter(count))}>Increment</button>
      <button onClick={()=> setCount(0)}>Clear</button>
      <button onClick={()=> setCount(decrementHandler(count))}>Decrement</button>
      {showH2 && <h2>Counter is 10, you start again from 0!</h2>}
      </div>
    </>
  )
}

export default App
