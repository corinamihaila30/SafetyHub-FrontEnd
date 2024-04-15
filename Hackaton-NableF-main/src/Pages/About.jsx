import React from 'react'
import Navbar from '../Components/Navbar'
import "./About.css"

const About = () => {
    console.log(localStorage.getItem("token"));
  return (
    <div className="body">
      <Navbar/>
      <div className="container">
      <div>
      <h1>About us ...</h1>
      <p>SafetyHub was born from the vision of two informatic economics students who are passionate about creating smarter cities where safety is paramount. Their expertise and dedication led to the development of this platform, empowering individuals and communities with real-time information for informed decision-making. At Safety Hub, our mission is to make the world safer through innovation.</p>
      <img src="/images/peoplewithpuzzle.png"></img>
      </div>
      </div>
    </div>
  )
}

export default About