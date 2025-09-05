import React, {  useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import {toast , ToastContainer} from 'react-toastify'
// import { useContext } from 'react';
// import { AuthenticationContext } from '../Auth/AuthProvide';


function Login() {
  // const loginAuth=useContext(AuthenticationContext)

  const navigate=useNavigate()
  
  const [email, setemail] = useState()
  const [password, setpass] = useState()
  const [loginerror, setloginerror] = useState()
  const [loader, setloader] = useState(false)


  const LoginUser=async(e)=>{
    e.preventDefault()
    setloader(true)
    
    await axios.post(`${process.env.REACT_APP_SECRET_KEY}/login`,{email,password}).then(res =>{
      
      setloginerror(res.data.message)
      res.data.message==='User loggedIn' ? toast.success(res.data.message,{}) : toast.warn(res.data.message,{})

      if(res.status===200 && res.data.message==='User loggedIn'){
        console.log(res)
        localStorage.setItem("name",res.data.name)
        localStorage.setItem("email",res.data.email)
        localStorage.setItem("token",res.data.usertoken)
        navigate('/home');
      }
    }).catch(err =>{
      alert('Error caught wait...')
    }).finally(e =>{
      setloader(false)
    })
  }

  return (
    <>
    <ToastContainer className={`text-[15px]`}/>
    <div className='w-screen h-screen flex flex-row items-center justify-center gap-[5vw] overflow-x-hidden bg-gradient-to-tr from from-white to-slate-400'>

    <div className='flex items-center justify-center'>
    <img src='/assets/citcartoon.svg' alt='lost' loading='lazy' className='vmd:hidden md:block'/>
   </div>
      
    <div className=' flex flex-col 
    items-center justify-center gap-[10px] vmd:bg-slate-800 p-5 rounded-t-md shadow-2xl shadow-slate-800'>
   
    <div>
      <h1 className='sm:text-[40px] text-nowrap font-bold px-4 text-white'>Login Here</h1>
    <h2 className='text-center italic hover:tracking-wider transition-all text-white'>CIT 2.0</h2>
    </div>
    <form action='/login' method='post' onSubmit={LoginUser} className='flex flex-col items-center justify-center gap-[15px] '>
      <input type='email' required placeholder='Enter Your Email' onChange={(e)=>{setemail(e.target.value)}} className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '/>
      <div className='flex items-center justify-center '>
        <input type='password' required placeholder='Enter Your Pass' onChange={(e)=>{setpass(e.target.value)}} className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '/>
        {/* <input type='checkbox' className='right-4 relative'/> */}
      </div>
      <div className='flex items-center justify-center gap-[20px]'>
        <Link to={"/"} className='w-[80%] sm:text-[17px] text-[14px] py-[4px] px-[15px] no-underline rounded-md hover:opacity-60 bg-blue-500 text-black cursor-pointer'>Register</Link>
      {loader === false ? <button className='w-[80%] flex items-center gap-1 no-underline text-white text-center sm:text-[17px] text-[14px] py-[4px] px-[15px] rounded-md hover:opacity-60 bg-rose-500 cursor-pointer'>Login</button> :(<Loader></Loader>)}
      </div>
    </form>
    
    <Link to={'/forgetpassword'} className='group sm:text-[20px] text-[16px] py-[5px] px-[15px] rounded-md text-white bg-[#D32343] hover:opacity-80 hover:bg-opacity-70 no-underline underline-offset-4 transition-all'>Forgot password
    </Link>
    
    {loginerror==="Wrong password"? (<p className='text-red-500 sm:text-[20px] vmd:text-[15px]'>{loginerror}</p>) : <p className='text-yellow-400 lg:text-[16px] sm:text-[16px] mb:text-[16px] vmd:text-[10px]'>{loginerror}</p>}
    </div>
    </div>



    </>
  )
}

export default Login
