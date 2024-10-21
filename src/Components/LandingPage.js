import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import About from './About';
import FaqsQuestions from './FaqsQuestions';
      

function LandingPage() {

  const ref1=useRef();
  const text=useRef();
  const button=useRef();
  

  useEffect(()=>{
    gsap.from(ref1.current,{
      scale:2,
      duration:3,
    })

    gsap.to(text.current,{
      y:100,
      duration:2,
      delay:2,
      opacity:1,
      scrub:true,
      lerp:1,
    })

  },[])

  // const goLogin=()=>{

  // }
  const goRegister=()=>{
    // gsap.to(button.current,{
    //   scale:0,
    //   duration:2,
    //   opacity:1,
    //   scrub:true,
    //   lerp:1,
    // })
  }


  const [time, setTime] = useState({
    days: 45,
    hours: 45,
    minutes: 45,
    seconds: 10,
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
  
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
  
        return { days, hours, minutes, seconds };
      });
    }, 1000);
  
  
    return () => clearInterval(interval);
  }, []);
  return (
   <>
   <Routes>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route path='/faqs' element={<FaqsQuestions/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>

   {/* main div */}
   <div ref={ref1} className='main w-screen min-h-screen bg-[url("/public/assets/citbackground.jpg")] flex flex-col'>

     {/* 1st image */}
    
    <div className='section1 w-full h-1/2'>

      <div className='w-screen flex justify-between'>
        {/* iste logo */}
        <img src='/assets/istelogo.png' className='2xl:w-[70px] 2xl:h-[70px] xl:w-[60px] xl:h-[60px]  lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] sm:w-[40px] sm:h-[40px] w-[40px] h-[40px] absolute top-3 left-6 hover:scale-125 transition-all '/>
        {/* navbar links */}
        <div className='absolute right-5 flex items-center gap-[15px] '>
        <Link to={"/about"} className='text-black font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[25px] xl:text-[25px] lg:text-[22px] md:text-[20px] sm:text-[20px] hover:underline underline-offset-8 transition-all'>ABOUT US</Link>
          <Link to={"/faqs"} className='text-black font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[25px] xl:text-[25px] lg:text-[22px] md:text-[20px] sm:text-[20px] hover:underline underline-offset-8 transition-all '>FAQS</Link>
        </div>
      </div>
<span ref={text} className='w-screen leading-tight absolute flex flex-col items-center justify-center opacity-40'>

<h1 className='citword text-center text-wrap xl:text-[160px] lg:text-[150px] md:text-[100px] sm:text-[80px] text-[60px] tracking-[7px] font-extrabold'>CIT</h1>

<h3 className='citword text-center whitespace-nowrap xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[26px] text-[13px] font-serif tracking-[2px]'>Cognitive intelligence test 7.0</h3>
</span>

      <img src='https://cdn.pixabay.com/photo/2021/09/18/23/47/working-6636475_1280.jpg' className='w-[100%] h-[50vh]'/>
      

      </div>

 {/* 2nd image */}
    <div className='section2 w-full h-1/2 uppercase flex flex-col items-center justify-center gap-[5vh] py-[3vh] mt-[10%]'>
    
   <div className=' flex  items-center gap-[3vh] justify-center'>
      {/* register and login button */}

    <Link to="/register" ref={button} onClick={goRegister} className='hoverabout px-[10px] py-[5px] no-underline text-black hover:text-pink-500 hover:font-bold bg-slate-500 rounded-sm opacity-70 hover:opacity-100 hover:tracking-widest'>Register</Link>

    {/* <Link to="/login" onClick={goLogin} className='hoverabout px-[10px] py-[5px] no-underline text-black hover:text-pink-500 hover:font-bold bg-slate-500 rounded-sm opacity-70 hover:opacity-100 hover:tracking-widest'>Login</Link> */}

    </div>

    {/* timer */}
  <div className='text-black flex items-center gap-2 '>
  <div className='border-[2px] sm:leading-[25px] leading-[15px]  text-center text-yellow-300 p-[10px] border-white hover:border-opacity-50 lg:text-[30px] sm:text-[18px] text-[10px] animate-pulse '>{time.days}<br/>Days</div>
     
  <div className='border-[2px] sm:leading-[25px] leading-[15px]  text-center text-yellow-300  p-[10px] border-white hover:border-opacity-50 lg:text-[30px] sm:text-[18px] text-[10px] animate-pulse '>{time.hours}<br/>Hours</div>
  <div className='border-[2px] sm:leading-[25px] leading-[15px]  text-center text-yellow-300 p-[10px] border-white hover:border-opacity-50 lg:text-[30px] sm:text-[18px] text-[10px] animate-pulse delay-75 '>{time.minutes}<br/>Min</div>
  <div className='border-[2px] sm:leading-[25px] leading-[15px] text-center text-yellow-300 p-[10px] border-white hover:border-opacity-50 lg:text-[30px] sm:text-[18px] text-[10px] animate-pulse delay-75 '>{time.seconds}<br/>Sec</div>
</div>

{/* social Media */}
<div className='flex flex-row items-center justify-center gap-[2vh] '>

<p className='uppercase xl:text-[25px] lg:text-[20px] md:text-[15px] sm:text-[15px] text-[13px]'>follow us on :</p>

<a href='https://www.instagram.com/istenitdgp/'><FaInstagramSquare className='text-pink-500 hover:rounded-[15px] hover:text-pink-700 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px] '/></a>

<a href=''><FaFacebookSquare className='text-blue-500 hover:rounded-[15px] hover:text-blue-700 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px]'/></a>

<a href='https://www.linkedin.com/company/istenitdgp/'><FaLinkedin className='text-blue-500 hover:rounded-[15px] hover:text-blue-700 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px]'/></a>

</div>

    </div>
   </div>

   

   </>
  )
}

export default LandingPage