import React from 'react'
import {url1, url2, emptyProfile} from "./url"
import { useState, useEffect } from 'react'
import { FaUserPlus } from "react-icons/fa";
import axios from 'axios'

export default function AddContacts(props) {
const [contacts, setContact] = useState(["anas", "ali"])
const [afterAdd, setAfterAdd]  = useState(false)


const handeleClick = () =>{
   
  axios.post("/addFriend", 
   {
    user1: props.username,
    user2: props.userToAdd
   })

   axios.post("/createChat", 
   {
    user1: props.username,
    user2: props.userToAdd
   })
  return props.checkWhenAdd("true")
}

  return (
    
    
    <div>
    <ui className="contacts"/>
            <li className="active">
                <div className="d-flex bd-highlight">
                    <div className="img_cont">
                        <img src={props.profileImg === "" ? emptyProfile:  props.profileImg } className="rounded-circle user_img"/>
                    </div>
                  <div className="user_info">
                            <span>{props.userToAdd}</span>
                  </div>
                    <button  className='add_button'><FaUserPlus onClick={handeleClick} size={"1.3rem"}/></button>
                </div>
                
            </li>
            
            </div>
    
     
    
   
  )
}

