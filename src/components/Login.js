import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UsersContext } from '../UsersContext';
export default function Login() {
   
   const allUsers = useContext(UsersContext)
   const [alert, setAlert] = useState(false)
   const [user , setUser] = useState({username: "", password: ""})
   const [isAuthenticated, setIsAuthenticated] = useState("")
   let navigate = useNavigate()


//   useEffect(()=>{
//     fetch("/users").then(res => {
//       if(res.ok){
//         return res.json()
//       }
//     }).then(jsonRes => setUsers(jsonRes))
//   console.log(users); 
//  });

function handleChange(event){
  const name = event.target.name
  const value = event.target.value
  
  setUser(prev=>{
    return{
      ...prev,
     [name]: value
    }
  })
 
}

// useEffect(()=>{
//   fetch("/auth").then(res=>{
//     if(res.ok){
//       return res.json()
//     }
//   }).then(jsonRes =>{
//     setIsAuthenticated(jsonRes)
//   })

// })

function handleClick(e){
   e.preventDefault();
 allUsers.map((item)=>{
  if(item.username === user.username){
    if(item.password === user.password){
      navigate(`/chatAfterLogin/${user.username}`)
    }else{
      setAlert(true)
      setTimeout(()=>setAlert(false), 3000)
    }
  }
 })


  
  // if(isAuthenticated ==="yes"){
  //   navigate(`/chatfterLogin/${user.username}`)
  // }else{
  //   console.log("its not");
  // }
}


function handleSubmit(e){
  e.preventDefaulte()
}


  return (
    

<div className="wrapper warpper-login">
    <div className="title-text">
      <div className="title login">Login Form</div>
    </div>
    <div className="form-container">
      <div className="slide-controls">
        <p className="test">Login</p>
      </div>
      
      {alert && <div className="alert" style={{backgroundColor: "red"}}>
                                <span  className="closebtn"></span>
                                Wrong Password
                            </div>}
      <div className="form-inner">
        <form onSubmit={handleSubmit} >
          <div className="field">
          
            <input onChange={handleChange}  value={user.username} type="text" name="username" placeholder="Email Address" />
          </div>
          <div className="field">
            <input onChange={handleChange} value={user.password} type="password" name="password" placeholder="Password"/>
          </div>
          <div className="pass-link"><a href="#">Forgot password?</a></div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input onClick={handleClick}  type="submit" value="Login"/>
          </div>
          <div className="signup-link">Not a member? <a href="/signup">Signup now</a></div>
        </form>
        
      </div>
    </div>
  </div>
  
  )
}
