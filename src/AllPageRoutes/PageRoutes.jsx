import React, { lazy } from 'react'
import { Routes ,Route} from 'react-router-dom'
import NewPassword from '../Components/NewPassword'
import VerifyUser from '../Components/VerifyUser'

const AdminLogin=lazy(()=>import('../Admin/AdminLogin'))
const AdminRegister=lazy(()=>import('../Admin/AdminRegister'))
const AdminPanel=lazy(()=>import('../Admin/AdminPanel'))

const Login=lazy(()=>import("../Components/Login"))
const LandingPage=lazy(()=>import("../Components/LandingPage"))
const Register=lazy(()=>import("../Components/Register"))
const Quest=lazy(()=>import("../Components/Quest"))
const LeaderBoard=lazy(()=>import("../Components/LeaderBoard"))
const Profile=lazy(()=>import("../Components/Profile"))
const About=lazy(()=>import("../Components/About"))
const FaqsQuestions=lazy(()=>import("../Components/FaqsQuestions"))
const ForgoPassword=lazy(()=>import("../Components/ForgoPasswor"))

function PageRoutes() {  
        
  return (
   <>
   <Routes>
    <Route path="/adminloginpage" element={<AdminLogin/>} />
    <Route path="/AdminRegister" element={<AdminRegister/>} />
    <Route path="/AdminPanel" element={<AdminPanel/>} />


    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/forgetpassword" element={<ForgoPassword/>} />
    <Route path="/newpassword" element={<NewPassword/>} />
    <Route path="/verifyemail" element={<VerifyUser/>} />

    
    <Route path="/startquiz" element={localStorage.getItem("token") ? <Quest/>:<Login/>} />
    <Route path="/home" element={localStorage.getItem("token") ?<LandingPage/> : <Login/>} />
    <Route path="/faqs" element={localStorage.getItem("token") ? <FaqsQuestions/>:<Login/>} />
    <Route path="/about" element={localStorage.getItem("token") ? <About/>:<Login/>} />
    <Route path="/leaderboard" element={localStorage.getItem("token") ? <LeaderBoard/>:<Login/>} />
    <Route path="/profile" element={localStorage.getItem("token") ? <Profile/>:<Login/>} />
   </Routes>
   </>
  )
}

export default PageRoutes