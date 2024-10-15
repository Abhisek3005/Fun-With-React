import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)   // 5 = default value & it can be anything. ye useState state ko change (means dom manipulation or jab ham iss project per counter ki value ko increase karne ke liye try kar rahe the wo nahin ho raha tha lekin background pe chal raha tha lekin hume frontend per nahin dikh raha tha) karne mein kaam aata hai {setCounter ek method hai jo counter variable ko controll karta hai}counter:- variable , setcounter :- method {We can change the method name}/ *}

  // let counter = 5 

  const addValue = () => {
    console.log("Value Added", counter);
    if (counter < 20) {
      setCounter(counter += 1)
    } else {
      setCounter(20)
    }
    // counter += 1 
    // setCounter(counter)
    // setCounter(counter+1)
    
  }
  const removeValue = () => {
    console.log('Value Substracted', counter);
    
    if (counter > 0) {
      setCounter( counter -= 1)
    } else {
      setCounter(0)
    }
    
    
  }

  return (
    <>
      <h1>Fun with React</h1>
      <h2>Counter Value: { counter}</h2>

      <button onClick={addValue}> Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value </button>
    </>
  )
}

export default App
