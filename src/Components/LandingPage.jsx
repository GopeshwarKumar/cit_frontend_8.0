import gsap from 'gsap';
import {motion} from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import {  FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { Link, useNavigate} from 'react-router-dom';
      

function LandingPage() {
  const navigate=useNavigate()
  useEffect(()=>{
    const token=localStorage.getItem("token")
  if(!token){
    navigate("/login")
  }else{
    navigate("/home")
  }
  },[])

  const ref1=useRef();
  const text=useRef();
  const button=useRef();
  
// gsap
  useEffect(()=>{
    gsap.from(ref1.current,{
      scale:2,
      duration:0.7,
    })

    gsap.to(text.current,{
      y:100,
      duration:1,
      delay:0.5,
      opacity:1,
      scrub:true,
      lerp:1,
    })

  },[])


  const [event, setevent] = useState("")
  const [time, setTime] = useState({
    days: 0,
    hours: 2,
    minutes: 1,
    seconds: 10,
  });
  
  // timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if(seconds<1){
          seconds=59;
          minutes--
        }
        else{
          seconds--
        }
        if(minutes<1){
          hours--
          minutes=59
        }
        if(days<1 && hours<1 && minutes<1){
          minutes=0
        }
        if(hours<1){
          days--
          // hours=23
        }
        if(days<1 && hours<1){
          hours=0
        }
        if(days<1){
          days=0
        }
        if(days<1 && hours<1 && minutes<1 && seconds<1){
          setevent("Event has Started")

        }

  
        return { days, hours, minutes, seconds };
      });
    },1000);
    return () => clearInterval(interval);
  }, [])

  const [open, setopen] = useState(false)
  const openhamburgerMenu=()=>{
    setopen(true)
  }
  const closehamburgerMenu=()=>{
    setopen(false)
  }

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(false); // Set the button to active when clicked
    localStorage.setItem("startbutton","hidden")
  };
  useEffect(()=>{
    const aaa=localStorage.getItem("startbutton")
  if(aaa==="hidden"){
    setIsActive(false)
  }
  },[])
  // localStorage.clear()
  return (
   <>
   {/* main div */}
   <div ref={ref1} className='main w-screen min-h-screen bg-[url("/public/assets/citbackground.jpg")] flex flex-col'>

     {/* 1st image */}
    
    <div className='section1 w-full h-1/2'>

      <nav className='w-screen flex justify-between'>
        {/* iste logo */}
        <img src='/assets/istelogo.png' className='2xl:w-[70px] 2xl:h-[70px] xl:w-[60px] xl:h-[60px]  lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] sm:w-[40px] sm:h-[40px] w-[40px] h-[40px] absolute top-3 left-6 hover:scale-125 transition-all '/>
        {/* hamburger links */}
          {/* navlinks */}
        <div className='absolute right-5  flex items-center gap-[10px] '>
        <motion.a href={"/about"} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='vmd:hidden sm:block font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-blue-700 hover:underline underline-offset-8 transition-all'>ABOUT US</motion.a>
          <motion.a href={"/faqs"} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='vmd:hidden sm:block font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-blue-700 hover:underline underline-offset-8 transition-all '>FAQS</motion.a>
          <motion.a href={"/leaderboard"} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='vmd:hidden sm:block font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-blue-700 hover:underline underline-offset-8 transition-all '>LeaderBoard</motion.a>
          <motion.a href={"/profile"} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='vmd:hidden sm:block font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-blue-700 hover:underline underline-offset-8 transition-all '>Profile</motion.a>
          {open===true ? <GiCrossMark onClick={closehamburgerMenu} className='m-4 cursor-pointer'/>  : <div onClick={openhamburgerMenu} className='vmd:block sm:hidden cursor-pointer duration-200 mb:mt-4 vmd:mt-2'>
            <div className='w-6 h-1 bg-yellow-300 m-[2px]'></div>
            <div className='w-6 h-1 bg-white m-[2px]'></div>
            <div className='w-6 h-1 bg-yellow-300 m-[2px]'></div>
          </div> }
        </div>
        {/* mobile phones */}
        {open &&<div className='w-screen flex items-center gap-[10px] duration-200'>
          
        <div className='w-screen flex flex-col items-center justify-center bg-black p-10'>
        <motion.a  href={"/about"} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.7}} className='font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-blue-700 transition-all cursor-pointer'>About Us</motion.a>
          <motion.a href={"/faqs"} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className='font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-blue-700 transition-all  cursor-pointer'>Faqs</motion.a>
          <motion.a href={"/leaderboard"} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.9}} className='font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-blue-700 transition-all cursor-pointer'>LeaderBoard</motion.a>
          <motion.a href={"/profile"} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className='font-bold no-underline py-[5px] px-[10px] text-[15px] 2xl:text-[15px] lg:text-[12px] md:text-[12px] sm:text-[12px] text-white hover:text-blue-700 transition-all  cursor-pointer'>Profile</motion.a>
        </div>
        </div>}
      </nav>
      
