import { useState } from 'react'                                    // importing useState hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(15)                              // useState returns an array of two elements
                                                                    // using array destructuring, we assign these two array elements
                                                                    // first element is the current state; during the first render it will match the initial state we have passed in the argument
                                                                    // second element is the set function that lets us update the state and trigger re-render

  const increase = () => {
    if(count < 20) setCount(count+1)                                // Value passed in the argument of set function overwrites the current value of state
  }
  const decrease = () => {
    if(count > 0) setCount(count-1)
  }


  return (

    <>
      <h1>Counter</h1>
      <h2 id = "display">Current Value : {count}</h2>
      <button onClick = {increase}>Increase</button>
      <br />
      <button onClick = {decrease}>Decrease</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
