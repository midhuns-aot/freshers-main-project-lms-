import React from "react";
import "./Loginpage.css";

function Loginpage() {
  return (
    <div>
      <div className="container">
        <h1>LMS</h1>
        <div className="center-main-division">
          <h2>Login</h2>
          <p className="welcome">Welcome back! Please enter your details.</p>
          <div className="link-div">
          <p>  <a href="adm">Admin</a> <a className="student" href="std">Student</a> </p>
          </div>

          <form>
            <p htmlFor="Email">Email
            <br />
            <input type="text" placeholder="Enter your email" /> <br />
            </p>
            <p>Password<br />
            <input type="password" placeholder="Enter your password" /> <br />
            </p>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
