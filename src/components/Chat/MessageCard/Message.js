import React, { useState } from 'react'
import {emptyProfile} from "../url"
import {FaAngleDown, FaTrashAlt, FaEdit, FaTelegramPlane} from "react-icons/fa"
import axios from 'axios'


export default function Message(props) {

  const [hovered, setHoverd] = useState(false)
  const [clicked, setCklicked] = useState(false)
  const [clickedForEdit, setClickedForEdit] = useState(false)
  const [changeValue, setChangeValue] = useState(props.content)
  const [changed, setChanged] = useState(false)


  const handeleMouse = ()=>{
      setHoverd(true)
  }
  const handleLeave= ()=>{
      setHoverd(false)
  }
  

  function handleClick(){
    if(clicked=== false){
      setCklicked(true)
    }else{
      setCklicked(false)
    }
    console.log(props.id);
  }

  // const deleteClick = ()=>{
  //   props.handleDelete(props.id)
  // }

  const editClick = ()=>{
    setClickedForEdit(true)
    setCklicked(false)
  }
  const handleChange = (event)=>{
    const value = event.target.value
    setChangeValue(value)
  }
  const handleSubmitForEdit = (e)=>{
     e.preventDefault() 
     setClickedForEdit(false)
     axios.patch(`/editMessage/${props.id}`, {
      user1: props.name,
      user2: props.user2,
      messageId: props.id,
      content: changeValue
    })
  
  }
  const handleClickEdit = ()=>{}
    
  const msgContent = ()=>{
    if(clickedForEdit === false){
      return(
          <span>
             {props.content} 
             <div className= {props.classes[2]} onMouseOut={handleLeave} onMouseOver={handeleMouse}>
               <span className={props.classes[5]} onClick={handleClick}>{hovered && <FaAngleDown size={"1.7rem"} />} </span>
             </div> 
         
          </span> 
      )
    }else{ 
      return(
        <form onSubmit={handleSubmitForEdit} action="submit">
        <input onChange={handleChange} className='edit_message_input' type="text" value={changeValue} />
        <button className='edit_submit' type="submit"><FaTelegramPlane /></button>
        </form>
      )
    }
  }

  const deleteClick = ()=>{
    
    props.handleDelete(props.id)
    
  }
  
  return (

    
    <div className={`d-flex ${props.classes[0]} mb-4`}>
     {props.test ==="other" && <div className="img_cont_msg">
          <img src={props.profilePic ===""? emptyProfile: props.profilePic  } className="rounded-circle user_img_msg"/>
        </div> } 
        <div className={props.classes[1]}>
                {msgContent()}
            
            <div className="block"></div>
            {clicked? 
              <div className={`action_menu ${props.classes[3]}`} style={{paddingBottom: "0px", paddingTop: "0px"}} >
                <ul>
                  <li onClick={deleteClick}  className='delete_icon'><FaTrashAlt size={"15px"}/> </li>
                  <li onClick={editClick} className='delete_icon'><FaEdit size={"15px"}/> </li>
                </ul>
            </div>
            :"" }
            <span className={props.classes[4]} >{props.time}</span>
        </div>
        {props.test ==="main" && <div className="img_cont_msg">
          <img src={props.profilePic ===""? emptyProfile: props.profilePic  } className="rounded-circle user_img_msg"/>
        </div> } 
    </div>

  )   
}
{/* <div className="d-flex justify-content-start mb-4">
        <div className="img_cont_msg">
               <img src={props.profilePic ===""? emptyProfile: props.profilePic   } className="rounded-circle user_img_msg"/>
        </div>
                            
        <div className="msg_cotainer">
               {asd()}
                
                <span className="msg_time">{props.time}</span>
                {clicked? 
                    <div className="action_menu action_menu_delete_otherUser" style={{paddingBottom: "0px", paddingTop: "0px"}} >
                          <ul>
                             <li className='delete_icon'><FaTrashAlt size={"15px"}/> </li>
                             <li onClick={editClick} className='delete_icon'><FaEdit size={"15px"}/> </li>
                          </ul>
                    </div>
                :"" }
        </div>
    </div> */}
  