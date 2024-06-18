import { Link } from "react-router-dom"
import "./register.scss"


const Register = () => {
  return (
    <div className = "register">
        <div className = "pic-register">
        <div className = "logo-div"> 
            <h2>facebook Clone</h2>
        </div>
        <div className = "register-main">
            <h1 className="register-text">Register</h1>
            <form id = "register-form">
              <label>Username</label>
              <input className="register-input" type = "text"/>
              <label>Email</label>
              <input className="register-input" type = "email"/>
              <label>Password</label>
              <input className="register-input" type = "password"/>
              <label>Name</label>
              <input className="register-input" type = "text"/>
              <button id = "register-button">Register</button>
            </form>
          <span>Already have an account? <Link to="/login">Login</Link></span>
        </div>
        
        
        </div>

      </div>
    
  )
}

export default Register
