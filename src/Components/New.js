import React, { useState } from 'react'
import { PiPlusBold } from 'react-icons/pi';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';


function New() {
    const [ansactive,setansactive]=useState(false);
    const [ansactive2,setansactive2]=useState(false);
    const [ansactive3,setansactive3]=useState(false);
    const [ansactive4,setansactive4]=useState(false);


    const showanswer1=()=>{
        setansactive(!ansactive);
    }
    const showanswer2=()=>{
        setansactive2(!ansactive2);
    }
    const showanswer3=()=>{
        setansactive3(!ansactive3);
    }
    const showanswer4=()=>{
        setansactive4(!ansactive4);
    }
  return (
    <>
    {/* landing page with nav */}
    <div className='landing w-screen h-screen '>

    <nav className='w-screen flex items-center justify-between px-[5vw] py-[3vh] '>
        <div className=''>
            <img src='/assets/istelogo.png' alt='lost' className='w-16 h-16 hover:scale-110 hover:skew-x-6'/>
        </div>
        <div className='flex items-center gap-[15px]  '>
        <Link className='md:text-[20px] vmd:text-[20px] no-underline underline-offset-4 hover:underline  transition-all focus:text-indigo-600 text-white rounded-sm hover:bg-none bg-black px-[10px] py-[5px] '>Register</Link>
        {/* <Link className='md:text-[20px] vmd:text-[20px] no-underline underline-offset-4 hover:underline  transition-all focus:text-indigo-600'>FAQS</Link> */}
        </div>
    </nav>

    {/* header text cit */}
    <div className='w-screen 2xl:leading-[150px] xl:leading-[170px] lg:leading-[130px] md:leading-[90px] sm:leading-[75px] mb:leading-[40px] vmd:leading-[35px] xl:mt-[5%] lg:mt-[7%] md:mt-[5%] sm:mt-[25%] mb:mt-[10%] vmd:mt-[12%] '>
    <h1 className='citword bg-center text-center text-wrap xl:text-[160px] lg:text-[140px] sm:text-[90px] md:text-[100px] mb:text-[45px] vmd:text-[45px] text-[20px] tracking-[1px] font-extrabold uppercase '>Cognitive</h1>
    <h1 className='citword bg-center text-center text-wrap xl:text-[110px] lg:text-[95px] md:text-[65px] sm:text-[60px] mb:text-[35px] vmd:text-[20px] vmd:tracking-[3px] text-[60px] tracking-[7px] font-extrabold uppercase '>intelligence</h1>
    <h1 className='citword bg-center text-center text-wrap xl:text-[160px] lg:text-[150px] md:text-[100px] sm:text-[80px] mb:text-[45px] vmd:text-[30px] text-[60px] tracking-[7px] font-extrabold uppercase '>test</h1>
    </div>
    
    {/* bottom white section with rows having multiple div flex property */}
    <div className='w-screen h-[30vh]     '>
        {/* 1st row */}
        <div className='w-screen h-[7vh] absolute bottom-[17vh] flex justify-between'>
            <div className='w-[6vw] bg-white '></div>
            <div className='w-[10vw] bg-white'></div>
        </div>

    {/* 2nd row */}
    <div className='w-screen h-[4vh] bottom-[13vh]  absolute flex  '>
        <div className='w-[10vw] bg-white '></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw]  '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw]  '></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] bg-white'></div>
    </div>

    {/* 3rd row */}
    <div className='w-screen h-[5vh] bottom-[8vh] bg-white absolute flex  '>
        <div className='w-[10vw]  '></div>
        <div className='w-[10vw] bg-green-400'></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] bg-green-400'></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
    </div>
    {/* 4th row */}
    <div className='w-screen h-[8vh] bottom-0 bg-white absolute flex '>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] bg-green-400'></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
    </div>

    </div>
    </div>


{/* about us section */}
    <div>

    </div>

