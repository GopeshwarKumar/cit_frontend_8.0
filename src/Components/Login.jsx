import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../Auth/AuthProvide';

function Login() {
  const loginAuth=useContext(AuthenticationContext)

  const navigate=useNavigate()

  const [email, setemail] = useState();
  const [password, setpass] = useState();
  const [loginerror, setloginerror] = useState()


  const LoginUser=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/login",{email,password}).then(res =>{
      // loginAuth.setuseremail(res.data.email)
      // loginAuth.setusername(res.data.name)
      // console.log(res.data.email)
      // console.log(res.data.name)
      setloginerror(res.data.message)
      if(res.status===200 && res.data.message==="user found"){
        localStorage.setItem("token",res.data.token)
      }
      if(localStorage.getItem("token")){
      localStorage.setItem("userName",res.data.name)
      localStorage.setItem("userNmaeEmail",res.data.email)
        navigate('/home')
      }else{
        navigate('/login')
      }
    }).catch(err =>{
      console.log(err)
    })
  }

  return (
    <>
    <div className='w-screen h-screen flex  gap-[1px] flex-wrap items-center justify-center overflow-x-hidden overflow-y-hidden bg-slate-800'>
      
    <div className=' w-[500px] h-[600px] flex flex-col 
    items-center justify-center gap-[10px] '>
   
    <h2 className='sm:text-[50px] text-center vmd:text-[40px]'>Login Here</h2>
    <h1 className='text-center italic hover:tracking-wider transition-all'>CIT 7.0</h1>
    <form action='/login' method='post' onSubmit={LoginUser} className='flex flex-col items-center justify-center gap-[30px] '>
      <input type='email' placeholder='Enter Your Name' onChange={(e)=>{setemail(e.target.value)}} className='outline-none rounded 2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] px-[10px] font-sans 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] text-black placeholder:text-slate-600 placeholder:hover:tracking-wider placeholder:duration-100 transition-all'/>
      <input type='password' placeholder='Enter Your Pass' onChange={(e)=>{setpass(e.target.value)}} className='outline-none rounded 2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] px-[10px] font-sans 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] text-black placeholder:text-slate-600 placeholder:hover:tracking-wider placeholder:duration-100 transition-all'/>
      <div className='flex gap-[20px]'>
        <Link to={'/forgetpassword'} className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60  text-red-600 no-underline hover:underline underline-offset-8 transition-all'>Forgot password</Link>
      <button className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Login</button>
      </div>
    </form>
    <Link to={"/register"} className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-green-500 no-underline'>Register</Link>
    <p className='text-rose-600 lg:text-[16px] sm:text-[14px] mb:text-[12px] vmd:text-[10px]'>{loginerror}</p>
    </div>
    </div>



    </>
  )
}

export default Login