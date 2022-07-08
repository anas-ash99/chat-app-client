import React from 'react'
import ReactDOM from 'react-dom/client';
export default function DotsNav(props) {
 
 const style={
    zIndex: 1,
    position: "absolute",
    padding: "15px 0",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    borderRadius: "15px",
    top: "30px",
    right: "15px"}

  return (
    <div className="action_menu">
            <ul>
                <li><i className="fas fa-user-circle"></i> View profile</li>
                <li><i className="fas fa-users"></i> Add to close friends</li>
                <li><i className="fas fa-plus"></i> Add to group</li>
                <li><i className="fas fa-ban"></i> Block</li>
           </ul>
    </div>
  )
}
