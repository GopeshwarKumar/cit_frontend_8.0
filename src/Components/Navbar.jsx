import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='w-screen h-[75px] flex items-center justify-between px-[10px] p-9 shadow-2xl hover:shadow-inner duration-300 transition-all shadow-rose-400 '>
        <div className=''>
        <Link to={"http://localhost:3000/"}>
        <img src='/assets/istelogo.png' className='2xl:w-[70px] 2xl:h-[70px] xl:w-[60px] xl:h-[60px]  lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] sm:w-[40px] sm:h-[40px] w-[40px] h-[40px] absolute top-3 left-6 hover:scale-125 transition-all '/></Link>
        </div>
        <Link to={"http://localhost:3000/home"}>
            <MdArrowBackIos className='font-extralight xl:text-[55px] lg:text-[55px] md:text-[55px] sm:text-[45px] text-[45px] hover:scale-75 duration-200 rounded-[10px] hover:text-yellow-400 text-red-600'/>
        </Link>
    </nav>
    </>
  )
}

export default Navbar