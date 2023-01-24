import React from 'react'
import { useNavigate } from 'react-router-dom'
import videoHome from './videoHome.mp4'


export default function Home() {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('./login')
  }
  const handleClick2=()=>{ navigate("./sign up")}
  return (
      <div className="home">
        
      <div className="overlay">
        <video src={videoHome} autoPlay loop muted />
        <div className="content">
          <h1>Welcome</h1>
          <p>F1</p>

            <button onClick={handleClick2} className="button-17" style={{ backgroundColor: "orange" }}>
              Register
            </button>
         
          <button onClick={handleClick} className="button-17" style={{ width: "200px" }}>
            Login
          </button>
        </div>
      </div>
      
    </div>
    
  )
}