{/* register sextion */}
    <div className='grid md:grid-cols-2 grid-cols-1 gap-[5vh] place-items-center  px-[10vw] '>
        
        <div className='flex flex-col gap-[4vh]  '>
        <motion.p transition={{duration:5}} whileInView={{opacity:1}} className='opacity-0 lg:text-[60px] md:text-[40px] sm:text-[35px] mb:text-[30px] vmd:text-[26px]  mt-[10%]  '><mark>Now's the time; now's the hour-<br/>Hactober is On! </mark></motion.p>
        <motion.p transition={{duration:5}} whileInView={{opacity:1}} className='opacity-0 lg:text-[20px] md:text-[20px] sm:text-[20px] mb:text-[20px] text-[15px] vmd:leading-[15px]  '>Register and start contributing your four pull/merge requests today!</motion.p>
        </div>
        <button className='px-[10px] text-nowrap py-[6px] text-white font-bold bg-blue-600 rounded-b-3xl hover:rounded-full transition-all '>Register for CIT</button>
    </div>

        <div className='w-screen md:mt-[3%] '>
            <img src='https://hacktoberfest.com/_next/static/media/sloan-the-sloth.8ed4b34d.svg' className=''/>
        </div>
    <div className='w-screen h-[6vh] bg-pink-500'></div>

{/* dotted line */}
<div className='w-screen bg-white overflow-hidden h-[5vh] text-black'>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
    {/* awards section */}
    <div className='bg-black'>

        {/* row */}
        <div className='w-screen h-[3vh] bg-black  flex '>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
    </div>
        {/* row */}
        <div className='w-screen h-[5vh] bg-black  flex '>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
    </div>
        {/* row */}
        <div className='w-screen h-[3vh] bg-black  flex '>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
        <div className='w-[10vw] bg-white'></div>
    </div>
        {/* row */}
    <div className='w-screen h-[8vh] bg-black  flex '>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
    </div>
        <h1 className='px-[3vw]   '>Why Should you Join this ?</h1>
        <motion.p transition={{duration:5}} whileInView={{opacity:1}} className='opacity-0 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[22px] sm:text-[22px] text-[15px] px-[10px] text-center '>
    <motion.mark transition={{duration:5}} whileInView={{opacity:1}}>CIT 7.0</motion.mark> is one-of-a-kind opportunity for all aspiring students as we unveil exhilarating challenges of national standard over the realms of basic mathematical aptitude, logical & verbal reasoning, and data interpretation. Not only does CIT implant an idea of various acclaimed aptitude tests like <motion.mark transition={{duration:5}} whileInView={{opacity:1}}>CAT</motion.mark>, but our flagship event also never fails to provide a simulation of the overall screening procedure of the hiring companies. This is the most anticipated online event to compete for <motion.mark transition={{duration:5}} whileInView={{opacity:1}}>intellectual glory</motion.mark> among multitude of striving contestants.
    </motion.p>
    <div className=' flex items-center justify-center'>
    <img src='https://hacktoberfest.com/_next/static/media/ascii-participation.dfcfa767.svg' className='animate-pulse'/>
    </div>

    {/* row */}
    <div className='w-screen h-[6vh] bg-black mt-[5%] flex '>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
    </div>
    <div className='w-screen h-[3vh] bg-black flex '>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] '></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
        <div className='w-[10vw] landing'></div>
    </div>
    </div>

{/* about */}
    <div>
    <h1 className='text-center xl:text-[50px] lg:text-[50px] md:text-[45px] sm:text-[45px] uppercase leading-[49px] mt-[7%] tracking-[2px] first-letter:text-slate-600 xl:first-letter:text-[69px] lg:first-letter:text-[69px] sm:first-letter:text-[69px] md:first-letter:text-[69px] first-letter:text-[49px]'>schedule for cit test 7.0</h1>

    <h2 className='text-center  xl:text-[35px] lg:text-[35px] uppercase mt-[4%]'>preliminary round :</h2>
    <p className=' xl:text-[30px] lg:text-[30px] text-[20px] text-center px-[10px]'>Candidates can attempt CIT only once in any <br/>of three available slots</p>

    <div className='flex flex-wrap items-center justify-center  gap-[4vh] xl:text-[30px] lg:text-[30px] md:text-[20px] sm:text-[20px] text-[15px] px-[4vw] '>
        {/* <ul className='flex justify-around gap-[5vw] px-[3vw] leading-[20px]'>
        
        </ul> */}
        <li className='list-none'>
            <p className='font-bold italic text-black'>SLOT 1</p>10/09/2024<br/>(x:00 AM - x:yz AM)</li>
        <li className='list-none'>
            <p className='text-black font-bold italic'>SLOT 2</p>10/09/2024<br/>(x:00 AM - x:yz AM)</li>
        <li className='list-none'>
            <p className='text-black font-bold italic'>SLOT 3</p>10/09/2024<br/>(x:00 AM - x:yz AM)</li>
    </div>

    <div className='mt-[3%] px-[10px]'>
        <h1 className='uppercase text-center text-black'>final round</h1>

        <div className='flex items-center justify-center flex-col text-center xl:text-[30px] lg:text-[30px] text-[20px]'>
        <p className=' '>Candidates selected for finale round will receive a mail with details</p>
        <li className='text-center'>Final : MONTH DAY YEAR (TIME - TIME)</li>
        </div>

    </div>

    </div>


        {/* spotlight */}
    <div className='grid md:grid-cols-2 grid-cols-1 gap-[5vh] place-items-center mt-[10%] px-[10vw]'> 
        <motion.div transition={{duration:5}} whileInView={{opacity:1}} className='lg:text-[100px] md:text-[70px] sm:text-[60px] mb:text-[50px] vmd:text-[38px] hover:tracking-wider transition-all hover:translate-x-2 '><motion.mark transition={{duration:5}} whileInView={{opacity:1}} className='opacity-0 px-[8px] '>Event </motion.mark><motion.mark transition={{duration:5}} whileInView={{opacity:1}} className='opacity-0 px-[8px] '>Spotlight </motion.mark></motion.div>
        <div className='sm:text-[30px] sm:leading-[40px] vmd:text-[20px] '><p>Events that bring the community together to learn and explore are a cornerstone of Hacktoberfest. Save these dates and come connect with other lovers of open source!</p>
        </div>
    </div>

    <div className='w-screen overflow-hidden h-[5vh] '>
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    </div>


    {/* faqs section */}
