import { Link } from "react-router-dom"
import "./login.scss"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {

  const {login} = useContext(AuthContext);

  const handlelogin = () =>{
    login();
  }

  return (
    
      <div className = "login">
        <div className = "pic-login">
        <div className = "picture-div"> 
            <h2>facebook Clone</h2>
        </div>
        <div className = "login-main">
            <h1 className="login-text">Login</h1>
            <form id = "login-form">
              <label>Username</label>
              <input className="login-input" type = "text"/>
              <label>Password</label>
              <input className = "login-input" type = "password"/>
              <button id = "login-button" onClick={handlelogin}>Login</button>
            </form>
          <span>Don't have an account? <Link to="/register">Register now</Link></span>
        </div>
        
        
        </div>

      </div>
    
  )
}

export default Login
