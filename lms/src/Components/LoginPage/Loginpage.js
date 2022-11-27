import React, { useState } from "react";
//Importing Css
import "./Loginpage.css";
//Importing Hook For Navigation
import { useNavigate } from "react-router-dom";
//Importing Logo of LMS
import logoo from "../../Images/Mainlogo-fill.png";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const adminUser = { email: "admin@gmail.com", password: "lll" };
  const [errors, setErrors] = useState(false);

  const navigate = useNavigate();

  //Authentication Process
  const Login = () => {
    console.log("Details");
    if (email === adminUser.email && password === adminUser.password) {
      console.log("Logged in SucessFully");
      navigate("/isuuedbooks");
    }
  };
  //Form  submittion
  const submitHandler = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setErrors(true);
    } else {
      Login();
    }
  };
  
  return (
    <div>
      <div className="container">
        <div className="loginpage-logo">
          <img src={logoo} alt="logo" className="pb-2" />
          <h1> LMS</h1>
        </div>
        <div className="center-main-division">
          <h3>Login</h3>
          <p className="welcome">Welcome back! Please enter your details.</p>
          <div className="link-div">
            <p>
              <a className="adm" href="adm">
                Admin
              </a>
              <a className="student" href="std">
                Student
              </a>
            </p>
          </div>

          <form onSubmit={submitHandler}>
            <p className="login-elements ">
              Email
              <br />
              <br />
              <input
                type="text"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
            </p>
            {errors && email.length <= 0 ? (
              <label className="labels-of-loginpage">Invalid Email</label>
            ) : (
              ""
            )}
            <p className="login-elements">
              Password
              <br />
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </p>
            {errors && password.length <= 0 ? (
              <label className="labels-of-loginpage pb-3">Wrong Password</label>
            ) : (
              ""
            )}
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