<div className='landing'>
    {/* heading */}
    <h1 className=' text-center text-wrap 2xl:text-[120px] xl:text-[110px] lg:text-[90px] md:text-[80px] sm:text-[70px] vmd:text-[40px] sm:leading-[76px] vmd:leading-[50px] text-[46px] text-black leading-[70px] font-extrabold py-[10vh] '>Frequently Ask Questions</h1>

<div className='w-screen flex flex-col gap-[20px] '>

{/* Question 1 */}
<div className='min-h-[7vh] hover:bg-gradient-to-tr from-slate-400 to-indigo-500 transition-all py-4'>

<div className="flex items-center justify-between 2xl:gap-[5vw] xl:gap-[5vw] lg:gap-[5vw] md:gap-[5vw] sm:gap-[5vw] gap-[5vw] 2xl:px-[15] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]">
   <div className='flex flex-col'>
   <h1 className='text-black 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] text-[20px] leading-[20px]'>What is CIT 7.0</h1>
    {ansactive && 
    <p className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[17px]'><mark>Cit 7.0</mark> is an online quiz test which has multiple rounds to go in final rounds</p>}
   </div>
    <PiPlusBold onClick={showanswer1} className='2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[60px] sm:text-[60px] text-[30px] text-black font-bold'/>
    </div>
</div>

<div className='w-screen h-[2px] bg-slate-600'></div>
{/* Question 2 */}
<div className='min-h-[7vh] hover:bg-gradient-to-tr from-slate-400 to-indigo-500 transition-all py-4'> 
<div className="flex items-center justify-between 2xl:gap-[5vw] xl:gap-[5vw] lg:gap-[5vw] md:gap-[5vw] sm:gap-[5vw] gap-[5vw] 2xl:px-[15] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]">
   <div className='flex flex-col'>
   <h1 className='text-black 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] text-[20px] leading-[20px] '>When does it happen ?</h1>
    {ansactive2 && 
    <p className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[17px]'>It's Frequency is <mark>one</mark> while a year and it happens in Nov - Dec</p>}
   </div>
    <PiPlusBold onClick={showanswer2} className='2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[60px] sm:text-[60px] text-[30px] focus:text-red-500 text-black font-bold'/>
    </div>
</div>

<div className='w-screen h-[2px] bg-slate-600'></div>
{/* Question 3 */}
<div className='min-h-[7vh] hover:bg-gradient-to-tr from-slate-400 to-indigo-500 transition-all py-4'>
<div className="flex items-center justify-between 2xl:gap-[5vw] xl:gap-[5vw] lg:gap-[5vw] md:gap-[5vw] sm:gap-[5vw] gap-[5vw] 2xl:px-[15] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]">
   <div className='flex flex-col'>
   <h1 className='text-black 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] text-[20px] leading-[20px] '>Who conducts it ?</h1>
    {ansactive3 && 
    <p className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[17px]'>It's Frequency is year and it happens in Nov - Dec</p>}
   </div>
    <PiPlusBold onClick={showanswer3} className='2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[60px] sm:text-[60px] text-[30px] focus:text-red-500 text-black font-bold'/>
    </div>
</div>


<div className='w-screen h-[2px] bg-slate-600'></div>
{/* Question 4 */}
<div className='min-h-[7vh] hover:bg-gradient-to-tr from-slate-400 to-indigo-500 transition-all py-4'>
<div className="flex items-center justify-between 2xl:gap-[5vw] xl:gap-[5vw] lg:gap-[5vw] md:gap-[5vw] sm:gap-[5vw] gap-[5vw] 2xl:px-[15] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]">
   <div className='flex flex-col'>
   <h1 className='text-black 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] text-[20px] leading-[20px] '>Who conducts it ?</h1>
    {ansactive4 && 
    <p className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[17px]'>It's Frequency is year and it happens in Nov - Dec</p>}
   </div>
   <PiPlusBold onClick={showanswer4} className='2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[60px] sm:text-[60px] text-[30px] focus:text-red-500 text-black font-bold'/>
    </div>
</div>

    
    <div className='w-screen h-[2px] bg-slate-600'></div>

    
        </div>
    </div>

    

    <div>
        

        {/* foolow flex */}
    <div className='w-screen bg-black flex justify-start sm:gap-[10vw] gap-[8vw] px-[10vw] py-[10vh] '>
        <div><h1 className='sm:text-[40px] vmd:text-[20px]   '>Follow on</h1>
        <div className='overflow-hidden animate-pulse'>..............</div>
        <div className='flex flex-col gap-[3vh]  mt-[5%]'>
        <a href='' className='no-underline hover:underline underline-offset-4 hover:text-yellow-300 sm:text-[25px] vmd:text-[15px]'>Instagram</a>
        <a href='' className='no-underline hover:underline underline-offset-4 hover:text-yellow-300 sm:text-[25px] vmd:text-[15px]'>Facebook</a>
        <a href='' className='no-underline hover:underline underline-offset-4 hover:text-yellow-300 sm:text-[25px] vmd:text-[15px]'>LinkedIn</a>
        </div>
        </div>
        <div><h1 className='sm:text-[40px] vmd:text-[20px]'>Contact Us</h1>
        <div className='overflow-hidden animate-pulse'>....................</div>
        <div className='flex flex-col gap-[3vh] mt-[5%]  '>
        <a href='' className='no-underline hover:underline underline-offset-4 sm:text-[25px] vmd:text-[15px]  '>Phone No.<br/><p className='text-green-600 no-underline hover:no-underline'>ABCDEGFHIJ</p></a>
        <a href='' className='no-underline hover:underline underline-offset-4 sm:text-[25px] vmd:text-[15px]  '>E-Mail<br/><p className='text-green-600 no-underline hover:no-underline'>ABCDE@gmail.com</p></a>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default New

// fill: url(#a);
//     d: path("M 1027.1 128.927 c -0.8 0 -1.49 -0.277 -2.04 -0.866 c -0.56 -0.554 -0.87 -1.247 -0.87 -2.043 c 0 -0.797 0.28 -1.489 0.87 -2.043 c 0.55 -0.554 1.24 -0.866 2.04 -0.866 c 0.79 0 1.48 0.277 2.04 0.866 c 0.55 0.554 0.86 1.246 0.86 2.043 c 0 0.796 -0.28 1.489 -0.86 2.043 c -0.56 0.554 -1.25 0.866 -2.04 0.866");

//     fill: url(#a);
//     d: path("M 1027.1 128.927 c -0.8 0 -1.49 -0.277 -2.04 -0.866 c -0.56 -0.554 -0.87 -1.247 -0.87 -2.043 c 0 -0.797 0.28 -1.489 0.87 -2.043 c 0.55 -0.554 1.24 -0.866 2.04 -0.866 c 0.79 0 1.48 0.277 2.04 0.866 c 0.55 0.554 0.86 1.246 0.86 2.043 c 0 0.796 -0.28 1.489 -0.86 2.043 c -0.56 0.554 -1.25 0.866 -2.04 0.866");

//     fill: url(#c);
//     d: path("M 1027.1 46.855 c -0.8 0 -1.49 -0.277 -2.04 -0.866 c -0.56 -0.554 -0.87 -1.247 -0.87 -2.044 s 0.28 -1.489 0.87 -2.043 c 0.55 -0.554 1.24 -0.866 2.04 -0.866 c 0.79 0 1.48 0.277 2.04 0.866 c 0.55 0.554 0.86 1.247 0.86 2.043 c 0 0.797 -0.28 1.49 -0.86 2.044 c -0.56 0.554 -1.25 0.866 -2.04 0.866");