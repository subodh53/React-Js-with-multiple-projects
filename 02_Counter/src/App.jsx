import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(0)
  
// let counter = 15
const addValue = () => {
  // counter = counter + 1;
  console.log("Add Value clicked")
  if(counter < 20){
    setCounter(counter + 1);
  }else if(counter === 20){
    setCounter(20);
    alert("Counter can't be more than 20");
  }
  
}

const removeValue = () => {
  // counter = counter - 1;
  console.log("Remove Value clicked")
  if(counter > 0){
    setCounter(counter - 1);
  } else if(counter === 0){
    setCounter(0);
    alert("Counter can't be less than 0");
  }
  
}

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
