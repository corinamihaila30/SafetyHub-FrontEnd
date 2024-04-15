import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import "./Login.css"
import LoginComponent from '../Components/LoginComponent'
import Button from 'react-bootstrap/Button';
import Navbar from '../Components/Navbar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



const Login = () => {
  const navigate = useNavigate();
    const [data, setData] = useState({
        fullName: "",
        trustScore: "",
    });
    const [details, setDetails] = useState({
        email:"",
        password:"",
        token:"",
    });
    const [error, setError] = useState(false);

    const handleData = (e) => {
        setDetails({...details, [e.target.id]: e.target.value});
    }


    const sendData = async () => {
      try {
        const response = await axios.post("http://localhost:8080/api/auth/login", details);
        localStorage.setItem('token', response.data.token);
        navigate('/');
        
      } catch (error) {
        console.error(error.response.status);
        if (error.response.status == "403") {
            console.log("yes");
            setError(true);
        }
        
      }
    };
    

  return (
    <div>
    <Navbar/>
    <div className="login-container">
      <div>
        <img style={{width:"800px", height:"550px"}} src="/images/grupbun.png"></img>
      </div>
      <div className="center-elements">
      <div className="login-form">
      <h2 style = {{marginBottom:"20px"}}>Login</h2>
      <>
        <FloatingLabel
        controlId="email"
        label="Email address"
        className="mb-3">
        <Form.Control  type="email" placeholder="name@example.com" onChange={handleData} value={data.email} />
      </FloatingLabel>
      <FloatingLabel controlId="password" label="Password">
        <Form.Control type="password" placeholder="Password" onChange={handleData}/>
      </FloatingLabel>
      {error? <p style={{fontSize:"0.8rem", color:"#ff0808"}}>Wrong username or password!</p> : <></>}
    </>
        <p style={{fontSize:"0.8rem", marginTop:"10px"}}>Forgot password?</p>
        <Button className="submit-button" variant="primary" onClick={sendData}>Sign in</Button>
        <p style={{marginTop:"10px"}}>Don't have an account? <a style={{textDecoration:"none", color:"black", fontWeight:"700"}} href="/signup">Register for free</a></p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login