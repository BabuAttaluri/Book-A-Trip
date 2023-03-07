import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login1 = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  let flag;  

  // let getcredentials = localStorage.getItem('credentials');
  // getcredentials = JSON.parse(getcredentials);
  let credentials = [];
  
  
  // const handleSubmit = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.current.value !== "" && password.current.value !== "") {
      console.log(email.current.value);
      console.log(password.current.value);
      const credential = {
        username : email.current.value,
        password : password.current.value,
      };
      credentials.push(credential);
      // console.log('typee',typeof credentials);
      // localStorage.setItem("emails", email.current.value);
      // localStorage.setItem("passwords", password.current.value);
      localStorage.setItem('credentials',JSON.stringify(credentials));
      alert(`Successfully register ${email.current.value}`);

    }
  }
  
  const handleClick = () => {
      flag = false;
      let getcredentials = localStorage.getItem('credentials');
      getcredentials = JSON.parse(getcredentials);
      credentials = getcredentials;
      // console.log(getcredentials);

      if (email.current.value === "" && password.current.value === "") {
        alert("Please enter email and password");
      }
      else if (!email.current.value) {
        alert("Please enter email");
      }
      else if (!password.current.value) {
        alert("Please enter password");
      }
      else if (password.current.value.length < 6) {
        alert("Please enter 6 digit password");
      }
      else{
      getcredentials.forEach(element => {
        console.log('usr',element.username,'pass',element.password);
        if (email.current.value === element.username && password.current.value === element.password) 
        {
          // navigate("/BookingMain");
          navigate("/flight");
          
          alert("Logged in successfully");
          flag = true;
        } 
        // else {
        //   alert("new user, please Sign-in....");
        // }
      });
      if(flag===false){
      alert("Incorrect email or password");
      }
    } 
  }
  return (
      <div className="Login">
        <form className="containerlogin" onSubmit={handleSubmit}>
          <h3>Sign-In</h3>
            <input type="text" ref={email}  id="name" required placeholder="Enter your email"/>
            <input type="password" ref={password} id="pass" minLength="6"  required placeholder="Enter password"/> 
          <button id="register_btn" >Sign-Up</button>
          <button id="lgn_btn" type="button" onClick={handleClick}>Login</button>
        </form>
      </div>
  );
};
export default Login1;
