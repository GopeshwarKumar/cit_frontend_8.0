import React, {  useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
// import Loader from './Loader';
import {toast , ToastContainer} from 'react-toastify'
import Loader from '../Components/Loader';
import { FaLocationArrow } from 'react-icons/fa';
// import { useContext } from 'react';
// import { AuthenticationContext } from '../Auth/AuthProvide';

function AdminLogin() {
  // const loginAuth=useContext(AuthenticationContext)

  const navigate=useNavigate()

  const [adminemail, setadminemail] = useState()
  const [adminpassword, setadminpass] = useState()
  const [loginerror, setloginerror] = useState()
  const [loader, setloader] = useState(false)


  const LoginUser=(e)=>{
    e.preventDefault()
    setloader(true)
    
    axios.post(`https://cit-backend-8-0.onrender.com/adminlogin`,{adminemail,adminpassword}).then(res =>{
      setloginerror(res.data.message)
      console.log(res)

      res.data.message==='Admin LoggedIn' ? toast.success(res.data.message,{}) : toast.warn(res.data.message,{})
      if(res.status===200 && res.data.message==='Admin LoggedIn'){
        localStorage.setItem("Adminname",res.data.AdminName)
        localStorage.setItem("Adminemail",res.data.AdminEmail)
        localStorage.setItem("Admintoken",res.data.admintoken)
        navigate('/AdminPanel')
      }
    }).catch(err =>{
      alert('Error caught wait...')
    }).finally(e =>{
      setloader(false)
    })
  }

  return (
    <>
    <ToastContainer className={`text-[14px]`}/>
    <div className='w-screen h-screen bg-slate-900 flex flex-row items-center justify-center gap-[5vw] overflow-x-hidden '>

    <div className='flex items-center justify-center'>
    <img src='/assets/citcartoon.svg' alt='lost' loading='lazy' className='vmd:hidden md:block'/>
   </div>
      
    <div className=' flex flex-col 
    items-center justify-center gap-[10px] vmd:bg-slate-800 p-5 rounded-t-md shadow-2xl shadow-slate-800'>
   
    <div>
      <h1 className='sm:text-[40px] text-nowrap font-bold px-4 '>Admin Login</h1>
    <h2 className='text-center italic hover:tracking-wider transition-all'>CIT 2.0</h2>
    </div>
    <form action='/login' method='post' onSubmit={LoginUser} className='flex flex-col items-center justify-center gap-[15px] '>
      <input type='email' required placeholder='Enter Your Email' onChange={(e)=>{setadminemail(e.target.value)}} className='outline-none rounded py-[5px] px-[10px] font-sans lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '/>
      <div className='flex items-center justify-center '>
        <input type='password' required placeholder='Enter Your Pass' onChange={(e)=>{setadminpass(e.target.value)}} className='outline-none rounded py-[5px] px-[10px] font-sans lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '/>
        {/* <input type='checkbox' className='right-4 relative'/> */}
      </div>
      <div className='w-full flex items-center justify-center gap-[20px]'>
        <div className='w-full flex items-center justify-center gap-[10px] '>
                      <Link to={"/AdminRegister"} className='w-[80%] flex items-center gap-1 sm:text-[17px] no-underline text-white text-[14px] py-[1px] px-[15px] rounded-md hover:opacity-60 bg-blue-500 cursor-pointer'>Register<FaLocationArrow /></Link>
                      {loader === false ? <button className='w-[80%] no-underline text-white text-center sm:text-[17px] text-[14px] py-[1px] px-[15px] rounded-md hover:opacity-60 bg-rose-500 cursor-pointer'>Login</button> :(<Loader></Loader>)}
                      </div>
      </div>
    </form>
    
    {loginerror==="Wrong password"? (<p className='text-red-500 sm:text-[20px] vmd:text-[15px]'>{loginerror}</p>) : <p className='text-yellow-400 lg:text-[16px] sm:text-[16px] mb:text-[16px] vmd:text-[10px]'>{loginerror}</p>}
    </div>
    </div>
    </>
  )
}

export default AdminLogin
