import React, {useEffect, useState, createContext} from 'react'
import useFetch from './UseFetch'
export const UsersContext = createContext()

export function UsersProvider(props) {
  const [chat , setChat] = useState([])
  const [allUsers, setAllUsers] = useState([])
  // const {data, laoding} = useFetch("/allUsers")
  

  useEffect(()=>{
    fetch("/allUsers").then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setAllUsers(jsonRes))

    // fetch(`/getChat/${props.logedinUser}/${props.userClickedOn}`).then(res => {
    //   if(res.ok){
    //     return res.json()
    //   }
    // }).then(jsonRes => setChat(jsonRes))
  }) 
  
  
  
return (
    <UsersContext.Provider value={allUsers}>
       {props.children}
    </UsersContext.Provider>

)
}


