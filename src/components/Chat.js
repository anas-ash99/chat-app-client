import React, {createContext, useState, useEffect, useContext } from 'react'
import Navbar from './Chat/Navbar'
import ContactsBody from './Chat/ContactsBody'
import { useParams } from 'react-router-dom'
import CardAfterLogin from './Chat/MessageCard/CardAfterLogin'
import ChatBtween2Users from './Chat/MessageCard/chatBteween2users'
import { UsersContext } from '../UsersContext'

export const ProfilePicContext = createContext()

export default function ChatfterLogin() {
  const allUsers = useContext(UsersContext)
  const {logedinUser, otherUser} = useParams()
  const [clickedOnUser, setClickedOnUser] = useState(false)
  const [contactName, setContactName] = useState("")
 
  const [usernames, setUsernames] = useState([])
  const [test, setTest] = useState("")

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



   
  

  
// const test1 = ()=>{
//       cuser.forEach(ele=>{
//         return 
//       })
//   }
  const handleClick = (contactName)=>{
     setClickedOnUser(true)
     setContactName(contactName)
  }
  


  return (

    <ProfilePicContext.Provider value={user2Pic}>
       
    
    <body className="body-index">
        
     <Navbar logedinUser={logedinUser} pic={picUrl} />
     <div  className="container-fluid h-100">
          <div className="row justify-content-center h-100">
            <ContactsBody allUsers={allUsers} users={users} logedinUser={logedinUser} ifClicked={handleClick} />
            <div className="col-md-8 col-sm-8 col-xl-6 chat">
              <ChatBtween2Users mainPic={picUrl} user2Pic={user2Pic} userClickedOn={otherUser} logedinUser={logedinUser}/>
            </div>
        </div>
     </div>
    </body>
    </ProfilePicContext.Provider>
  )
}
