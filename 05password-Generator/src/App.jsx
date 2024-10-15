import { useState, useCallback ,useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [Length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(Password)
  },[Password])


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVVWXYZabcdefghijklmnopqrstuvwxyz "

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+:?><"  

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
     
    }
    setPassword(pass) 
  }, [Length, numberAllowed, charAllowed, setPassword])
  
  useEffect(() => {
    passwordGenerator()
    
  } , [Length,numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  my-8 bg-gray-800  text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input type='text'
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
          readOnly
          ref={passwordRef}
          />
        <button onClick={ copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> Copy</button>
      
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range'
              min={6}
              max={100}
              value={Length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: { Length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
              setnumberAllowed((prev) => !prev);
              }}
            ></input>
            <label htmlFor='numberInput'> Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
              setcharAllowed((prev) => !prev);
              }}
            ></input>
            <label htmlFor='characterInput'> Characters</label>
        </div>
      </div>
      </div>
    
  ) 
}

export default App
