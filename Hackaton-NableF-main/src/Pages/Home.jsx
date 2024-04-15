import React from 'react'
import Navbar from '../Components/Navbar';
import "./Home.css"



const Home = () => {
  return (
    <div className="body-margin">
      <Navbar />
      <div className="home">
          <div className="home-container">
            <div className="home-desc">
              <h1>Safety Hub</h1>
              <p>SafetyHub is your trusted online resource for real-time information on accidents and assaults, empowering you to make informed decisions for your safety and the well-being of your community.</p>
          </div>
          <div className="home-info">
            <div className="stay-informed">
              <h1>Stay</h1> 
              <img src="/images/verfiedmark.png"></img>
              <h1> informed,</h1>
            </div>
            <div className="stay-informed">
              <h1>Stay safe!</h1> 
              <img style = {{marginLeft:"10px"}} src="/images/heart.png"></img>
            </div>
          </div>
        </div>
        <div>
          <img style = {{width:"500px", height:"auto"}} src="/images/puzzlegirlunion.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Home