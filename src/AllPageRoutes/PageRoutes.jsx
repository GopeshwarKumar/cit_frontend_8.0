import React, { lazy } from 'react'
import { Routes ,Route} from 'react-router-dom'
import NewPassword from '../Components/NewPassword'

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
    <Route path="/" element={<Register />} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/startquiz" element={<Quest/>} />
    <Route path="/home" element={<LandingPage/>} />
    <Route path="/faqs" element={<FaqsQuestions/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/leaderboard" element={<LeaderBoard/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/forgetpassword" element={<ForgoPassword/>} />
    <Route path="/newpassword" element={<NewPassword/>} />
   </Routes>
   </>
  )
}

export default PageRoutes