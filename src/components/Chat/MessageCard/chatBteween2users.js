import React, { useState ,useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import CardHeader from './CardHeader'
import ContactsBody from '../ContactsBody'
import Message from './Message'
import MessageMainUser from './MessageMainUser'
import MessageBottom from './MessageBottom'
import axios from 'axios'
import useFetch from '../../../UseFetch'


var ran = "123456qwertzuiopasdfghjklyxcvbnm7890"
      var ran2 = ran.split("")
      var ran3 = []
      var i = 0
     

export default function ChatBtween2Users(props) {
  const {data, laoding} = useFetch("http://localhost:5000/getChat/user1/user3")
  const username = useParams()
  const [user1Message , setUser1Message] = useState("")
  const [user2Message , setUser2Message] = useState("")
  const [chat , setChat] = useState([])
  const [msgId , setMsgId] = useState("")
  const [inputValue , setInputValue] = useState("")
  const [messagesCount, setMessagesCount] = useState()
  const classesForMain = ["justify-content-end", "msg_cotainer_send", 'deleteContainer1', "action_menu_delete", "msg_time_send", 'arrow-down1']
  const classesForOther = ["justify-content-start", "msg_cotainer", 'deleteContainer', "action_menu_delete_otherUser", "msg_time", 'arrow-down']
  
  const logedinUser = props.logedinUser
  useEffect(()=>{

     axios.get(`/getChat/${props.logedinUser}/${props.userClickedOn}`).then(resp => {
        setChat(resp.data);
    });

    fetch(`/messagesCount/${props.logedinUser}/${props.userClickedOn}`).then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setMessagesCount(jsonRes))
 });
 
   const saveInput = (event)=>{
     const name = event.target.name
     const value = event.target.value
      setUser1Message(value)
      setInputValue(value)
   }
  
  const handleClick = ()=>{
    var today = new Date()
    var time = today.getHours() + ":" + today.getMinutes() 
    for( i = 0; i < 10; i++){
          let y = Math.floor(Math.random() * 38);
          ran3.push(ran2[y])
      } 
      console.log(ran3.join(""));
      setMsgId(ran3.join(""))
      axios.post("/addMessage",
      {
        id: ran3.join(""),
        user1: logedinUser,
        user2: props.userClickedOn,
        content: user1Message,
        time: time
      }
      )
    console.log(msgId);
    setInputValue("")
    setMsgId("")
    ran3 = []

    
  }

  


  const deleteMessage = (messageId)=>{
    console.log(props.logedinUser);
    console.log(props.userClickedOn);
    axios.delete(`/deleteMessage/${props.logedinUser}/${props.userClickedOn}/${messageId}`)
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  function messagesSturcture(){
    return(
       data.map((ele, index)=>{
        if(ele.username === logedinUser){
          return(
              <Message key={ele.msgId} id={ele.msgId} profilePic={props.mainPic} test={"main"} classes={classesForMain}
               time={ele.time} content={ele.content} handleDelete={deleteMessage} name ={logedinUser} user2={props.userClickedOn}/>
                )
        }else{
          return(
              <Message key={ele.msgId} id={ele.msgId} profilePic={props.user2Pic} test={"other"} classes={classesForOther} 
              time={ele.time} content={ele.content} handleDelete={deleteMessage} name ={props.userClickedOn} user2={logedinUser}/>
          )
        }
        
      })
    )
      
    }
      
  
  return (
    
   
        <div className="col-md-8 col-xl-11 chat">
          <div className="card ">
            <CardHeader mesgCount={messagesCount} user2Pic={props.user2Pic} name={props.userClickedOn} />
            <div className="card-body msg_card_body">
    
              {messagesSturcture()}
                
            </div>
             <form onSubmit={handleSubmit} >
             <MessageBottom inputValue1={inputValue} handleChange={saveInput} click={handleClick}/>
             </form>
          </div>
        </div>
       
  )
}


