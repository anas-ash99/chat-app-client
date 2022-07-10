import React, {useState, useContext} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import { UsersContext } from '../UsersContext';
import {axiosInstance} from '../config';
export default function SignUp(props) {

  const allUsers = useContext(UsersContext)
  const [alertForUser, setAlertForUser] = useState(false)
  const [alertForPsw, setAlertForPsw] = useState(false)
  const [style, setStyle] = useState("")
  const [user, setUser] = useState({
    email: "user@email.com",
    username:"user",
    password:"123456"
   })
  const [confPassword, setConfPassword] = useState("")
  let navigate = useNavigate()

  function takeInput(event){
      var name = event.target.name
      var value = event.target.value
      console.log(name);
      if(name === "confPassword"){
        setConfPassword(value)
      }else{
        setUser((prev)=>{
        return{
          ...prev,
          [name]: value
        }
        
      })
      }
 }
  
  function handleClick(e){
  
     e.preventDefault();

      var usersList = allUsers.map(ele=>{
        return (ele.username)
      }) 

      if(usersList.includes(user.username)){
          setAlertForUser(true)
          setTimeout(()=> setAlertForUser(false), 3000)
          
      }else{
          if(user.password !== confPassword){
            setAlertForPsw(true)
            setTimeout(()=> setAlertForPsw(false), 3000)
          }else{
            axiosInstance.post("/createUser", {
              username: user.username,
              email: user.email,
              profilePic: "",
              phoneNumber: "",
              address: "",
              password: user.password,
              friends: []
            })
            navigate("/login")
          } 
      }
   
  }

  return (
    <body className="login-singup-body"  >
 {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
           <a className="" >Online Chat</a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div className="navbar-nav">
               
               <a className="nav-item nav-link" href="/home">Home</a>
               
    
             </div>
           </div>
           
           
       </nav> */}

<div className="wrapper">
    <div className="title-text">
      <div className="title login">Signup Form</div>
      <div className="title signup">Signup Form</div>
    </div>
    <div className="form-container">
      <div className="slide-controls">
        <p className="test">Sign Up</p>
      </div>
           {alertForUser && <div className="alert" style={{backgroundColor: "red"}}>
                                <span  className="closebtn"></span>
                                Username isn't available
                            </div>}
            {alertForPsw && <div className="alert" style={{backgroundColor: "red"}}>
                                 <span  className="closebtn"></span>
                                 Passwords Don't Match
                              </div>}

      <div className="form-inner">
        
        <form >
          <div className="field">
            <input onChange={takeInput} value={user.email} type="text" placeholder="Email Address" name="email" required/>
          </div>
          <div className="field">
            <input onChange={takeInput} value={user.username}  placeholder="Username" name="username" required/>
          </div>
          <div className="field">
            <input onChange={takeInput} value={user.password} type="password" placeholder="Password" name="password" required/>
          </div>
          <div className="field">
            <input type="password" onChange={takeInput} value={confPassword} placeholder="Confirm Password" name="confPassword" required/>
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" onClick={handleClick}/>
          </div>
          <div className="signup-link">Already a member? <a href="/login">Log in now</a></div>
        </form>
      </div>
    </div>
  </div>
</body>
  )
}
