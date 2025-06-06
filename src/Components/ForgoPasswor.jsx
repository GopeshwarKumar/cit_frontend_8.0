import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function Login() {

  const navigate=useNavigate()

  const [email, setemail] = useState();
  const [loginerror, setloginerror] = useState()
  const [loader, setloader] = useState(false)


  const LoginUser=(e)=>{
    e.preventDefault()
    setloader(true)

    axios.post(`${process.env.REACT_APP_SECRET_KEY}/forgotpassword`,{email}).then(res =>{
      setloginerror(res.data.message)
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
    <div className='w-screen h-screen flex  gap-[1px] flex-wrap items-center justify-center overflow-x-hidden overflow-y-hidden bg-slate-800'>
      
    <div className=' w-[500px] h-[600px] flex flex-col 
    items-center justify-center gap-[30px] '>
   
    <h2 className='sm:text-[50px] text-center vmd:text-[40px]'>Forgot Password</h2>
    <form action='/login' method='post' onSubmit={LoginUser} className='flex flex-col items-center justify-center gap-[30px] '>
      <input type='email' required placeholder='Enter E-mail' onChange={(e)=>{setemail(e.target.value)}} className='outline-none rounded 2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] px-[10px] font-sans 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] text-black placeholder:text-slate-600 placeholder:hover:tracking-wider placeholder:duration-100 transition-all'/>
      <div className='flex flex-col gap-[5px]'>
      {loader === false ?<button className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Send</button> : (<Loader></Loader>)}
    <p className='text-rose-600 lg:text-[16px] sm:text-[14px] mb:text-[12px] vmd:text-[10px]'>{loginerror}</p>
      </div>
    </form>
    </div>
    </div>



    </>
  )
}

export default Login
