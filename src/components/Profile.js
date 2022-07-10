import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {axiosInstance} from '../config';
import { FaEdit, FaCheck, FaCamera, FaLocationArrow} from "react-icons/fa"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { emptyProfile } from './Chat/url'
import { UsersContext } from '../UsersContext';

export default function Profile(props) {
    const allUsers = useContext(UsersContext)
    const {username} = useParams()
    const [clickedUsername, setClickedUsername] = useState(false)
    const [clickedEmail, setClickedEmail] = useState(false)
    const [clickedNumber, setClickedNumber] = useState(false)
    const [mouseMove, setMouseMove] = useState(false)
    const [clickOnImg, setClickOnImg] = useState(false)
    const [newImg, setNewImg] = useState("")
    const [editvalue, setEditValue] = useState({
        username: props.userInfo.username,
        email: props.userInfo.email,
        number: props.userInfo.phoneNum
    })

    function handeleMouse(){setMouseMove(true)}
    
    function handleLeave(){setMouseMove(false)}
        
    function handleEditUsername(){setClickedUsername(true)}
    
    function handleEditEmail(){
       

        setClickedEmail(true)
    }

    function handleEditNumber(){setClickedNumber(true)}
    
    function handleChange(event){
        const {name, value} = event.target
        setEditValue(prev=>{
            return {...prev, [name]: value}
        })
     
    }

    function saveEditUsername(){ 
        // allUsers.map(user=>{
        //     if(props.userInfo.username === editvalue.username){
        //         console.log("username Is not avaliable");
        //     }else{
        //         axios.patch("/editUsername", {
        //             oldUsername: props.userInfo.username,
        //             newUsername: editvalue.username
        //         })
        //     }
        // })
        setClickedUsername(false)
    }
    function saveEditEmail(){
        axiosInstance.patch("/editEmail", {
            username: props.userInfo.username,
            email: editvalue.email
        })
        setClickedEmail(false)
    }
    function saveEditNumber(){
        axiosInstance.patch("/editPhoneNumber", {
            username: props.userInfo.username,
            phoneNum: editvalue.number
        })
        setClickedNumber(false)
    }


    function clickToChangeImg(){
        setClickOnImg(true)
    }

    function postNewImg(){
        axiosInstance.patch("/editProfilePic", {
            username: props.userInfo.username,
            picUrl: newImg
        })
        setNewImg("")
        setClickOnImg(false)
    }

    function saveChangNewImg(event){
        const value = event.target.value
        setNewImg(value)
    }

  return (

   <div className="row justify-content-center h-100">
        <div className="col-md-8 col-sm-8 col-xl-6 chat">
            <div class="card card_profile">
            <div className="card-header msg_head msg_head_profile ">
              <div className="d-flex d-flex-profile bd-highlight">
              <AiOutlineArrowLeft onClick={props.goBackChat}  className='back_icon' size={"1.5rem"}/> <p>Profile</p>
              </div>
            </div>
            <div>

            {mouseMove && <div onMouseOver={handeleMouse} onClick={clickToChangeImg}   onMouseOut={handleLeave}  className='img_edit'>
                <FaCamera className='img_icon' size={"1.6rem"} color={"white"}  />
                <p>CHANGE PROFILE PHOTO</p></div>}

                <img onMouseOver={handeleMouse}  onMouseOut={handleLeave} 
                src={props.img ===""? emptyProfile: props.img } className="rounded-circle profile_img"/>

              {clickOnImg && <div className='inset-url'><input value={newImg} name="picUrl" onChange={saveChangNewImg} placeholder='Enter Photo URL' type="text" />
               <FaLocationArrow onClick={postNewImg} className='submit_new_img'/></div> } 
            
            <div className='info_container'>
              <p>Your Username</p>


                  <div className='indi'> 
                     <h3>{props.userInfo.username}</h3>
                  </div>

                {/* {clickedUsername? 
                  <div className='after_edit'> 
                     <input onChange={handleChange} type="text" name='username' value={editvalue.username}  /> 
                     <FaCheck onClick={saveEditUsername} size={"1.3rem"} className='submit_edit'/> 
                  </div>:
                  <div className='indi'> 
                     <h3>{props.userInfo.username}<FaEdit onClick={ handleEditUsername} name="username" className='edit_icon_profile'/></h3>
                  </div>}
               */}
               <p>Your Email</p>
               
                {clickedEmail?
                 <div className='after_edit'> 
                    <input type="text" onChange={handleChange} name="email" value={editvalue.email} /> 
                    <FaCheck onClick={saveEditEmail} size={"1.3rem"} className='submit_edit'/> 
                 </div>:
                 <div className='indi'>
                    <h3>{props.userInfo.email}<FaEdit onClick={handleEditEmail} name="email" className='edit_icon_profile'/></h3>
                 </div>}

               <p>Your Phone Number</p>

                  {clickedNumber?
                   <div className='after_edit'>
                      <input type="text" onChange={handleChange} name="number" value={editvalue.number} />
                      <FaCheck onClick={saveEditNumber} size={"1.3rem"} className='submit_edit'/> 
                    </div>:
                    <div className='indi'> 
                      <h3>{props.userInfo.phoneNum}<FaEdit onClick={handleEditNumber} name="number" className='edit_icon_profile'/></h3>
                    </div>}
               
               </div>
             
           </div>
           </div>  
        </div> 
        
    </div>

  




    // <body className="body-index">
    // <Navbar logedinUser={username}/>
    //   <div  className="container-fluid h-100">
    //     <div className="row justify-content-center h-100">
    //       <div className="col-md-8 col-sm-8 col-xl-6 chat">
    //         <div class="card card-main">
    //         <img src='https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg' className="rounded-circle profile_img"/>
            
        
    //         </div>  
    //       </div> 
    //     </div>
    //   </div>
    // </body>
//     <body classname="body-index" id="root">
//     <body class="body-index">
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <a class="navbar-brand" href="#">user2</a><div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div class="navbar-nav"><a class="nav-item nav-link" href="/home">Home</a></div></div><a class="nav-item nav-link" href="/login">Log Out</a>
//     <nav class="navbar navbar-light bg-light1"><a class="navbar-brand" href="/profile"><img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="d-inline-block align-top logged-in-img" alt=""/>logged in</a></nav></nav>
//     <div class="container-fluid h-100"><div class="row justify-content-center h-100">
//     <div class="col-md-4  col-sm-4 col-xl-3 chat" style="margin-bottom: 65px; margin-top: 16px;">
//     <div class="card mb-sm-3 mb-md-0 contacts_card"><div class="card-header"><div class="input-group"><input type="text" placeholder="Search..." name="" class="form-control search" value=""/>
//     <div class="input-group-prepend"><span class="input-group-text search_btn"><i class="fas fa-search"></i></span></div></div></div><div class="switch_div"><ui class="contacts">
//     </ui>
//     <li class="active"><div class="d-flex bd-highlight"><div class="img_cont"><img src="" class="rounded-circle user_img"/></div>
//     <div class="user_info"><span>user1</span></div></div></li></div></div><div class="card-footer"></div></div><div class="col-md-8 col-sm-8 col-xl-6 chat"><div class="card card-main"><h2>Welcome </h2><h2>Selcet or add a user to start chatting</h2>
//     </div></div></div></div></body></body>
  )
}
