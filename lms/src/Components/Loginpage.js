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
          <div> <a href="adm">Admin</a> <a href="stu">Student</a></div>
          <hr />
          <form>
            
            <label htmlFor="Email">Email</label><br />
            <input type="text" placeholder="Enter your email" /> <br />
            <label htmlFor="Password">Password</label> <br />
            <input type="text" placeholder="Enter your password"/> <br />
            <button type="submit">login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
