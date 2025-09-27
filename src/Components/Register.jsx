import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader';
import { FaLocationArrow } from "react-icons/fa6";
import {toast , ToastContainer} from 'react-toastify'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';

function Register() {

  const navigate=useNavigate()
  const [candidatename, setcandidatename] = useState();
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const [message, setmessage] = useState();
  const [loader, setloader] = useState(false)

    useEffect(()=>{
      if(localStorage.getItem('email')){
        navigate('/home')
      }
    },[])

  const registerUser=async (e)=>{
    e.preventDefault()
    setloader(true)

    axios.post(`${process.env.REACT_APP_SECRET_KEY}/create`,{candidatename,email,pass}).then(res =>{
      // console.log(res)
      setmessage(res.data.message)

      res.data.message==='Registered successfully' ? toast.success(res.data.message,{}) : toast.warn(res.data.message,{})
      if(res.status===200 && res.data.message==="Registered successfully"){
      document.cookie = `usertoken=${res.data.usertoken}`
      navigate('/verifyemail')
      setmessage('Login Link sent to email')
      }else{
        // seterror(res.data.message)
      }
    }).catch(err =>{
    }).finally(f =>{
      setloader(false)
    })
  }
  

  return (
    <>
    <ToastContainer className={`text-[14px]`}/>
    <div className='registerpage w-screen h-screen flex flex-row items-center justify-center gap-[5vw] overflow-x-hidden bg-gradient-to-tr from from-white to-slate-400'>
   <div className='flex items-center justify-center'>
    <img src='/assets/citcartoon.svg' alt='lost' loading='lazy' className='vmd:hidden md:block'/>
   </div>
    <div className='w-[40vw] vmd:w-[400px] flex flex-col 
    items-center justify-center gap-[10px] vmd:bg-[slate-800] p-5 rounded-t-md shadow-2xl shadow-slate-800'>
      
    <div className='text-black'>
      <h1 className='sm:text-[40px] text-nowrap px-4 '>Register Here</h1>
    <h1 className='text-center italic hover:tracking-wider duration-200'>CIT 2.0</h1>
    </div>

    <form action='/create' method='post' onSubmit={registerUser} className='flex flex-col items-center justify-center gap-[10px] '>
      <input type='text' required placeholder='Enter Your Name' value={candidatename} onChange={(e)=>{setcandidatename(e.target.value)}} className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '/>
      <input type='email' required placeholder='Enter E-mail' value={email} onChange={(e)=>{setemail(e.target.value)
      }} className='group outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '/>

      <input type='password' required placeholder='Enter Your Pass' onChange={(e)=>{setpass(e.target.value)}} className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '/>

      <div className='w-full flex flex-col items-center justify-center gap-[10px] '>

        <div className='w-full flex items-center justify-center gap-[10px] '>
        <Link to={"/"} className='w-[80%] flex items-center gap-1 no-underline text-white text-center sm:text-[17px] text-[14px] py-[4px] px-[15px] rounded-md hover:opacity-80 bg-rose-500 cursor-pointer hover:tracking-wider transition-all duration-150'>Login <FaLocationArrow /></Link>
        {loader ===false ?<button className='w-[80%] sm:text-[17px] text-[14px] py-[4px] px-[15px] rounded-md hover:opacity-80 bg-blue-500 cursor-pointer hover:tracking-wider transition-all duration-150'>Register</button> : (<Loader></Loader>)}
        </div>
        <Link to={"/verifyemail"} className='flex items-center justify-center gap-1 no-underline text-white text-center sm:text-[17px] text-[14px] py-[4px] px-[15px] rounded-md hover:opacity-80 bg-[#469649] cursor-pointer hover:tracking-wider transition-all duration-150'>Verify</Link>
      <GoogleLogin title='Sign in' onSuccess={(credentialResponse)=>{
      const decoded = jwtDecode(credentialResponse.credential)
      setemail(decoded.email);
      setcandidatename(decoded.name);
          }} useOneTap/>
          
                    
      </div> 
    </form>
    {message==="Registered successfully" || "Login Link sent to email" ? (<p className='text-green-500 font-bold text-[15px]'>{message}</p>) :<p className='text-red-500 font-bold text-[15px]'>{message}</p>}
    </div>
    </div>
    </>
  )
}
export default Register
