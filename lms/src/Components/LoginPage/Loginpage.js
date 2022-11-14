import React, { useState } from "react";
import "./Loginpage.css";

function Loginpage() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const adminUser = { email: "admin@gmail.com", password: "lll" };
  const [user, setUser] = useState({ email: "", password: "" });


  const Login = (details) => {
    console.log("Details");
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in SucessFully");
      
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
    // navigate('/adminpage')
    Login(details);
  };
  return (
    <div>
      <div className="container">
        <h1>LMS</h1>
        <div className="center-main-division">
          <h2>Login</h2>
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
            <p>
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
            <p>
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
