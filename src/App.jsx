import {useState} from 'react'
import './App.css'


function App() {

  let  [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1); 
    } 
  }
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1); 
    } 
  }

  return (
    <>
      <h1>Simple Counter App</h1>
      <h2>Counter value is: {counter} </h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>

    </>
  )
}

export default App
