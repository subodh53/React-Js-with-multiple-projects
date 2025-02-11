import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Subodh",
    age: 21
  }

  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-7'>Tailwind Test</h1>
    < Card name="Subodh" desc="Hello I am Subodh"/>
    < Card name="Amar" desc="Hello I am Amar"/>
    < Card />
    </>
  )
}

export default App
