import React,{useState, useEffect, useContext} from 'react'
import Contacts from './Contacts'
import { axiosInstance } from '../../config';
import AddContacts from './addContacts'
import { FiXCircle} from "react-icons/fi";
import { UsersContext } from '../../UsersContext'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../UseFetch';

export default function ContactsBody(props) {

  const {data, laoding} = useFetch("/getChat/user1/user3")
    let navigate = useNavigate()
    const allUsers = useContext(UsersContext)
    const [contacts, setContacts] = useState([])
    const [strartTyping, setStartTyping] = useState(false)
    const [isAfriend, setIsAfriend] = useState(false)  
    const [searchValue, setsearchValue] = useState("")
    const [usernames, setUsernames] = useState([])
    const [test, setTest] = useState([])
    const [filterUsers, setFilterUsers] = useState([])
    const [clickedForAdd, setClickedForAdd] = useState(false)
    const logedinUser = props.logedinUser
    const contact = props.contact
    const handleClick = props.ifClicked
    
    useEffect(()=>{ 
      axiosInstance.get(`/getContacts/${logedinUser}`).then(resp => {
          setContacts(resp.data);
      })  
    })

    const clickedToAdd = (ans)=>{
        if(ans === "true"){
          setStartTyping(false)
          setsearchValue("")
          setClickedForAdd(true)
          setTimeout(()=>{setClickedForAdd(false)}, 3000)
      
        }
      
      }
    const handleChange = (event)=>{
        const {name, value} = event.target
        const arr = []
        setsearchValue(value)
        setStartTyping(true)
        var check = false
        console.log(value);
        if(value === ""){
        setFilterUsers([])
        setStartTyping(false)
        }else{

            setFilterUsers(
            allUsers.filter(user=>{
                contacts.map((ele)=>{
                  if((ele.username === user.username)){
                    check = true
                  }    
                })
                if(check === false){
                  return user.username.toLowerCase().includes(searchValue.toLowerCase()) && user.username !== logedinUser
                }else{
                  check = false
                }  
            })
            )
            // setFilterUsers(
            // arr.filter(user=>{
            //   return user.username.toLowerCase().includes(searchValue.toLowerCase()) && user.username !== logedinUser
            // })
            // )
        }
      
    }

  
  
  const closeSearch = ()=>{
    
    setFilterUsers([])
    setStartTyping(false)
    setsearchValue("")
  }
  const handleSubmit = (e)=>{
    e.preventDefaulte()
  }

  function closeAlert(){
    setClickedForAdd(false)
    
  }

  return (
    <div className="col-md-4  col-sm-4 col-xl-3 chat" style={{marginBottom: "65px", marginTop: "16px"}}>
        <div className="card mb-sm-3 mb-md-0 contacts_card">
          <div className="card-header">
              <div className="input-group">
              
                  <input onChange={handleChange} value={searchValue} type="text" placeholder="Search..." name="" className="form-control search" />
                  
                  <div  className="input-group-prepend">
                      <span  className="input-group-text search_btn" >{strartTyping? <FiXCircle onClick={closeSearch} size={"1.3rem"}/> :<i className="fas fa-search"></i> }</span>
                  </div>
              </div>
          </div>
          <div class="card-body contacts_body">
          {clickedForAdd && <div onclick={closeAlert} style={{backgroundColor: "green"}} className="alert">
              <span  className="closebtn"></span>
              User Added Sucessfully
            </div> }
            {strartTyping? filterUsers.map(user=>  <AddContacts checkWhenAdd={clickedToAdd} isAfriend={isAfriend} username={logedinUser} userToAdd={user.username} profileImg={user.profilePic} />):
            contacts.map(ele=> <Contacts profilepic={ele.profilePic}  contact={ele.username} whenClicked={handleClick} logedinUser={logedinUser}/>)}
        </div>
                
        </div>
        <div className="card-footer"></div>
    </div>
        
  )
}
