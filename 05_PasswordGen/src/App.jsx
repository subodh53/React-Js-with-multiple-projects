import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [lenght, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [chars, setChars] = useState(false) 
  const [password, setPassword] = useState('')

  // useRef Hook
  const passwordRef = useRef(null);



  const passGen = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(num) str += "0123456789"
    if(chars) str += "!@#$%^&*()_+"
    for(let i = 1; i <= lenght; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[lenght, num, chars, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passGen()
  }, [lenght, num, chars, passGen])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 mb-10 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow mb-10 bg-white rounded-lg overflow-hidden'>
            <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
            <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input type="range" min={8} max={100} value={lenght} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
              <label>Length: {lenght}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={num} id="numIp" onChange={() => {
                setNum((prev) => !prev)
              }} />
              <label htmlFor="numIp">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={chars} id="charIp" onChange={() => {
                setChars((prev) => !prev)
              }} />
              <label htmlFor="charIp">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
