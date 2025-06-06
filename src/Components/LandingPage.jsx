import React, { useEffect, useState } from 'react'
import {  FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
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
            console.log(res)
            console.log(res.data.message)
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
   {/* main div */}
   <div className='main w-screen min-h-screen bg-[url(/public/assets/citbackground.jpg)] flex flex-col'>

     {/* 1st image */}
    
    <div className='section1 w-full h-1/2'>
      <Navbar/>
      
<span className='w-screen leading-tight absolute flex flex-col items-center justify-center opacity-40'>

<h1 className='citword text-center text-wrap xl:text-[160px] lg:text-[150px] md:text-[100px] sm:text-[100px] mb:text-[90px] text-[60px] tracking-[7px] font-extrabold'>CIT</h1>

<h3 className='citword text-center whitespace-nowrap xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[26px] mb:text-[22px] text-[13px] font-serif tracking-[2px]'>Cognitive intelligence test 2.0</h3>
</span>

      <img src='https://cdn.pixabay.com/photo/2021/09/18/23/47/working-6636475_1280.jpg' alt='lost' loading='lazy' className='w-[100%] h-[50vh]'/>
      

      </div>

    {/* 2nd image */}
    <div className='section2 w-full h-1/2 flex flex-col items-center justify-center gap-[5vh] py-[1vh] lg:mt-[5%] mt-[10%]'>
    
   <div className=' flex flex-col items-center justify-center'>
      {/* register and login button */}

    {/* <Link to="/startquiz" ref={button} className='hoverabout px-[10px] py-[5px] no-underline text-green-500 hover:text-pink-700 hover:font-bold bg-slate-800 rounded-sm opacity-70 hover:opacity-100 hover:tracking-widest'>Start Quiz</Link> */}

    {message==='User has appeared for test !' ? (<p className='flex items-center flex-col '>
      <Link to="/leaderboard" className={`text-[20px] px-[10px] py-[2px] no-underline text-yellow-300 hover:text-pink-700 hover:font-bold bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-sm opacity-70 hover:opacity-100 hover:tracking-wider transition-all`} onClick={handleClick}
>Check Score</Link>
      <p className='text-red-600 text-[16px] font-bold'>Appeared Test</p>
    </p>) :(<Link to="/startquiz" className={` px-[10px] py-[5px] no-underline text-yellow-300 hover:text-pink-700 hover:font-bold bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-sm opacity-70 hover:opacity-100 hover:tracking-wider transition-all`} onClick={handleClick}
>Start Quiz</Link>)}

    </div>

{/* social Media */}
<div className='flex flex-row items-center justify-center gap-[2vh] absolute bottom-10'>

<p className='uppercase xl:text-[25px] lg:text-[20px] md:text-[15px] sm:text-[15px] text-[13px]'>follow us on :</p>

<Link to={"https://www.instagram.com/istenitdgp/"} target='blank'>
<FaInstagramSquare className='text-pink-700 hover:text-pink-500 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px] '/></Link>

<Link target='blank'>
  <FaFacebookSquare className='hover:text-blue-700 text-blue-500 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px]'/></Link>

<Link to={'https://www.linkedin.com/company/istenitdgp/'} target='blank'>
<FaLinkedin className='hover:text-blue-700 text-blue-500 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px]'/></Link>

</div>

    </div>
   </div>
   </>
  )
}

export default LandingPage