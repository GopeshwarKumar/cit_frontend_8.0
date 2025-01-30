import React, { useState } from 'react'
import { PiPlusBold } from 'react-icons/pi';
import Navbar from './Navbar';

function FaqsQuestions() {
    const [ansactive,setansactive]=useState(false);
    const [ansactive2,setansactive2]=useState(false);
    const [ansactive3,setansactive3]=useState(false);


    const showanswer1=()=>{
        setansactive(!ansactive);
    }
    const showanswer2=()=>{
        setansactive2(!ansactive2);
    }
    const showanswer3=()=>{
        setansactive3(!ansactive3);
    }

// 
  return (
    <>
    {/* [url("/public/assets/citbackground.jpg")] */}
    <div className='bg-slate-800'>
    <Navbar/>
    <h1 className='mt-[5%] text-center text-wrap 2xl:text-[120px] xl:text-[110px] lg:text-[90px] md:text-[80px] sm:text-[70px] text-[46px] leading-[70px] font-extrabold'>Frequently Ask Questions</h1>

<div className='min-h-screen flex flex-col gap-[20px] mt-[10%] '>

{/* Question 1 */}
    <div className='min-h-[7vh] hover:bg-gradient-to-tr from-slate-900 to-indigo-500 transition-all py-4'>
    <div className="flex items-center justify-between 2xl:gap-[5vw] xl:gap-[5vw] lg:gap-[5vw] md:gap-[5vw] sm:gap-[5vw] gap-[5vw] 2xl:px-[15] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]">
       <div className='flex flex-col'>
       <h1 className='text-yellow-400 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] text-[20px] leading-[20px]'>What is CIT 7.0</h1>
        {ansactive && 
        <p className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[17px]'><mark>Cit 7.0</mark> is an online quiz test which has multiple rounds to go in final rounds</p>}
       </div>
        <PiPlusBold onClick={showanswer1} className='2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[60px] sm:text-[60px] text-[30px]'/>
        </div>
    </div>

    {/* Question 2 */}
    <div className='min-h-[7vh] hover:bg-gradient-to-tr from-cyan-500 to-indigo-500 transition-all py-4'> 
    <div className="flex items-center justify-between 2xl:gap-[5vw] xl:gap-[5vw] lg:gap-[5vw] md:gap-[5vw] sm:gap-[5vw] gap-[5vw] 2xl:px-[15] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]">
       <div className='flex flex-col'>
       <h1 className='text-yellow-400 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] text-[20px] leading-[20px] '>When does it happen ?</h1>
        {ansactive2 && 
        <p className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[17px]'>It's Frequency is <mark>one</mark> while a year and it happens in Nov - Dec</p>}
       </div>
        <PiPlusBold onClick={showanswer2} className='2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[60px] sm:text-[60px] text-[30px] focus:text-red-500'/>
        </div>
    </div>

    {/* Question 3 */}
    <div className='min-h-[7vh] hover:bg-gradient-to-tr from-slate-900 to-indigo-500 transition-all py-4'>
    <div className="flex items-center justify-between 2xl:gap-[5vw] xl:gap-[5vw] lg:gap-[5vw] md:gap-[5vw] sm:gap-[5vw] gap-[5vw] 2xl:px-[15] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]">
       <div className='flex flex-col'>
       <h1 className='text-yellow-400 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] text-[20px] leading-[20px] '>Who conducts it ?</h1>
        {ansactive3 && 
        <p className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[17px]'>It's Frequency is year and it happens in Nov - Dec</p>}
       </div>
        <PiPlusBold onClick={showanswer3} className='2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[60px] sm:text-[60px] text-[30px] focus:text-red-500'/>
        </div>
    </div>

    {/* Question 4 */}
    
        </div>
    </div>
    </>
  )
}

export default FaqsQuestions