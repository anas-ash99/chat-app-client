import React from 'react'
import {url1, url2, emptyProfile} from "./url"
import { useState } from 'react'
import { FaUserPlus } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom'
export default function Contacts(props) {
  let navigate = useNavigate()

  function handleClick(){
    return props.whenClicked(props.contact)
    // navigate(`/chat/${props.logedinUser}/${props.contact}`)
  }
  
  return (
    
    
    <div className='switch_div' onClick={handleClick}>
    <ui className="contacts"/>
            <li className="active">
                <div className="d-flex bd-highlight">
                    <div className="img_cont">
                        <img src={props. profilepic === "" ? emptyProfile:props. profilepic } className="rounded-circle user_img"/>
                        {/* <span className="online_icon"></span> */}
                    </div>
                  <div className="user_info">
                            <span>{props.contact}</span>
                            {/* <p> is online</p> */}
                    </div>
                    
                </div>
                
            </li>
            
            </div>
 
     
    
   
  )
}
