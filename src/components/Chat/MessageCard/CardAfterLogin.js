export default function CardAfterLogin(props){
    return(
        <div className="card card-main">
             <h2>Welcome {props.username}</h2>
             <h2>Selcet or add a user to start chatting</h2>
           </div>
    )
}