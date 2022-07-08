import React, { useState } from 'react'

export default function MessageBottom(props) {
   
  return (
    <div className="card-footer">
    <div className="input-group">
        <div className="input-group-append">
            <span className="input-group-text attach_btn" style={{height: "60px"}}><i className="fas fa-paperclip"></i></span>
        </div>
        <textarea value={props.inputValue1} onChange={props.handleChange} name="message" className="form-control type_msg" placeholder="Type your message..."></textarea>
        <div className="input-group-append">
        <button onClick={props.click} className="input-group-text send_btn" type="submit" style={{height: "60px"}}><i className="fas fa-location-arrow"></i></button>
            
        </div>
    </div>
</div>

  )
}
