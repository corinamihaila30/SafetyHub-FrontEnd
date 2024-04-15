import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar';
import "./Profile.css"
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Profile = () => {
    const [data, setData] = useState({
        fullName: "",
        trustScore: "",
        city: "",

    });
    const updateProfile = async () => {
      try {
        const response = await axios.put('http://localhost:8080/api/profile', {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  const authToken = localStorage.getItem("token");  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/profile', {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [authToken]);

    return (
      <>
      <Navbar></Navbar>
      <div className="profile-container" style = {{width:"100%"}}>
        <div className="profile-settings-container">
        <h2 style={{cursor:"pointer"}}>Settings</h2>
        <p style={{cursor:"pointer"}}>Edit profile</p>
        <p style={{cursor:"pointer"}}>Notification</p>
        <p style={{cursor:"pointer"}}>Appeareance</p>
        <p style={{cursor:"pointer"}}>Help</p>
        </div>
        <div className="profile-details-container">
        <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
        <h2>{data.fullName}</h2>
        <img style={{width:"70px", height:"auto"}} src="/images/animoji-1.png" alt="animoji"></img>
        </div>
        <p style= {{fontSize:"0.9rem"}}>unverified</p>
        <FloatingLabel
        controlId="fullName"
        label="Full Name"
        className="mb-3">
        <Form.Control className="profile-input" type="text" placeholder="John Smith"  value={data.fullName} />
      </FloatingLabel>
      <FloatingLabel controlId="email" label="Email" className="mb-3">
        <Form.Control className="profile-input" type="email" placeholder="Email"/>
      </FloatingLabel>
      <FloatingLabel className="mb-3" controlId="password" label="Password">
        <Form.Control className="profile-input" type="password" placeholder="Password"/>
      </FloatingLabel>
      <FloatingLabel className="mb-3" controlId="city" label="City">
        <Form.Control className="profile-input" type="text" placeholder="City" value={data.city}/>
      </FloatingLabel>
        <Button className="profile-button" variant="primary" onClick={updateProfile}>Update profile</Button>
        
        </div>
      </div>
        </>
        )
}

export default Profile