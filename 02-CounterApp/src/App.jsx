import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter {count}</h1>
      <button
        onClick={()=>{
          setCount(count+1)
        }}
      >Add Counter</button>
      <br />
      <button
        onClick={()=>{
          if(count>0){
            setCount(count-1)
          }
          else{
            setCount(0)
          }
        }}
      >Remove Counter</button>
      <p>{count}</p>
    </>
  )
}

export default App
