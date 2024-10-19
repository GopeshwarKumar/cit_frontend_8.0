import React, { useState } from 'react'

function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const handlechange1=(e)=>{
    const x=e.target.value;
    setemail(x);
  }
  const handlechange2=(e)=>{
    const y=e.target.value;
    setpassword(y);
  }
  const registerUser=(e)=>{
    e.preventDefault();
    console.log(email);
    console.log(password);
    localStorage.setItem(`${email}`,email);
  }
  localStorage.clear();
  return (
    <>
    <div className='w-screen h-screen bg-black flex  gap-[1px] flex-wrap overflow-x-hidden overflow-y-hidden '>

      
    <>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    </>
   

    <div className='absolute w-[500px] h-[600px] flex flex-col 
    items-center justify-center gap-[30px] top-[20%] 2xl:left-[40%] xl:left-[35%] lg:left-[27%] md:left-[28%] sm:left-[30%] left-[17%]'>
    <div>
    <h2 className='sm:text-[50px] '>Login Here</h2>
    <h1 className='text-center italic hover:tracking-wider transition-all'>CIT 7.0</h1>
    </div>
    <form action='' method='' onSubmit={registerUser} className='flex flex-col items-center justify-center gap-[30px] '>
      <input type='email' placeholder='Enter Your Name' onChange={handlechange1} className='outline-none rounded 2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] px-[10px] font-sans 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all'/>
      <input type='password' placeholder='Enter Your Pass' onChange={handlechange2} className='outline-none rounded 2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] px-[10px] font-sans 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all'/>
      <div className='flex gap-[20px]'>
        <a href='/register' className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 no-underline hover:underline underline-offset-8 transition-all'>Forgot password</a>
      <button className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Login</button>
      </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default Login