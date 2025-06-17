import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import { IoIosArrowDropdownCircle } from "react-icons/io";
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
    <div className='bg-slate-900'>
    <Navbar/>
    <h1 className='mt-[5%] text-center text-wrap 2xl:text-[120px] xl:text-[110px] lg:text-[90px] md:text-[80px] sm:text-[70px] text-[46px] leading-[70px] font-extrabold'>Frequently Ask Questions</h1>

<div className='min-h-screen flex flex-col gap-[5vh] mt-[10%] '>

{/* Question 1 */}
    <div className='hover:shadow-2xl hover:shadow-slate-950 p-5'>
        <div className="flex items-center justify-between gap-[5vw] 2xl:px-[15vw] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]">
       <div onClick={showanswer1} className='w-screen flex items-center justify-between cursor-pointer'>
       <h1 className='text-yellow-400 sm:text-[25px] text-[20px] leading-[20px]'><mark className='p-1 rounded-md font-bold'>1.</mark> What is CIT 7.0 ?</h1>
       
       {ansactive ===false?<IoIosArrowDropdownCircle onClick={showanswer1} className='sm:text-[40px] text-[23px] font-extrabold'/> :
        <ImCross className='sm:text-[30px] text-[23px] text-red-600'/>}
       </div>
        
        </div>
        {ansactive && 
        <p className='mt-[2%] sm:text-[20px] text-[15px] 2xl:px-[15vw] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]'><mark className='p-1 rounded-md font-bold'>Cit 7.0</mark> is an online quiz test which has multiple rounds to go in final rounds.</p>}
    </div>

    {/* Question 2 */}
    <div className='hover:shadow-2xl hover:shadow-slate-950 p-5'>
        <div className="flex items-center justify-between gap-[5vw] 2xl:px-[15vw] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]">
       <div onClick={showanswer2} className='w-screen flex items-center justify-between cursor-pointer'>
       <h1 className='text-yellow-400 sm:text-[25px] text-[20px] leading-[20px]'><mark className='p-1 rounded-md font-bold'>2.</mark> When does it happen ?</h1>
       {ansactive2 ===false?<IoIosArrowDropdownCircle onClick={showanswer2} className='sm:text-[40px] text-[23px] font-extrabold'/> :
        <ImCross className='sm:text-[30px] text-[23px] text-red-600'/>}
       </div>
        
        </div>
        {ansactive2 && 
        <p className='mt-[2%] 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[17px] 2xl:px-[15vw] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]'>It's Frequency is <mark className='p-1 rounded-md font-bold'>one</mark> while a year and it happens in Nov - Dec.</p>}
    </div>

    {/* Question 3 */}
    <div className='hover:shadow-2xl hover:shadow-slate-950 p-5'>
        <div className="flex items-center justify-between gap-[5vw] 2xl:px-[15vw] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]">
       <div onClick={showanswer3} className='w-screen flex items-center justify-between cursor-pointer'>
       <h1 className='text-yellow-400 sm:text-[25px] text-[20px] leading-[20px]'><mark className='p-1 rounded-md font-bold'>3.</mark> Who conducts it ?</h1>
       {ansactive3 ===false?<IoIosArrowDropdownCircle onClick={showanswer3} className='sm:text-[40px] text-[23px] font-extrabold'/> :
        <ImCross className='sm:text-[30px] text-[23px] text-red-600'/>}
       </div>
        
        </div>
        {ansactive3 && 
        <p className='mt-[2%] 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[17px] 2xl:px-[15vw] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]'>It's Frequency is It is conducted by <mark className='p-1 rounded-md font-bold'>ISTE</mark> .</p>}
    </div>
    
        </div>
    </div>
    </>
  )
}

export default FaqsQuestions