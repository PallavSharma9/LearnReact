import { useContext, useState, createContext } from 'react'


// now doing by context api

const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{
      count: count,
      setCount: setCount
    }}>
      <div style={{width: "100vw", height: "100vh", backgroundColor: "skyblue", display: "flex", justifyContent: "center" }}>
       <div style={{width: "500px",height: "200px", backgroundColor: "white"}}>
          <h1 style={{textAlign: "center", maringBottom: "10px", color: "black", fontSize: "20px"}}>Counter app</h1>
          <Buttons />
          <CountComponent />
        </div>
      </div>    
    </CountContext.Provider>
  )
}

function Buttons(){
    return <div style={{display: "flex", justifyContent: "space-between"}}>
      <Increase/>
      <Decrease/>
    </div>
}

function Increase(){
  const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }} style={{marginLeft: "20px",padding: "10px", backgroundColor: "black", border: "none", borderRadius: "6px"}}>
      Increase counter
    </button>
  </div>
}

function Decrease(){
  const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={()=>{
      setCount(count-1)
    }} style={{marginRight: "20px",padding: "10px", backgroundColor: "black", border: "none", borderRadius: "6px"}}>
      Decrease Counter
    </button>
  </div>
}
function CountComponent() {
  const {count} = useContext(CountContext)
  return  <div>
    <h1 style={{textAlign: "center", marginTop: "10px", color: "black"}}>{count}</h1>
  </div>
}

export default App
