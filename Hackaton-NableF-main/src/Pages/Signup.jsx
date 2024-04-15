import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Login.css"
import Button from 'react-bootstrap/Button';
import Navbar from '../Components/Navbar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';



const Signup = () => {
    const navigate = useNavigate();

    const [details, setDetails] = useState({
        email:"",
        password:"",
        fullName:"",
        city:""
    });
    const [error, setError] = useState(false);
    const [cPass, setCPass] = useState("");
    const [cError, setCError] = useState(false);
    const [pError, setPError] = useState(false);

    const handleData = (e) => {
        console.log(details);
        setDetails({...details, [e.target.id]: e.target.value});
        if (e.target.id == "password" && e.target.value.length <= 8) setPError(true); 
        else if (e.target.id == "password" && e.target.value.length > 8) setPError(false);
    }


    const sendData = async () => {
      try {
        const response = await axios.post("http://localhost:8080/api/auth/signup", details);
        console.log(response.data);
        navigate("/login");        
      } catch (error) {
        console.error(error.response.status);
        if (error.response.status == "403") {
            console.log("yes");
            setError(true);
        }
        
      }
    };

    const handleConfirmation = (e) =>  {
        setCPass(e.target.value);
        console.log(details.password);
        console.log(e.target.value);
        if(e.target.value === details.password) setCError(false);
        else setCError(true);
    }
    

  return (
    <div>
    <Navbar/>
    <div className="login-container">
      <div>
        <img style={{width:"800px", height:"550px"}} src="/images/grupbun.png"></img>
      </div>
      <div className="center-elements">
      <div className="login-form">
      <h2 style = {{marginBottom:"20px"}}>Create account</h2>
      <>
      <FloatingLabel
        controlId="fullName"
        label="Name"
        className="mb-3">
        <Form.Control type="text" placeholder="John Smith" onChange={handleData} value={details.fullName} />
        </FloatingLabel>
        <FloatingLabel
        controlId="email"
        label="Email address"
        className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" onChange={handleData} value={details.email} />
        {error? <p style={{fontSize:"0.8rem", color:"#ff0808"}}>User already exist!</p> : <></>}
      </FloatingLabel>
      <FloatingLabel
        controlId="city"
        label="City"
        className="mb-3">
        <Form.Control type="text" placeholder="Bucharest" onChange={handleData} value={details.city} />
        </FloatingLabel>
      <FloatingLabel className="mb-3" controlId="password" label="Password">
        <Form.Control type="password" placeholder="Password" onChange={handleData} value={details.password}/>
        {pError? <p style={{fontSize:"0.8rem", color:"#ff0808"}}>Password must be at least 8 characters.</p> : <></>}
      </FloatingLabel>
      <FloatingLabel controlId="c-password" label="Confirm password">
        <Form.Control type="password" placeholder="Confirm password" onChange={handleConfirmation} value = {cPass}/>
      </FloatingLabel>
      {cError? <p style={{fontSize:"0.8rem", color:"#ff0808"}}>Passwords doesn't match!</p> : <></>}
    </>
        <p style={{fontSize:"0.8rem", marginTop:"10px"}}>Forgot password?</p>
        <Button className="submit-button" variant="primary" onClick={sendData}>Sign in</Button>
        <p style={{marginTop:"10px"}}>Already have an account? <a style={{textDecoration:"none", color:"black", fontWeight:"700"}} href="/signup">Login</a></p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Signup