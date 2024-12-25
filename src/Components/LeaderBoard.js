import React from 'react'
import { FaChessKing } from 'react-icons/fa';
import { MdStars } from "react-icons/md";

function LeaderBoard() {
  const participantsName = [
    { id: 1, name: 'Sonu', score: 300 },
    { id: 2, name: 'Arvind', score: 250 },
    { id: 3, name: 'You', score: 400 },
    { id: 1, name: 'Rohit', score: 300 },
    { id: 2, name: 'Nitish', score: 250 },
    { id: 3, name: 'Karl', score: 400 },
    // Add more players as needed
  ];
  participantsName.sort((a, b) => b.score - a.score);
  const firstplayer=participantsName[0]
  const secondplayer=participantsName[1]
  const thirdplayer=participantsName[2]
  return (
    <div style={{backgroundImage: 'url("/assets/CITBg.jpeg")'}} className='leaderBackground w-screen min-h-screen '>

    <div className='flex items-center justify-between p-5 '>
    <div>
      <img src='/assets/istelogo.png' alt='Hiii' className='lg:w-[90px] sm:w-[80px] lg:h-[90px] sm:h-[80px] w-[50px] h-[50px] rounded-full hover:scale-110 transition-all '/>
    </div>
    <div className='lg:leading-[28px] md:leading-[20px] sm:leading-[30px] vmd:leading-[17px] '>
    <p style={{ WebkitTextStroke: '1px #d8e919' }} className='leaderboardText uppercase font-extrabold lg:text-[37px] sm:text-[35px] vmd:text-[20px] hover:skew-x-6 transition-all '>LeaderBoard </p>
    <p className='float-right italic lg:text-[27px] vmd:text-[20px]'>Final Standing</p>
    </div>
    </div>

    <div className='lg:flex '>
    <div className='w-screen lg:w-[40vw]  flex items-center justify-center sm:mt-[20px] vmd:mt-[50px]'>
      <div className='bg-blue-600 lg:w-[150px] md:w-[90px] lg:h-[150px] md:h-[90px] w-[80px] h-[80px] rounded-full translate-x-3 text-center transition-all hover:-translate-y-10 flex items-center justify-center'>{secondplayer.name}</div>
      <div className='bg-red-600 lg:w-[200px] md:w-[120px] md:h-[120px] w-[100px] lg:h-[200px] h-[100px] lg:-translate-y-12 -translate-y-6 rounded-full z-30 text-center transition-all hover:-translate-y-10 flex flex-col items-center justify-center'>
      <FaChessKing className='scale-150 text-[30px] text-yellow-400 -translate-y-10 lg:-translate-y-[100px]'/>
      {firstplayer.name}</div>
      <div className='bg-yellow-600 lg:w-[150px] md:w-[90px] lg:h-[150px] md:h-[90px] w-[80px] h-[80px] rounded-full -translate-x-3 text-center transition-all hover:-translate-y-10 flex items-center justify-center'>{thirdplayer.name}</div>
    </div>
    
    <table style={{backgroundColor: "#FFF4E4"}}
  className='leaderboard w-screen lg:w-[60vw] py-7 px-3 rounded-t-3xl flex  flex-col gap-[1vh] lg:rounded-l-[20%] '>
    <div className='w-screen lg:w-[60vw] flex items-center justify-around -translate-x-3 text-black'>
        <div className='2xl:lg:text-[50px] lg:text-[40px] sm:text-[30px] vmd:text-[20px] font-bold'>Rank</div>
        <div className='text-center 2xl:lg:text-[50px] lg:text-[40px] sm:text-[30px] vmd:text-[20px] font-bold'>Name</div>
        <div className='2xl:lg:text-[50px] lg:text-[40px] sm:text-[30px] vmd:text-[20px] font-bold'>Score</div>
    </div>
     
      {participantsName.map((x,index)=>{
      return <tr  className='tableRow  vmd:h-[7vh] bg-slate-900 hover:bg-opacity-80 flex items-center justify-around lg:px-4 sm:rounded-s-[50px] vmd:rounded-[30px] lg:text-[25px] vmd:text-[17px]'>
      <th className='flex items-center gap-4'><p className='text-yellow-300'>{index+1}</p>
      <MdStars className='text-yellow-400'/></th>
      <th style={{ WebkitTextStroke: '1px #d8e919' }} className='w-[50vw] sm:text-3xl tracking-wider lg:text-[25px] vmd:text-[17px]'>{x.name}</th>
      <th className='text-yellow-300'>{x.score}</th>
    </tr>
    })}
    <p className='text-center vmd:text-[20px] text-black font-bold shadow-2xl shadow-pink-500'>See More...</p>
    </table>
    </div>
    
    </div>
  )
}

export default LeaderBoard