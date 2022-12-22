import React from 'react'
import "./Auth.css";

function SignUp() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Sign up</h3>
  
          <div>
            <input
              type="text"
              placeholder="Nom"
              className="infoInput"
              name="firstname"
            />
            <input
              type="text"
              placeholder="Prenom"
              className="infoInput"
              name="lastname"
            />
          </div>
  
          <div>
            <input
              type="text"
              className="infoInput"
              name="password"
              placeholder="Password"
            />
            <input
              type="text"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirm Password"
            />
          </div>
  
          <div>
              <span style={{fontSize: '12px'}}>Vous avez deja un compte. Login!</span>
          </div>
          <button className="button infoButton" type="Enregistrer">Signup</button>
        </form>
      </div>
    );
  }

export default SignUp