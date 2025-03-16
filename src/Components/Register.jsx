import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader';

function Register() {

  const navigate=useNavigate()
  const [candidatename, setcandidatename] = useState();
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const [error, seterror] = useState();
  const [sucess, setsucess] = useState();
  const [loader, setloader] = useState(false)

  const registerUser=async (e)=>{
    e.preventDefault();
    setloader(true)
    // http://localhost:5000
    axios.post("https://cit-backend-8-0.onrender.com/create",{candidatename,email,pass}).then(res =>{
      console.log(res)
      // setloader("waitsssss")
      if(res.status===200 && res.data.message==="Registered successfully"){
        setsucess(res.data.message)
        navigate("/login")
      }else{
        seterror(res.data.message)
      }
    }).catch(err =>{
      console.log(err)
    }).finally(f =>{
      setloader(false)
    })
    // setcandidatename("");
    // setemail("");
    // setpassword("");
    // dfd@gmail.com
  }
  

  return (
    <>
    <div className='w-screen h-screen bg-slate-900 flex  gap-[1px] flex-wrap overflow-x-hidden '>
    {/* <>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    </> */}
   
    <div className='w-screen flex flex-col 
    items-center justify-center gap-[30px] '>
    <div>
    <h1 className='sm:text-[50px] '>Register Here</h1>
    <h1 className='text-center italic hover:tracking-wider duration-200'>CIT 7.0</h1>
    </div>

    <form action='/create' method='post' onSubmit={registerUser} className='flex flex-col items-center justify-center gap-[30px] '>
      <input type='text' required placeholder='Enter Your Name' onChange={(e)=>{setcandidatename(e.target.value)}} className='outline-none rounded 2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] px-[10px] font-sans 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '/>
      <input type='email' required placeholder='Enter E-mail' onChange={(e)=>{setemail(e.target.value)
        setsucess("")
        seterror("")
      }} className='outline-none rounded 2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] px-[10px] font-sans 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-100 transition-all'/>
      <input type='password' required placeholder='Enter Your Pass' onChange={(e)=>{setpass(e.target.value)}} className='outline-none rounded 2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] px-[10px] font-sans 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200'/>

      <div className='flex items-center justify-center gap-[10px] '>
      <Link to={"/login"} className='no-underline text-white 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-rose-500 cursor-pointer'>Login</Link>
      {loader ===false ?<button className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 cursor-pointer'>Register</button> : (<Loader></Loader>)}
      </div>
    </form>
    <h2 className='text-green-500 float-right bg-slate-900'>{sucess}</h2>
    <h2 className='text-red-500 float-right bg-slate-900'>{error}</h2>
    </div>
    </div>
    </>
  )
}
export default Register