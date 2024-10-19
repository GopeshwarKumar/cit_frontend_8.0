import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function About() {
  return (
    <div className=' bg-[url("https://cdn.pixabay.com/photo/2018/01/06/04/08/blue-3064317_1280.jpg")] '>
    
    <Navbar/>

        <h1 className='text-center 2xl:text-[100px] xl:text-[100px] lg:text-[100px] md:text-[90px] sm:text-[70px] text-[40px]'>About Us</h1>

    <h1 className='text-center xl:text-[50px] lg:text-[50px] md:text-[45px] sm:text-[45px] uppercase leading-[49px] mt-[7%] tracking-[2px] first-letter:text-slate-600 xl:first-letter:text-[69px] lg:first-letter:text-[69px] sm:first-letter:text-[69px] md:first-letter:text-[69px] first-letter:text-[49px]'>cognitive intelligence<br/> test 7.0</h1>

    <p className='2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[22px] sm:text-[22px] text-[15px] px-[10px] text-center mt-[5%]'>
    <mark>CIT 7.0</mark> is one-of-a-kind opportunity for all aspiring students as we unveil exhilarating challenges of national standard over the realms of basic mathematical aptitude, logical & verbal reasoning, and data interpretation. Not only does CIT implant an idea of various acclaimed aptitude tests like <mark>CAT</mark>, but our flagship event also never fails to provide a simulation of the overall screening procedure of the hiring companies. This is the most anticipated online event to compete for <mark>intellectual glory</mark> among multitude of striving contestants.
    </p>

    
    <div>
    <h1 className='text-center xl:text-[50px] lg:text-[50px] md:text-[45px] sm:text-[45px] uppercase leading-[49px] mt-[7%] tracking-[2px] first-letter:text-slate-600 xl:first-letter:text-[69px] lg:first-letter:text-[69px] sm:first-letter:text-[69px] md:first-letter:text-[69px] first-letter:text-[49px]'>schedule for cit test 7.0</h1>

    <h2 className='text-center  xl:text-[35px] lg:text-[35px] uppercase mt-[4%]'>preliminary round :</h2>
    <p className=' xl:text-[30px] lg:text-[30px] text-[20px] text-center px-[10px]'>Candidates can attempt CIT only once in any <br/>of three available slots</p>

    <div className='flex items-center justify-center mt-[4%] xl:text-[30px] lg:text-[30px] md:text-[20px] sm:text-[20px] text-[15px]'>
        <ul className='flex justify-around gap-[5vw] px-[3vw] leading-[20px]'>
        <li><p className='font-bold italic text-yellow-500'>SLOT 1</p><br/>10/09/2024<br/><br/> (x:00 AM - x:yz AM)</li>
        <li><p className='text-yellow-500 font-bold italic'>SLOT 2</p><br/>10/09/2024<br/><br/>(x:00 AM - x:yz AM)</li>
        <li><p className='text-yellow-500 font-bold italic'>SLOT 3</p><br/>10/09/2024<br/><br/>(x:00 AM - x:yz AM)</li>
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

    <h1 className='uppercase text-center mt-[2%] leading-[30px]'>cash prizes worth <mark>8k</mark> for cit 7.0</h1>

    <h1 className='uppercase text-center mt-[4%]'>event sponsers</h1>
    
    <div className='flex items-center justify-around gap-[10px] px-[10px]'>
        <div className='object-cover '>
            <img src='/assets/techbrain.webp' className='hover:scale-105 transition-all hover:rounded-lg hover:bg-black hover:px-4 hover:py-1'/>
        </div>
        <div className='object-cover'>
            <img src='/assets/ims.jpg' className='hover:scale-125 transition-all hover:rounded-lg'/>
        </div>
    </div>

    </div>
  )
}

export default About