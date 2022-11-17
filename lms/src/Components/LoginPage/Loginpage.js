import React, { useState } from "react";
import "./Loginpage.css";
import { useNavigate } from 'react-router-dom';
import logoo from '../../Images/Mainlogo-fill.png'

function Loginpage() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const adminUser = { email: "admin@gmail.com", password: "lll" };
  const [setUser] = useState({ email: "", password: "" });
 
  
  const navigate = useNavigate();


  const Login = (details) => {
    console.log("Details");
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in SucessFully");
      navigate('/isuuedbooks')
      
      setUser({
        email: details.email,
        password: details.password,
      });
    }else{
      alert("ERROR")
    }
  };

  const submitHandler = (e) => {
    e.preventDefault()
    
    Login(details);
  };
  return (
    <div>
      <div className="container">
        <div className="d-flex align-items-center gap-2 pt-4"> 
         <img src=  {logoo} alt="logo" className="pb-2"/> 
         <h1>  LMS</h1>
         </div>
        <div className="center-main-division">
          <h3>Login</h3>
          <p className="welcome">Welcome back! Please enter your details.</p>
          <div className="link-div">
            <p>
              <a className="adm" href="adm">Admin</a>
              <a className="student" href="std">
                Student
              </a>
            </p>
          </div>

          <form onSubmit={submitHandler}>
            <p className="login-elements">
              Email
              <br />
              <input
                type="text"
                placeholder="Enter your email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
              <br />
            </p>
            <p className="login-elements">
              Password
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
              <br />
            </p>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
);
}

export default Loginpage;
