import { BrowserRouter as Router, Routes, useParams, Route, UNSAFE_RouteContext } from "react-router-dom";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import ChatfterLogin from "./components/Chat/ChatfterLogin";
import Chat from "./components/Chat/Chat";
import Profile from "./components/Profile";
import { UsersProvider } from "./UsersContext";

function App() {
  
  return (

    <Router> 
         <UsersProvider>
         <Routes><Route path="/login" element={<Login />}/> </Routes>
         <Routes><Route path="/signup" element={<SignUp />}/> </Routes>
         <Routes><Route path="/home" element={<Home />}/> </Routes>
         <Routes><Route path="/profile/:username" element={<Profile/>}/> </Routes>
         <Routes><Route path="chat/:logedinUser/:otherUser" element={<Chat/>}   ></Route></Routes>
         <Routes><Route path="/chatAfterLogin/:logedinUser" element={<ChatfterLogin/>}/> </Routes>
         </UsersProvider>
    </Router> 
    
  );
}

export default App;
