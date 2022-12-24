
import React, { useState } from "react";
//import {useDispatch} from "react-redux";
import "./Auth.css";
import Logo from "../../imgs/logo.png";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true)
  //const dispatch = useDispatch()
  const [data, setData] = useState({
    firstname:"",
    lastname:"",
    password:"",
    confirmpass:"",
    username:""
  })

  const [confirmPass,setConfirmPass]=useState(true)
  const handleChange = (e)=> {
    setData({...data, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(isSignUp){
      if(data.password !== data.confirmpass){
        setConfirmPass(false)
      }
    }
  }

  const restForm = ()=>{
    setConfirmPass(true)
    setData({
      firstname:"",
    lastname:"",
    password:"",
    confirmpass:"",
    username:""
    })
  }
  
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>StudyGroup</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/**right side  */}
      <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{isSignUp ? "Sign up": "Login"}</h3>

        {isSignUp&&
        <div>
        <input
          type="text"
          placeholder="First Name"
          className="infoInput"
          name="firstname"
          value={data.firstname}
          onChange = {handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="infoInput"
          name="lastname"
          value={data.lastname}
          onChange = {handleChange}
        />
      </div>
      }

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
            value={data.username}
            onChange = {handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange = {handleChange}
          />
          {isSignUp&&
          <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            value={data.confirmpass}
            onChange = {handleChange}
          />}
        </div>
        <span 
          style={{
            display:confirmPass?"none":"block",
            fontSize: '12px',
            color: "red",
            alignSelf:"flex-end",
            marginRight:"5px"}}
        >
          verifier mot de passe
        </span>

        <div>
            <span style={{fontSize: '12px',color: "#2b4df8", cursor:"pointer"}}
             onClick={()=>{setIsSignUp((prev)=>!prev);restForm()}}>
              {
              isSignUp ?"J'ai un compte!"
              :" Je cree un Compte"
              }</span>
        </div>
        <button className="button infoButton" type="submit" >
        {isSignUp ?"Sign Up":"Log In"}
        </button>
      </form>
    </div>
    </div>/**end Auth */
  );
};



export default Auth;