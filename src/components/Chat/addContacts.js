import React from 'react'
import {emptyProfile} from "./url"
import { useState, useEffect } from 'react'
import { FaUserPlus } from "react-icons/fa";
import { axiosInstance } from '../../config';

export default function AddContacts(props) {


const handeleClick = () =>{
   
  axiosInstance.post("/addFriend", 
   {
    user1: props.username,
    user2: props.userToAdd
   })

   axiosInstance.post("/createChat", 
   {
    user1: props.username,
    user2: props.userToAdd
   })
  return props.checkWhenAdd("true")
}

  return (
    
    
    <>
    <ui className="contacts">
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
      </ui>
            </>
    
     
    
   
  )
}

