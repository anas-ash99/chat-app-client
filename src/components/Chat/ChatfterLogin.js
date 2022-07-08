import React, {createContext, useState, useEffect, useContext } from 'react'
import Navbar from './Navbar'
import ContactsBody from './ContactsBody'
import { useParams } from 'react-router-dom'
import CardAfterLogin from './MessageCard/CardAfterLogin'
import ChatBtween2Users from './MessageCard/chatBteween2users'
import { UsersContext } from '../../UsersContext'
import Profile from '../Profile'
export const ProfilePicContext = createContext()

export default function ChatfterLogin() {
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
      if(item.username === contactName){
        user2Pic = item.profilePic
      }
      users.push(item.username)
  })

  const handleClick = (contactName)=>{
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

    <ProfilePicContext.Provider value={user2Pic}>
       
    
    <body className="body-index">
        
     <Navbar goToProfile={clickOnProfile} logedinUser={logedinUser} pic={picUrl} />
     <div  className="container-fluid h-100">
          


          {clickedOnProfile? <Profile img={picUrl} goBackChat={goBack} userInfo={userInfo}/>:
          <div className="row justify-content-center h-100"> <ContactsBody allUsers={allUsers} users={users} logedinUser={logedinUser} ifClicked={handleClick} />
           <div className="col-md-8 col-sm-8 col-xl-6 chat">
           {clickedOnUser? <ChatBtween2Users mainPic={picUrl} user2Pic={user2Pic} userClickedOn={contactName}  logedinUser={logedinUser}/>:
           <CardAfterLogin logedinUser={logedinUser}/>}
         </div></div>}

       
     </div>
    </body>
    </ProfilePicContext.Provider>
  )
}
