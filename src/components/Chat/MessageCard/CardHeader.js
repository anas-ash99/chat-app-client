import React, {useState} from 'react'
import DotsNav from './DotsNav'
import {emptyProfile, url1, url2} from "../url"
export default function (props) {

const [clicked, setClicked] = useState(false)



const handleClick = ()=>{

    console.log(clicked);
    if(!clicked){
        setClicked(true)
    }else{
        setClicked(false)
    }
   
}
  return (
    <div className="card-header msg_head">
                        <div className="d-flex bd-highlight">
                            <div className="img_cont">
                                <img src={props.user2Pic === ""? emptyProfile: props.user2Pic} className="rounded-circle user_img"/>
                                <span className="online_icon"></span>
                            </div>
                            <div className="user_info">
                               
                                <span>Chat with {props.name} </span>
                                <p>{props.mesgCount} Messages</p>
                            </div>
                            <div className="video_cam">
                                <span><i className="fas fa-video"></i></span>
                                <span><i className="fas fa-phone"></i></span>
                            </div>
                        </div>
                         
                        <span onClick={handleClick} id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
                        
                        {clicked === true? <DotsNav /> : <div></div> }
                    </div>
  )
}
