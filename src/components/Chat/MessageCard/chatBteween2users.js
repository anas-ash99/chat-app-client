import React, { useState ,useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import CardHeader from './CardHeader'
import ContactsBody from '../ContactsBody'
import Message from './Message'
import MessageMainUser from './MessageMainUser'
import MessageBottom from './MessageBottom'
import { axiosInstance } from '../../../config'
import useFetch from '../../../UseFetch'
import { Socket } from 'socket.io-client'


var ran = "123456qwertzuiopasdfghjklyxcvbnm7890"
      var ran2 = ran.split("")
      var ran3 = []
      var i = 0
     

export default function ChatBtween2Users(props) {
  
  const username = useParams()
  const [user1Message , setUser1Message] = useState("")
  const [chat , setChat] = useState([])
  const [msgId , setMsgId] = useState("")
  const [inputValue , setInputValue] = useState("")
  const [clickedToSendMsg , setClickedtoSendmsg] = useState(false)
  const [messagesCount, setMessagesCount] = useState()
  const classesForMain = ["justify-content-end", "msg_cotainer_send", 'deleteContainer1', "action_menu_delete", "msg_time_send", 'arrow-down1']
  const classesForOther = ["justify-content-start", "msg_cotainer", 'deleteContainer', "action_menu_delete_otherUser", "msg_time", 'arrow-down']
  
  const logedinUser = props.logedinUser
  const {data, laoding} = useFetch(`/getChat/${props.logedinUser}/${props.userClickedOn}`)

  async function getChat(){
    try {
       await axiosInstance.get(`/getChat/${props.logedinUser}/${props.userClickedOn}`).then(resp => {
                setChat(resp.data);
            });
    } catch (error) {
      console.log(error);
    }
  }  

  async function fetchMessageCount(){
    try {
      const res = await axiosInstance.get(`/messagesCount/${props.logedinUser}/${props.userClickedOn}`)
      setMessagesCount(res.data)
    } catch (error) {
      console.log(error);
    }
   }

  

   useEffect(()=>{
    getChat()
     fetchMessageCount()
 }, [props.userClickedOn])

 
   const saveInput = (event)=>{
     const name = event.target.name
     const value = event.target.value
      setUser1Message(value)
      setInputValue(value)
   }
  
  const handleClick = async ()=>{
    // if(clickedToSendMsg === true){
    //   setClickedtoSendmsg(false)
    // }else{
    //   setClickedtoSendmsg(true)
    // }
    // getChat()
  

    var today = new Date()
    var time = today.getHours() + ":" + today.getMinutes() 
    const messageData = {
      chatId: props.chatId,
      username: logedinUser,
      content: user1Message,
      time : time
    }
    
    await props.socket.emit("send_message", messageData)
     setChat((prev)=>[...prev, messageData])

    setInputValue("")
    for( i = 0; i < 10; i++){
          let y = Math.floor(Math.random() * 38);
          ran3.push(ran2[y])
      } 
    
      setMsgId(ran3.join(""))

      axiosInstance.post("/addMessage",
      {
        id: ran3.join(""),
        user1: logedinUser,
        user2: props.userClickedOn,
        content: user1Message,
        time: time
      }
      )
    setInputValue("")
    setMsgId("")
    ran3 = []

    
  }


  useEffect(()=>{
     props.socket.on("receive_message", (data1)=>{
         setChat((prev)=>[...prev, data1])
     })
  }, [props.socket])

  const deleteMessage = (messageId)=>{
    // getChat()
    fetchMessageCount()
    axiosInstance.delete(`/deleteMessage/${props.logedinUser}/${props.userClickedOn}/${messageId}`)
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
  }




  function messagesSturcture(){
    return(
       chat.map((ele, index)=>{
        if(ele.username === logedinUser){
          return(
              <Message key={index} profilePic={""} test={"main"} classes={classesForMain}
               time={ele.time} content={ele.content} handleDelete={deleteMessage} 
               name ={ele.username} user2={props.userClickedOn}
                clickToSendMsg={clickedToSendMsg} />
                )
        }else{
          return(
              <Message key={index} profilePic={""} test={"other"} classes={classesForOther} 
              time={ele.time} content={ele.content} handleDelete={deleteMessage} name ={props.userClickedOn} user2={logedinUser} clickToSendMsg={clickedToSendMsg}/>
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


// function messagesSturcture(){
//     return(
//        chat.map((ele, index)=>{
//         if(ele.username === logedinUser){
//           return(
//               <Message key={ele.msgId} id={ele.msgId} profilePic={props.mainPic} test={"main"} classes={classesForMain}
//                time={ele.time} content={ele.content} handleDelete={deleteMessage} name ={logedinUser} user2={props.userClickedOn} clickToSendMsg={clickedToSendMsg} />
//                 )
//         }else{
//           return(
//               <Message key={ele.msgId} id={ele.msgId} profilePic={props.user2Pic} test={"other"} classes={classesForOther} 
//               time={ele.time} content={ele.content} handleDelete={deleteMessage} name ={props.userClickedOn} user2={logedinUser} clickToSendMsg={clickedToSendMsg}/>
//           )
//         }
        
//       })
//     )
      
//     }