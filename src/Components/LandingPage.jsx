import React, { useEffect, useState } from 'react'
import {  FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import ChatWithFreind from '../Notification/ChatWithFreind';

      

function LandingPage() {

  const navigate=useNavigate()

  // const userName=localStorage.getItem('name')
    const userEmail=localStorage.getItem('email')
    const [active, setactive] = useState(false)
    const [isActiveChatBox, setisActiveChatBox] = useState(false);
    const [activeQuizpopUp, setactiveQuizpopUp] = useState(false)

        
        useEffect(()=>{
          if(!localStorage.getItem('email')){
            navigate('/')
          }

          axios.post(`${process.env.REACT_APP_SECRET_KEY}/checkuser`,{userEmail},{ withCredentials: true }).then(res =>{
            console.log(res)
            if(res.status===200 && res.data.message==='User has appeared for test !'){
              toast.warn(res.data.message)
              setactive(true)
            }
          }).catch(err=>{
  
          }).finally(final=>{
            // setactive(true)
          })
  },[])


  const handleClick = () => {
  }
  return (
   <>
   <ToastContainer className={`text-[15px]`}/>
   <Navbar/>
   <div>

    <span className='w-screen leading-tight flex flex-col items-center justify-center opacity-100 sm:mt-[5%] vmd:mt-[10%]'>

    <h1 className='citword text-center text-wrap lg:text-[150px] sm:text-[130px] mb:text-[120px] vsm:text-[120px] text-[120px] tracking-[7px] font-extrabold flex items-center justify-center'>CIT</h1>

    <h3 className='citword text-center whitespace-nowrap xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[26px] mb:text-[22px] text-[13px] font-serif text-black font-extrabold tracking-[2px]'>Cognitive Intelligence Test 2.0</h3>
    </span>
    

   <div className='w-screen flex flex-col items-center justify-center absolute top-[70%]'>
    {active ===true &&<p className='flex items-center flex-col '>
      <Link to="/leaderboard" className={`group text-[20px] px-[10px] py-[2px] no-underline font-bold text-green-600 hover:text-blue-700 hover:font-bold bg-[#f5deb3] rounded-sm opacity-70 hover:opacity-100 hover:tracking-wider transition-all`} onClick={handleClick}>
      <p className='group-hover:text-[0] transition-all duration-150'>Check Score</p>
      <p className='group-hover:text-[20px] text-[0] flex items-center gap-2 transition-all duration-150'>
        Go <FaArrowRight className=''/>
      </p>
      </Link>
    </p>}
    {active ===false &&<p className={` px-[10px] py-[4px] no-underline text-black hover:text-pink-700 hover:font-bold bg-[#1cb3cb] hover:rounded-ee-3xl hover:rounded-ss-3xl opacity-70 hover:opacity-100 hover:tracking-wider transition-all duration-400 cursor-pointer`} onClick={()=>{setactiveQuizpopUp(true)}}>
    Start Quiz
    </p>}

    {activeQuizpopUp && <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Start Quiz</h2>
        <p className="mb-6 text-center text-black">Are you ready to begin the quiz?</p>
        <div className="flex justify-center gap-4 text-[17px]">
          <button onClick={()=>{setactiveQuizpopUp(false)}} className="bg-red-600 hover:bg-red-700 hover:tracking-wide transition-all duration-150 text-white font-medium py-1 px-4 rounded"
          >Cancel</button>
          <Link to="/startquiz" className="bg-green-600 no-underline hover:bg-green-700 hover:tracking-wide transition-all duration-150 text-white font-medium py-1 px-4 rounded">Start</Link>
        </div>
      </div>
    </div>}

    </div>

  {/* social Media */}
  <div className='w-screen flex flex-row items-center justify-center gap-[2vh] absolute sm:bottom-10 vmd:bottom-4'>

<p className='uppercase xl:text-[25px] lg:text-[20px] md:text-[15px] sm:text-[15px] text-[13px]'>follow us on :</p>

<Link to={"https://www.instagram.com/istenitdgp/"} target='blank' className='group flex items-center justify-center'>
<p className='text-[0] group-hover:text-[10px] transition-all duration-150 bg-slate-400 rounded-xl p-1 font-bold text-black absolute -translate-y-6'>Instagram</p>
<FaInstagramSquare className='text-pink-700 hover:text-pink-500 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px] '/></Link>

<Link target='blank' className='group flex items-center justify-center'>
<FaFacebookSquare className='hover:text-blue-700 text-blue-500 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px]'/>
<p className='text-[0] group-hover:text-[10px] transition-all duration-150 bg-slate-400 rounded-xl p-1 font-bold text-black absolute -translate-y-6'>Facebook</p>
</Link>

<Link to={'https://www.linkedin.com/company/istenitdgp/'} target='blank' className='group flex items-center justify-center'>
<p className='text-[0] group-hover:text-[10px] transition-all duration-150 bg-slate-400 rounded-xl p-1 font-bold text-black absolute -translate-y-6'>Linkedin</p>
<FaLinkedin className='hover:text-blue-700 text-blue-500 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px]'/></Link>

</div>

   </div>
  

  <div className='w-screen flex items-center justify-center'>
    {isActiveChatBox===false ? <div className='w-[50px] h-[50px] text-[15px] font-bold rounded-full absolute bottom-5 right-5 cursor-pointer' onClick={()=>{setisActiveChatBox(true)}}></div> : <ChatWithFreind/> }
    
    {isActiveChatBox===true ? <div className='chatUIShape w-[50px] h-[50px] bg-[#c61e1e] text-center py-[14px] text-[15px] font-bold rounded-full absolute bottom-5 right-5 cursor-pointer hover:rotate-90 transition-all duration-150' onClick={()=>{setisActiveChatBox(false)}}>❌</div> : <div className='chatUIShape w-[50px] h-[50px] hover:opacity-85 transition-all duration-150 bg-[#7ad0a1] text-center py-[14px] text-[15px] font-bold rounded-full absolute bottom-5 right-5 cursor-pointer' onClick={()=>{setisActiveChatBox(true)}}>Chat</div>}


  </div>

   </>
  )
}

export default LandingPage