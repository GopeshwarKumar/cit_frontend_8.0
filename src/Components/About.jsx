import React from 'react'
// import { MdArrowBackIos } from 'react-icons/md'
import Navbar from './Navbar'

function About() {
  return (
    // [url("https://cdn.pixabay.com/photo/2018/01/06/04/08/blue-3064317_1280.jpg")]
    <div className=' bg-slate-900 '>    
    <Navbar/>

    <h1 className='text-center lg:text-[100px] md:text-[90px] sm:text-[70px] text-[40px]'>About Us</h1>

    <h1 className='text-center lg:text-[50px] sm:text-[45px] uppercase leading-[49px] mt-[7%] tracking-[2px] first-letter:text-slate-600 xl:first-letter:text-[69px] lg:first-letter:text-[69px] sm:first-letter:text-[69px] md:first-letter:text-[69px] first-letter:text-[49px]'>cognitive intelligence<br/> test 2.0</h1>

    <p className='lg:text-[22px] sm:text-[18px] text-[15px] sm:px-[10vw] px-[20px] py-5 mt-[5%] '>
    <b>CIT 2.0</b> is one-of-a-kind opportunity for all aspiring students as we unveil exhilarating challenges of national standard over the realms of basic mathematical aptitude, logical & verbal reasoning, and data interpretation. Not only does CIT implant an idea of various acclaimed aptitude tests like <b>CAT</b>, but our flagship event also never fails to provide a simulation of the overall screening procedure of the hiring companies. This is the most anticipated online event to compete for <b>intellectual glory</b> among multitude of striving contestants.
    </p>

    {/* schedule  */}
    <div>
    <h1 className='text-center xl:text-[50px] lg:text-[50px] md:text-[45px] sm:text-[45px] uppercase leading-[49px] mt-[7%] tracking-[2px] first-letter:text-slate-600 xl:first-letter:text-[69px] lg:first-letter:text-[69px] sm:first-letter:text-[69px] md:first-letter:text-[69px] first-letter:text-[49px]'>schedule for cit test 2.0</h1>

    <h2 className='text-center  xl:text-[35px] lg:text-[35px] uppercase mt-[4%]'>preliminary round :</h2>
    <p className=' xl:text-[30px] lg:text-[30px] text-[20px] text-center px-[10px]'>Candidates can attempt CIT only once in any <br/>of three available slots</p>

    <div className='flex items-center justify-center mt-[4%] xl:text-[30px] lg:text-[30px] md:text-[20px] sm:text-[20px] text-[15px]'>
        <ul className='flex justify-around gap-[5vw] px-[3vw] leading-[20px]'>
        <li><p className='font-bold italic text-yellow-500'>SLOT 1</p><br/>10/09/2024<br/><br/> 9:00 PM - 9:30 PM</li>
        <li><p className='text-yellow-500 font-bold italic'>SLOT 2</p><br/>10/09/2024<br/><br/>9:00 PM - 9:30 PM</li>
        <li><p className='text-yellow-500 font-bold italic'>SLOT 3</p><br/>10/09/2024<br/><br/>9:00 PM - 9:30 PM</li>
        </ul>
    </div>

    <div className='mt-[3%] px-[10px]'>
        <h1 className='uppercase text-center text-yellow-500'>final round</h1>

        <div className='flex items-center justify-center flex-col text-center xl:text-[30px] lg:text-[30px] text-[20px]'>
        <p className=' '>Candidates selected for finale round will receive a mail with details</p>
        <li className='text-center'>Final : MONTH DAY YEAR (TIME - TIME)</li>
        </div>

    </div>

    </div>

    <h1 className='uppercase text-center mt-[5%] leading-[30px] vmd:text-[30px] '>cash prizes worth <mark className='rounded-md p-1'>8k</mark> for cit 2.0</h1>

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