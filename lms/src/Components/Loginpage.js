import React from "react";
import "./Loginpage.css";

function Loginpage() {
  return (
    <div>
      <div className="container">
        <h1>LMS</h1>
        <div className="center-main-division">
          <h2>Login</h2>
          <p>Welcome back! Please enter your details.</p>
          <div className="link-div">
            <a href="adm">Admin</a> <a href="stu">Student</a>
          </div>

          <form>
            <div>
            <label htmlFor="Email">Email</label>
            <br />
            <input type="text" placeholder="Enter your email" /> <br /></div>
            <div>
            <label htmlFor="Password">Password</label> <br />
            <input type="password" placeholder="Enter your password" /> <br /></div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
