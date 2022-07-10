import React, {createContext, useState, useEffect, useContext } from 'react'
import ContactsBody from './ContactsBody'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import CardAfterLogin from './MessageCard/CardAfterLogin'
import ChatBtween2Users from './MessageCard/chatBteween2users'
import { UsersContext } from '../../UsersContext'
import Profile from '../Profile'
import { useNavigate } from 'react-router-dom'


export default function ChatfterLogin() {
  let navigate = useNavigate()
  const {otherUser }= useParams()
  const allUsers = useContext(UsersContext)
  const {logedinUser} = useParams()
  const [clickedOnUser, setClickedOnUser] = useState(false)
  const [contactName, setContactName] = useState("")
  const [clickedOnProfile, setClickedOnProfile] = useState(false)
  const [usernames, setUsernames] = useState([])
  const [test, setTest] = useState("")
  var [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    profilePic: "",
    phoneNum: "",
  })
  
  let picUrl = ""
  let user2Pic = ""   
  let users = []


  allUsers.forEach(item=>{
      if(item.username === logedinUser){
          picUrl = item.profilePic
      }
      if(item.username === otherUser){
        user2Pic = item.profilePic
      }
      users.push(item.username)
  })

  const handleClick = (contactName)=>{
    navigate(`/chat/${logedinUser}/${contactName}`)
     setClickedOnUser(true)
     setContactName(contactName)
  }
  
  function clickOnProfile(){
    allUsers.map(user =>{
        if(user.username === logedinUser){
            setUserInfo({
                username: user.username,
                email: user.email,
                profilePic: user.ProfilePic,
                phoneNum: "0159014847"
            })
        }
     })
    setClickedOnProfile(true)
  }
  function goBack(){
    setClickedOnProfile(false)
   console.log("userInfo.profilePic");
  }
  
  return (

   
       
    
    <body className="body-index">
        
     <Navbar goToProfile={clickOnProfile} logedinUser={logedinUser} pic={picUrl} />
     <div  className="container-fluid h-100">
          


        {clickedOnProfile? <Profile img={picUrl} goBackChat={goBack} userInfo={userInfo}/>:
          <div className="row justify-content-center h-100"> <ContactsBody allUsers={allUsers} users={users} logedinUser={logedinUser} ifClicked={handleClick} />
            <div className="col-md-8 col-sm-8 col-xl-6 chat">
              <ChatBtween2Users clickedOnUser={clickedOnUser} mainPic={picUrl} user2Pic={user2Pic} userClickedOn={otherUser}  logedinUser={logedinUser}/>
            </div>
        </div>}

       
     </div>
    </body>
  
  )
}
