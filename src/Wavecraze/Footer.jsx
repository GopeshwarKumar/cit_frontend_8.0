import React from 'react'
import {  FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='w-screen h-screen grid lg:grid-cols-2 grid-cols-1'>
        <div className='bg-black flex flex-col items-center justify-center'>
            <h2 className='font-bold'>Contact</h2>
            {/* social media */}
            <div className='flex gap-3'>
                <div><FaLinkedin className='hover:text-blue-700 text-blue-500 lg:text-[60px] sm:text-[45px] text-[35px] '/></div>
                <div><FaInstagramSquare className='text-pink-700 hover:text-pink-500 lg:text-[60px] sm:text-[45px] text-[35px] '/></div>
                <div><FaFacebookSquare className='text-blue-700 hover:text-blue-500 lg:text-[60px] sm:text-[45px] text-[35px] '/></div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='mt-[5%] p-3 leading-[25px] font-bold text-[#FF4E01] text-center'>WAVECRAZE FEST
                    <p>Feb 8 , 2025 12am - 12pm </p>
                </p>
            </div>

            {/* contact */}
            <div className='w-full p-4 flex items-center justify-between'>
            <div className='sm:px-[50px] px-[10px]'>
                <p className='text-[15px] '>Email: info@mysite.com
                Tel: 123-456-789</p>
            </div>
            <div className='sm:px-[50px] px-[10px]'>
                <p className='text-[15px] '>500 Terry Francine Street
                San Francisco, CA 94158</p>
            </div>
            </div>
        </div>

        <div className='bg-[#FF4E01] flex flex-col items-center justify-center p-3'>
            <h3 className='font-extrabold'>Questions about our party?</h3>
            <p className='font-bold'>Just ask… if you dare!</p>
            <form className='flex flex-col items-center justify-center gap-2'>
                <div>
                <p className='text-[15px] vmd:px-3 sm:p-0 sm:text-[20px]'>Name</p>
                    <input type="text" placeholder='Enter your name' name="" id="" className='w outline-none bg-slate-900 rounded-lg py-1 border-2 hover:border-white border-yellow-400 hover:opacity-90 focus:bg-slate-950 text-[#FF4E01] placeholder:text-[#FF4E01] sm:placeholder:text-[20px] placeholder:px-2 placeholder:text-[15px]' />
                </div>
                <div>
                <p className='text-[15px] vmd:px-3 sm:p-0 sm:text-[20px]'>E-mail</p>
                    <input type="text" placeholder='Enter your E-mail' name="" id="" className='outline-none bg-slate-900 rounded-lg py-1 border-2 hover:border-white border-yellow-400 hover:opacity-90 focus:bg-slate-950 text-[#FF4E01] placeholder:text-[#FF4E01] sm:placeholder:text-[20px] placeholder:px-2 placeholder:text-[15px] ' />
                </div>
                <div>
                    <p className='text-[15px] vmd:px-3 sm:p-0 sm:text-[20px]'>About</p>
                    <textarea type="text" placeholder='Write somethings related to fest' name="" id="" className='outline-none bg-slate-900 px-3 rounded-lg py-1 border-2 hover:border-white border-yellow-400 hover:opacity-90 focus:bg-slate-950 text-[#FF4E01] placeholder:text-[#FF4E01] sm:placeholder:text-[20px]  placeholder:text-[15px]' />
                </div>
                <button type='submit' class="button px-6 py-2 text-lg font-medium text-white bg-transparent border-2 border-green-500 rounded-lg transform transition-all duration-300 ease-in-out hover:text-white ">Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Footer