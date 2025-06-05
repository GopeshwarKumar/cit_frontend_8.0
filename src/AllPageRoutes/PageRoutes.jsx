import React, { lazy } from 'react'
import { Routes ,Route, useNavigate} from 'react-router-dom'
import NewPassword from '../Components/NewPassword'
import { useEffect } from 'react'

const AdminLogin=lazy(()=>import('../Admin/AdminLogin'))

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
  const navigate=useNavigate()
        useEffect(()=>{
          const token=localStorage.getItem("token")
        if(!token){
          navigate("/login")
        }
        },[])
  return (
   <>
   <Routes>
    <Route path="/adminloginpage" element={<AdminLogin/>} />


    <Route path="/" element={<Register />} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/forgetpassword" element={<ForgoPassword/>} />
    <Route path="/newpassword" element={<NewPassword/>} />

    
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