<span ref={text} className='w-screen leading-tight absolute flex flex-col items-center justify-center opacity-40'>

<h1 className='citword text-center text-wrap xl:text-[160px] lg:text-[150px] md:text-[100px] sm:text-[100px] mb:text-[90px] text-[60px] tracking-[7px] font-extrabold'>CIT</h1>

<h3 className='citword text-center whitespace-nowrap xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[26px] mb:text-[22px] text-[13px] font-serif tracking-[2px]'>Cognitive intelligence test 7.0</h3>
</span>

      <img src='https://cdn.pixabay.com/photo/2021/09/18/23/47/working-6636475_1280.jpg' className='w-[100%] h-[50vh]'/>
      

      </div>

    {/* 2nd image */}
    <div className='section2 w-full h-1/2 uppercase flex flex-col items-center justify-center gap-[5vh] py-[3vh] mt-[10%]'>
    
   <div className=' flex flex-col items-center justify-center'>
      {/* register and login button */}

    {/* <Link to="/startquiz" ref={button} className='hoverabout px-[10px] py-[5px] no-underline text-green-500 hover:text-pink-700 hover:font-bold bg-slate-800 rounded-sm opacity-70 hover:opacity-100 hover:tracking-widest'>Start Quiz</Link> */}

    { isActive && <Link to="/startquiz" ref={button} className={`hoverabout px-[10px] py-[5px] no-underline text-green-500 hover:text-pink-700 hover:font-bold bg-slate-800 rounded-sm opacity-70 hover:opacity-100 hover:tracking-widest `} onClick={handleClick}
>
  Start Quiz
</Link>}
<br/>
{localStorage.getItem("startbutton")==="hidden" ?<p className='text-center text-[15px] text-red-500 font-bold  '>You have attempted the QUIZ</p>:""}


    {/* <Link to="/login" onClick={goLogin} className='hoverabout px-[10px] py-[5px] no-underline text-black hover:text-pink-500 hover:font-bold bg-slate-500 rounded-sm opacity-70 hover:opacity-100 hover:tracking-widest'>Login</Link> */}

    </div>

    {/* timer */}
  <div className='text-black flex items-center gap-2 '>{event}<br/>
  <div className='border-[2px] sm:leading-[25px] leading-[15px]  text-center text-yellow-300 p-[10px] border-white lg:text-[30px] sm:text-[18px] text-[10px] animate-pulse hover:rounded-tr-3xl hover:border-opacity-50 duration-300'>{time.days}<br/>Days</div>
     
  <div className='border-[2px] sm:leading-[25px] leading-[15px]  text-center text-yellow-300  p-[10px] border-white lg:text-[30px] sm:text-[18px] text-[10px] animate-pulse hover:rounded-bl-3xl hover:border-opacity-50 duration-300'>{time.hours}<br/>Hours</div>
  <div className='border-[2px] sm:leading-[25px] leading-[15px]  text-center text-yellow-300 p-[10px] border-white lg:text-[30px] sm:text-[18px] text-[10px] animate-pulse hover:rounded-ee-3xl hover:border-opacity-50 duration-300'>{time.minutes}<br/>Min</div>
  <div className='border-[2px] sm:leading-[25px] leading-[15px] text-center text-yellow-300 p-[10px] border-white lg:text-[30px] sm:text-[18px] text-[10px] animate-pulse hover:rounded-tl-3xl hover:border-opacity-50 duration-300 '>{time.seconds}<br/>Sec</div>
</div>

{/* social Media */}
<div className='flex flex-row items-center justify-center gap-[2vh] '>

<p className='uppercase xl:text-[25px] lg:text-[20px] md:text-[15px] sm:text-[15px] text-[13px]'>follow us on :</p>

<a href='https://www.instagram.com/istenitdgp/'>
<FaInstagramSquare className='text-pink-700 hover:text-pink-500 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px] '/></a>

<a href=''>
  <FaFacebookSquare className='hover:text-blue-700 text-blue-500 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px]'/></a>

<a href='https://www.linkedin.com/company/istenitdgp/'>
<FaLinkedin className='hover:text-blue-700 text-blue-500 xl:text-[30px] lg:text-[50px] md:text-[30px] sm:text-[25px] text-[25px]'/></a>

</div>

    </div>
   </div>
   </>
  )
}

export default LandingPage