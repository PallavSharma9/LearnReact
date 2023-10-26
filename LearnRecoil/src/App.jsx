// import { useContext, useState, createContext } from 'react'

import {RecoilRoot, useSetRecoilState, useRecoilValue, atom } from 'recoil'


// now doing by recoil


function App() {


  return (
  <RecoilRoot>
      <div style={{width: "100vw", height: "100vh", backgroundColor: "skyblue", display: "flex", justifyContent: "center" }}>
       <div style={{width: "500px",height: "200px", backgroundColor: "white"}}>
          <h1 style={{textAlign: "center", maringBottom: "10px", color: "black", fontSize: "20px"}}>Counter app</h1>
          <Buttons />
          <CountComponent />
        </div>
      </div>    
    </RecoilRoot>
  )
}

function Buttons(){
    return <div style={{display: "flex", justifyContent: "space-between"}}>
      <Increase/>
      <Decrease/>
    </div>
}

function Increase(){
  const setCount = useSetRecoilState(countState)
  return <div>
    <button onClick={()=>{
      setCount(existingCount=> existingCount+1)
    }} style={{marginLeft: "20px",padding: "10px", backgroundColor: "black", border: "none", borderRadius: "6px"}}>
      Increase counter
    </button>
  </div>
}

function Decrease(){
  const setCount = useSetRecoilState(countState)
  return <div>
    <button onClick={()=>{
      setCount(existingCount => existingCount-1)
    }} style={{marginRight: "20px",padding: "10px", backgroundColor: "black", border: "none", borderRadius: "6px"}}>
      Decrease Counter
    </button>
  </div>
}
function CountComponent() {
  const count = useRecoilValue(countState)
  return  <div>
    <h1 style={{textAlign: "center", marginTop: "10px", color: "black"}}>{count}</h1>
  </div>
}

const countState = atom({
  key: 'countState',
  default: 0
})

export default App
