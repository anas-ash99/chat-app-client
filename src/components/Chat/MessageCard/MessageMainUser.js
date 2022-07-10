import React from 'react'
import {FaAngleDown, FaTrashAlt, FaEdit} from "react-icons/fa"
import { useState, useContext } from 'react'
import {url1, url2, emptyProfile } from "../url"
// import { ProfilePicContext } from '../ChatfterLogin'


export default function MessageMainUser(props) {
  // const value1 = useContext(ProfilePicContext)
  const [hovered, setHoverd] = useState(false)
  const [clicked, setCklicked] = useState(false)

  const handeleMouse = ()=>{
      setHoverd(true)
  }
  const handleLeave= ()=>{
      setHoverd(false)
  }
    
  function handleClick(){
    if(clicked === false ){
      setCklicked(true)
    }else{
      setCklicked(false)
    }
  }
  const deleteClick = ()=>{
    // props.handleDelete(props.id)
  }

  

  return (
    <div className="d-flex justify-content-end mb-4">
                            <div className={"msg_cotainer_send"}>
                                {props.content} <div className='deleteContainer1' onMouseOut={handleLeave} onMouseOver={handeleMouse}><span className='arrow-down1' onClick={handleClick}>{hovered && <FaAngleDown size={"1.7rem"} />} </span></div> 
                                <div className="block"></div>
                                {clicked? 
                                  <div className="action_menu action_menu_delete" style={{paddingBottom: "0px", paddingTop: "0px"}} >
                                   <ul>
                                     <li onClick={deleteClick}  className='delete_icon'><FaTrashAlt size={"15px"}/> </li>
                                     <li  className='delete_icon'><FaEdit size={"15px"}/> </li>
                                   </ul>
                                </div>
                                :"" }
                                <span className="msg_time_send">{props.time}</span>
                            </div>
                            <div className="img_cont_msg">
                             <img src={props.profilePic ===""? emptyProfile: props.profilePic  } className="rounded-circle user_img_msg"/>
                            </div>
                        </div>
  )
}
