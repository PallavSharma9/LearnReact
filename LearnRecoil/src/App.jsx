import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width: "100vw", height: "100vh", backgroundColor: "skyblue", display: "flex", justifyContent: "center" }}>
      <div style={{width: "500px",height: "200px", backgroundColor: "white"}}>
        <h1 style={{textAlign: "center", maringBottom: "10px", color: "black", fontSize: "20px"}}>Counter app</h1>
        <Buttons count={count} setCount={setCount} />
        <CountComponent count={count} />
      </div>
    </div>

  )
}

function Buttons({count, setCount}){
    return <div style={{display: "flex", justifyContent: "space-between"}}>
      <Increase count={count} setCount={setCount} />
      <Decrease  count={count} setCount={setCount} />
    </div>
}

function Increase({count, setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }} style={{marginLeft: "20px",padding: "10px", backgroundColor: "black", border: "none", borderRadius: "6px"}}>
      Increase counter
    </button>
  </div>
}

function Decrease({count, setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count-1)
    }} style={{marginRight: "20px",padding: "10px", backgroundColor: "black", border: "none", borderRadius: "6px"}}>
      Decrease Counter
    </button>
  </div>
}
function CountComponent({count}) {
  return  <div>
    <h1 style={{textAlign: "center", marginTop: "10px", color: "black"}}>{count}</h1>
  </div>
}

export default App
