import React from 'react'

export default function ChatPage() {
  return (
    <body className="body-index">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
        <a className="navbar-brand" href="#"> userFullName </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            
            <a className="nav-item nav-link" href="#">Home</a>
            
            
          </div>
        </div>
        <a className="nav-item nav-link" href="/logout">Log Out</a>
        <nav className="navbar navbar-light bg-light1">
            <a className="navbar-brand" href="/profile">
              <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="d-inline-block align-top logged-in-img" alt=""/>
              logged in
            </a>
          </nav>
    </nav>

    <div className="container-fluid h-100">
        <div className="row justify-content-center h-100">
            <div className="col-md-4 col-xl-3 chat">
               <div className="card mb-sm-3 mb-md-0 contacts_card">
                <div className="card-header">
                    <div className="input-group">
                        <input type="text" placeholder="Search..." name="" className="form-control search"/>
                        <div className="input-group-prepend">
                            <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                        </div>
                    </div>
                </div>
                <div className="card-body contacts_body">
                    <ui className="contacts"/>
                    <li className="active">
                        <div className="d-flex bd-highlight">
                            <div className="img_cont">
                                <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img"/>
                                <span className="online_icon"></span>
                            </div>
                            <div className="user_info">
                                <span>user1</span>
                                <p> is online</p>
                            </div>
                        </div>
                    </li>
                    
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
            <div className="col-md-8 col-xl-6 chat">
                <div className="card">
                    <div className="card-header msg_head">
                        <div className="d-flex bd-highlight">
                            <div className="img_cont">
                                <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img"/>
                                <span className="online_icon"></span>
                            </div>
                            <div className="user_info">
                                <span>Chat with </span>
                                <p>100</p>
                            </div>
                            <div className="video_cam">
                                <span><i className="fas fa-video"></i></span>
                                <span><i className="fas fa-phone"></i></span>
                            </div>
                        </div>
                        <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
                        <div className="action_menu">
                            <ul>
                                <li><i className="fas fa-user-circle"></i> View profile</li>
                                <li><i className="fas fa-users"></i> Add to close friends</li>
                                <li><i className="fas fa-plus"></i> Add to group</li>
                                <li><i className="fas fa-ban"></i> Block</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body msg_card_body">

                        
                        <div className="d-flex justify-content-start mb-4">
                            <div className="img_cont_msg">
                                <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
                            </div>
                            
                            <div className="msg_cotainer">
                                fsdfsdfsdf
                                <span className="msg_time">2123</span>
                            </div>
                        </div>
                       
                        <div className="d-flex justify-content-end mb-4">
                            <div className="msg_cotainer_send">
                                sdfsdfsdfsdfsd
                                <div className="block"></div>
                                <span className="msg_time_send">02:754</span>
                            </div>
                            <div className="img_cont_msg">
                             <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
                            </div>
                        </div>
                        
                        
                    </div>

                 <form action="/send-messge/<%=username%>" method="post">
                    <div className="card-footer">
                        <div className="input-group">
                            <div className="input-group-append">
                                <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                            </div>
                            <textarea name="message" className="form-control type_msg" placeholder="Type your message..."></textarea>
                            <div className="input-group-append">
                            <button className="input-group-text send_btn" type="submit"><i className="fas fa-location-arrow"></i></button>
                                
                            </div>
                        </div>
                    </div>
                 </form>
                </div>
            </div>
        </div>
    </div>
</body>
  )
}
