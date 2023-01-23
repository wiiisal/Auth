import React from 'react'
import videoHome from './videoHome.mp4'


export default function Home() {
  return (
      <div className="home">
      <div className="overlay">
        <video src={videoHome} autoPlay loop muted />
        <div className="content">
          <h1>Welcome</h1>
          <p>Bijouterie</p>

            <button className="button-17" style={{ backgroundColor: "orange" }}>
              Login
            </button>
         
          <button className="button-17" style={{ width: "200px" }}>
            Register
          </button>
        </div>
      </div>
    </div>
    
  )
}
