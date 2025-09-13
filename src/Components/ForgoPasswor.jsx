import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function ForgoPasswor() {

  const navigate=useNavigate()

  const [email, setemail] = useState();
  const [loginerror, setloginerror] = useState()
  const [loader, setloader] = useState(false)


  const LoginUser=(e)=>{
    e.preventDefault()
    setloader(true)

    axios.post(`${process.env.REACT_APP_SECRET_KEY}/forgotpassword`,{email}).then(res =>{
      setloginerror(res.data.message)
      console.log(res)
      if(res.status===200 && res.data.message==="otp sent to email"){
        navigate('/newpassword')
      }
    }).catch(err =>{
      console.log(err)
    }).finally(final =>{
      setloader(false)
    })
  }

  return (
    <>
    <div className='w-screen h-screen flex flex-row items-center justify-center gap-[5vw] overflow-x-hidden bg-gradient-to-tr from from-white to-slate-400'>

    <div className='flex items-center justify-center'>
    <img src='/assets/citcartoon.svg' alt='lost' loading='lazy' className='vmd:hidden md:block'/>
   </div>
      
    <div className='min-h-[50vh] w-[40vw] vmd:w-[400px] flex flex-col 
    items-center justify-center gap-[10px] vmd:bg-[slate-800] p-5 rounded-t-md shadow-2xl shadow-slate-800 rounded-lg'>

    <h1 className='sm:text-[40px] text-nowrap font-bold px-4 text-black p-5'>Forgot Password</h1>
    <form action='/login' method='post' onSubmit={LoginUser} className='flex flex-col items-center justify-center gap-2'>
      <input type='email' required placeholder='Enter E-mail' onChange={(e)=>{setemail(e.target.value)}} className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '/>
      <div className='flex flex-col gap-[5px]'>
      {loader === false ?<button className='sm:text-[17px] text-[14px] py-[4px] px-[15px] no-underline rounded-md hover:opacity-60 bg-blue-500 text-black cursor-pointer'>Send</button> : (<Loader></Loader>)}
      </div>
    </form>
    
    {loginerror==="Wrong password"? (<p className='text-red-500 sm:text-[20px] vmd:text-[15px]'>{loginerror}</p>) : <p className='text-yellow-400 lg:text-[16px] sm:text-[16px] mb:text-[16px] vmd:text-[10px]'>{loginerror}</p>}
    </div>
    </div>

    </>
  )
}

export default ForgoPasswor
