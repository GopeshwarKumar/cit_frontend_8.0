import React, { useEffect, useState } from 'react'
import {  FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

      

function LandingPage() {

  // const userName=localStorage.getItem('name')
    const userEmail=localStorage.getItem('email')
    const [message, setmessage] = useState()
  
        useEffect(()=>{
          axios.post(`${process.env.REACT_APP_SECRET_KEY}/checkuser`,{userEmail}).then(res =>{
            setmessage(res.data.message)
            if(res.status===200){
              toast.warn(res.data.message)
            }
          }).catch(err=>{
  
          }).finally(final=>{
  
          })
  },[])


  // const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
  }
  return (
   <>
   <ToastContainer className={`text-[15px]`}/>
   <Navbar/>
   <div>

    <span className='w-screen leading-tight flex flex-col items-center justify-center opacity-100 sm:mt-[5%]'>

    <h1 className='citword text-center text-wrap lg:text-[150px] sm:text-[130px] mb:text-[90px] text-[60px] tracking-[7px] font-extrabold flex items-center justify-center'>CIT</h1>

    <h3 className='citword text-center whitespace-nowrap xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[26px] mb:text-[22px] text-[13px] font-serif text-black font-extrabold tracking-[2px]'>Cognitive Intelligence Test 2.0</h3>
    </span>
    

   <div className='w-screen flex flex-col items-center justify-center absolute top-[70%]'>
    {message==='User has appeared for test !' ? (<p className='flex items-center flex-col '>
      <Link to="/leaderboard" className={`group text-[20px] px-[10px] py-[2px] no-underline font-bold text-green-600 hover:text-blue-700 hover:font-bold bg-[#f5deb3] rounded-sm opacity-70 hover:opacity-100 hover:tracking-wider transition-all`} onClick={handleClick}>
      <p className='group-hover:text-[0] transition-all duration-150'>Check Score</p>
      <p className='group-hover:text-[20px] text-[0] flex items-center gap-2 transition-all duration-150'>
        Go <FaArrowRight className=''/>
      </p>
      </Link>
    </p>) :(<Link to="/startquiz" className={` px-[10px] py-[5px] no-underline text-yellow-300 hover:text-pink-700 hover:font-bold bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-sm opacity-70 hover:opacity-100 hover:tracking-wider transition-all`} onClick={handleClick}>
    Start Quiz
    </Link>)}

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


   </>
  )
}

export default LandingPage