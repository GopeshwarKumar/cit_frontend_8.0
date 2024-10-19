import React from 'react'

function LoadingPage() {
  return (
    <>
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
    <div className='w-32 h-32 bg-white animate-pulse rounded-[50%] flex items-center justify-center '>
      <h1 className=' text-yellow-200 text-[100px] absolute flex'>
        <h1 className='citword text-yellow-200 text-[100px]  '>L</h1>
        <h1 className='citword text-yellow-200 text-[100px] animate-bounce '>o</h1>
        <h1 className='citword text-yellow-200 text-[100px] animate-bounce '>d</h1>
        <h1 className='citword text-yellow-200 text-[100px] animate-pulse '>i</h1>
        <h1 className='citword text-yellow-200 text-[100px] animate-bounce '>n</h1>
        <h1 className='citword text-yellow-200 text-[100px] animate-bounce '>g</h1>
        <h1 className='text-blue-400 text-[100px] animate-bounce'>.</h1>
        <h1 className='text-yellow-200 text-[100px] animate-pulse'>.</h1>
        <h1 className='text-pink-500 text-[100px] animate-bounce'>.</h1>
      </h1>
    </div>
    </div>
    </>
  )
}

export default LoadingPage