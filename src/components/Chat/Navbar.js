import React from 'react'
import { url1, url2, emptyProfile } from './url'

export default function Navbar(props) {

 function imgSrc(){
  if(props.logeinUser = "user1"){
    return url1
  }else if(props.logedinUser === "user2"){
    return url2
  }else{
    return emptyProfile
  }
 }


 function toProfile(){
  props.goToProfile()
 }
  function handleSubmit(e){
    e.preventDefault()
  }
 const picUrl = props.pic

 const imgUrl = function(){
  if(picUrl === ""){
    return emptyProfile
  }else{
    return picUrl
  }
 }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
        <a className="navbar-brand" href="#">{props.logedinUser}</a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            
            <a className="nav-item nav-link" href="/home">Home</a>
            
            
          </div>
        </div>
        <a className="nav-item nav-link" href="/login">Log Out</a>
        <nav className="navbar navbar-light bg-light1">
            <a onClick={handleSubmit} className="navbar-brand" href="">
              <img onClick={toProfile} src={picUrl ===""? emptyProfile: picUrl } className="d-inline-block align-top logged-in-img" alt=""/>
              logged in
            </a>
          </nav>
    </nav>
  )
}
