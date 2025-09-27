import React from 'react'
// import { MdArrowBackIos } from 'react-icons/md'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function About() {
      const navigate=useNavigate()

      useEffect(()=>{
        if(!localStorage.getItem('email')){
          navigate('/')
        }
      },[])
  return (
    <div className=''>    
    <Navbar/>

    <h1 className='text-center lg:text-[100px] md:text-[90px] sm:text-[70px] text-[40px]'>About Us</h1>

    <h1 className='text-center lg:text-[50px] sm:text-[45px] uppercase sm:leading-[40px] leading-[30px] mt-[7%] tracking-[2px] first-letter:text-slate-600 sm:first-letter:text-[69px] first-letter:text-[49px] px-[5vw]'>cognitive intelligence<br/> test 2.0</h1>

    <p className='lg:text-[22px] sm:text-[18px] text-[15px] sm:px-[10vw] px-[20px] py-5 mt-[5%] '>
    <b>CIT 2.0</b> is one-of-a-kind opportunity for all aspiring students as we unveil exhilarating challenges of national standard over the realms of basic mathematical aptitude, logical & verbal reasoning, and data interpretation. Not only does CIT implant an idea of various acclaimed aptitude tests like <b>CAT</b>, but our flagship event also never fails to provide a simulation of the overall screening procedure of the hiring companies. This is the most anticipated online event to compete for <b>intellectual glory</b> among multitude of striving contestants.
    </p>

    {/* schedule  */}
    <div>
    <h1 className='text-center xl:text-[50px] lg:text-[50px] md:text-[45px] sm:text-[45px] uppercase sm:leading-[40px] leading-[30px] mt-[7%] tracking-[2px] first-letter:text-slate-600 sm:first-letter:text-[69px] first-letter:text-[49px] px-[5vw] '>schedule for cit test 2.0</h1>

    <h2 className='text-center  xl:text-[35px] lg:text-[35px] uppercase mt-[4%]'>preliminary round :</h2>
    <p className='lg:text-[30px] text-[20px] text-center px-[10px] md:leading-[30px] leading-[20px]'>Candidates can attempt CIT only once in any of <b>three</b> available slots</p>

    <div className='flex items-center justify-center mt-[4%] vmd:text-[15px] sm:text-[18px]'>
        <ul className='flex justify-around flex-wrap gap-[5vw] px-[3vw] leading-[20px]'>
        <li className='hover:scale-105 transition-all p-5 bg-slate-300 shadow-2xl shadow-slate-800 rounded-md'><p className=' text-center font-extrabold'>SLOT 1</p><br/>10-09-2024<br/><br/> 9:00 PM - 9:30 PM</li>
        <li className='hover:scale-105 transition-all p-5 bg-slate-300 shadow-2xl shadow-slate-800 rounded-md'><p className='font-extrabold text-center'>SLOT 2</p><br/>10-09-2024<br/><br/>9:00 PM - 9:30 PM</li>
        <li className='hover:scale-105 transition-all p-5 bg-slate-300 shadow-2xl shadow-slate-800 rounded-md'><p className='font-extrabold text-center'>SLOT 3</p><br/>10-09-2024<br/><br/>9:00 PM - 9:30 PM</li>
        </ul>
    </div>

    <div className='mt-[5%] px-[10px]'>
        <h1 className='uppercase text-center text-yellow-500'>final round</h1>

        <div className='flex items-center justify-center flex-col text-center xl:text-[30px] lg:text-[30px] text-[20px]'>
        <p className=' '>Candidates selected for finale round will receive a mail with details</p>
        <li className='text-center'>Final : 10-01-2024</li>
        </div>

    </div>

    </div>

    <h1 className='uppercase text-center mt-[5%] leading-[30px] vmd:text-[30px] px-[3vw]'>cash prizes worth <mark className='p-2 bg-slate-300 shadow-2xl shadow-slate-800 rounded-md'>8k</mark> for cit 2.0</h1>

    <h1 className='uppercase text-center mt-[4%]'>event sponsers</h1>
    
    <div className='flex items-center justify-around gap-[5vw] p-10'>
        <div className=' object-cover '>
            <img src='/assets/techbrain.webp' alt='lost' loading='lazy' className='h-[200px] hover:scale-105 transition-all hover:rounded-lg bg-white px-4 hover:py-1 '/>
        </div>
        <div className=' object-cover'>
            <img src='/assets/ims.jpg' alt='lost' loading='lazy' className='h-[200px] hover:scale-105 transition-all hover:rounded-lg'/>
        </div>
    </div>

    </div>
  )
}

export default About