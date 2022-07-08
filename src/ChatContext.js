import React, {useState, createContext, useContext, useEffect} from 'react'
export const ChatContext = createContext()

export function ChatContext(props) {
    const [chat , setChat] = useState([])
    useEffect(()=>{
    fetch(`/getChat/${props.logedinUser}/${props.userClickedOn}`).then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setChat(jsonRes))
   
  
 });
  return (
    <ChatContext.Provider value={chat}>
       {props.children}
    </ChatContext.Provider>
  )
}
