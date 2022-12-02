import React, { useState, useContext } from "react";
//Importing Css
import "./Loginpage.css";
//Importing Hook For Navigation
import { useNavigate } from "react-router-dom";
//Importing Logo of LMS
import logoo from "../../Images/Mainlogo-fill.png";

// Importing StudentListArray
import { studentListContext } from "../../App";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const adminUser = { email: "admin@gmail.com", password: "111" };
  const [errors, setErrors] = useState(false);

  const [studentListArray] = useContext(studentListContext);
  const [selectStudent, setSelectStudent] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    console.log("onsubmit");
    e.preventDefault();
    if (!selectStudent) {
      submitHandler(e);
    } else if (selectStudent) {
      console.log("std submit")
      studentSubmitHandler(e);
    } else {
      setErrors(true);
    }
  };

  //Authentication Process
  const LoginAdmin = () => {
    console.log("Details");
    if (email === adminUser.email && password === adminUser.password) {
      console.log("Logged in SucessFully");
      navigate("/isuuedbooks");
    }
  };
  //Form  submittion
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("kerii");
    if (email.length === 0 || password.length === 0) {
      setErrors(true);
    } else {
      console.log("LogAdmin");
      LoginAdmin();
    }
  };

  //Student
  const LoginStudent = () => {
    studentListArray.find((item) => {
      console.log(password)
      console.log( item.passOne)
      if (email === item.email && password === item.passOne) {
        console.log("final")
        navigate(`/students/mybook/${item.nameId}`);
      }
      else{
        setErrors(true);
      }
    });
  };

  const studentSubmitHandler = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      setErrors(true);
    } else {
      console.log("pre")
      LoginStudent();
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
            <p className="d-flex gap-5">
              <label
                className="adm"
                onClick={() => {
                  setSelectStudent(false);
                }}
                style={{
                  borderBottom: !selectStudent ? "3px solid #ED7966" : "none",
                }}
              >
                Admin
              </label>
              <label
                className="student"
                onClick={() => {
                  setSelectStudent(true);
                }}
                style={{
                  borderBottom: selectStudent ? "3px solid #ED7966" : "none",
                }}
              >
                Student
              </label>
            </p>
          </div>

          <form>
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
            <button onClick={onSubmit}>Login</button>
            <br />
            {selectStudent && (
              <label className="register-text">
                Don’t have an account?{" "}
                <a
                  className="registerLink"
                  style={{ color: "#ED7966" }}
                  href="hi"
                >
                  {" "}
                  Register
                </a>
              </label>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
