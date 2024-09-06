import React,{useState} from 'react'
import "./css/login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () =>{
  const[values,setValues]= useState({
    email: '',
    password: ''
  })
  const[error, setError]= useState(null)
  const navigate=useNavigate()
  axios.defaults.withCredentials = true;

  const handleSubmit=(event)=>{
    event.preventDefault()
    axios.post('http://localhost:3005/auth/login',values)
    .then(result => {
      if(result.data.loginStatus){
        navigate('/dashboard')
      } else{
        setError(result.data.Error)
      }
    })
    .catch(err => console.log(err))
  }
    return (
     <div className="login-container">
      <div className="text-danger">
        {error && error}
      </div>
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required onChange={(e)=> setValues({...values, email: e.target.value})}></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required onChange={(e)=> setValues({...values, password: e.target.value})}></input>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login
