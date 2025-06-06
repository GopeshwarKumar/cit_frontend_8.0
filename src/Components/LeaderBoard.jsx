import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

function LeaderBoard() {
  
  const [participantsName, setparticipantsName] = useState([])

      useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SECRET_KEY}/userscore`).then(ress=>{
          setparticipantsName(ress.data)
        }).catch(err =>{
          alert('Error caught wait...')
        })
      },[])
      participantsName.sort((a, b) => b.score - a.score)
  return (
    <>
    <Navbar/>
    <div className='pageBg w-screen h-[88vh] object-cover'>
    <div className='w-screen p-5 flex items-center justify-center bg-gradient-to-r from-[#011529] to-[#2A0121]'>
        
        <p style={{ WebkitTextStroke: '1px #d8e919' }} className='w-screen flex items-center justify-center text-white cursor-pointer font-bold uppercase lg:text-[45px] sm:text-[40px] mb:text-[40px] vmd:text-[26px]'>
        <div className='hover:-rotate-180 transition-all'>🏅</div>
        <div className='hover:translate-y-2 hover:rotate-2 transition-all'>L</div>
        <div className='hover:-translate-y-2  transition-all'>e</div>
        <div className='hover:translate-y-2  transition-all'>a</div>
        <div className='hover:translate-y-2 hover:rotate-2 transition-all'>d</div>
        <div className='hover:-translate-y-2  transition-all'>e</div>
        <div className='hover:translate-y-2  transition-all'>r</div>
        <div className='hover:-translate-y-2 hover:rotate-2 transition-all'>B</div>
        <div className='hover:translate-y-2 hover:rotate-2 transition-all'>o</div>
        <div className='hover:-translate-y-2  transition-all'>a</div>
        <div className='hover:translate-y-2  transition-all'>r</div>
        <div className='hover:translate-y-2 hover:-rotate-2 transition-all'>d</div>
        <div className='hover:-rotate-180 transition-all'>🏅</div>
        </p>
    </div>
    {/* bg-[#FFF4E4] */}
    <div style={{background:"url(/assets/leaderboardCitbg.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}} className='tableee w-screen h-[78vh] overflow-y-scroll flex items-center justify-center '>
      {/* pink backround image png */}
    <table className='tableee w-screen h-[40vh] flex flex-col items-center p-3 gap-[1vh]  overflow-y-scroll'>
      <tr className='2xl:w-[40vw] xl:w-[50vw] lg:w-[55vw] md:w-[60vw] sm:w-[65vw] vmd:w-[90vw] vmd:h-[5vh] odd:bg-[#5F185A] even::bg-[#DBCCC7] shadow-md hover:shadow-blue-900 bg-[#000F1E]  hover:bg-opacity-60 flex items-center justify-around lg:px-4 vmd:px-3 sm:rounded-s-[50px] vmd:rounded-[30px] lg:text-[25px] sm:text-[20px] vmd:text-[12px] cursor-pointer '>
        <th>Rank</th>
        <th>Email</th>
        <th>Score</th>
      </tr>
     {/* #5F185A  #DBCCC7*/}
      {participantsName.map((x,index)=>{
      return <tr key={index} className='2xl:w-[40vw] xl:w-[50vw] lg:w-[55vw] md:w-[60vw] sm:w-[65vw] vmd:w-[90vw] vmd:h-[5vh] odd:bg-[#5F185A] even::bg-[#DBCCC7] shadow-md hover:shadow-blue-900 bg-[#000F1E]  hover:bg-opacity-60 flex items-center justify-around lg:px-4 vmd:px-3 sm:rounded-s-[50px] vmd:rounded-[30px] lg:text-[25px] sm:text-[20px] vmd:text-[12px] cursor-pointer '>
      <th className='flex items-center gap-4 lg:text-[30px] sm:text-[25px] vmd:text-[15px] '>
      {index+1===1 ? "🥇" :""}
      {index+1===2 ? "🥈" :""}
      {index+1===3 ? "🥉" :""}
      {index+1 > 3 ? "🏅" :""}
      <p className='lg:text-[25px] sm:text-[20px] vmd:text-[12px] text-white'>{index+1}</p>
      </th>
      <th className=' text-cyan-400 w-[50vw] tracking-wider lg:text-[20px] sm:text-[18px] mb:text-[16px] vmd:text-[14px]'>{x.userEmail}</th>
      <th className='text-yellow-400  font-extrabold mb:text-[16px]'>{x.score}</th>
    </tr>
    })}
    {/* <p className='text-center vmd:text-[12px] sm:text-[15px] text-yellow-400 font-bold cursor-pointer shadow-2xl shadow-yellow-400'>See More...</p> */}
    </table>
    </div>
    </div>
    </>
  )
}

export default LeaderBoard












