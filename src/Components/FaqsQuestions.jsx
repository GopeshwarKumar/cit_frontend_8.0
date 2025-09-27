import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function FaqsQuestions() {
        const navigate=useNavigate()
  
        const [ansactive,setansactive]=useState(false)

        useEffect(()=>{
          if(!localStorage.getItem('email')){
            navigate('/')
          }
        },[])

    
  const questionarray = [
    "What is CIT 7.0 ?",
    "When does it happen ?",
    "Who conducts it ?"
  ];

  const answers = [
    "CIT 7.0 is an online quiz test which has multiple rounds to go in final rounds.",
    "It happens every year in the month of July.",
    "It is conducted by the Computer Institute Team."
  ];
  return (
    <>
    {/* [url("/public/assets/citbackground.jpg")] */}
    <div className=''>
    <Navbar/>
    <h1 className='mt-[5%] text-center text-wrap 2xl:text-[120px] xl:text-[110px] lg:text-[90px] md:text-[80px] sm:text-[70px] text-[46px] leading-[70px] font-extrabold'>Frequently Ask Questions</h1>

<div className='min-h-screen flex flex-col gap-[5vh] mt-[10%] '>

{questionarray.map((question, index) => (
        <div key={index} className="hover:shadow-xl hover:shadow-slate-950 p-5">
          <div
            onClick={() => setansactive(ansactive === index ? null : index)}
            className="flex items-center justify-between gap-[5vw] 2xl:px-[15vw] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]"
          >
            <div className="w-screen flex items-center justify-between cursor-pointer">
              <h1 className="text-black sm:text-[25px] text-[20px] leading-[20px]">{question}</h1>

              {ansactive === index ? (
                <RxCross1 className="sm:text-[30px] text-[23px] text-red-600" />
              ) : (
                <IoIosArrowDropdownCircle className="sm:text-[40px] text-[23px] font-extrabold hover:-rotate-90 transition-all duration-150" />
              )}
            </div>
          </div>

          {ansactive === index && (
            <p className="mt-[2%] sm:text-[20px] text-[15px] 2xl:px-[15vw] xl:px-[20vw] lg:px-[20vw] md:px-[15vw] sm:px-[15vw] px-[5vw]">
              {answers[index]}
            </p>
          )}
        </div>
      ))}
    
        </div>
    </div>
    </>
  )
}

export default FaqsQuestions