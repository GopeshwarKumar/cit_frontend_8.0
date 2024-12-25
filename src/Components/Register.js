import React, { useState } from 'react'

function Register() {
  const [candidatename, setcandidatename] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const handlechange1=(e)=>{
    const x=e.target.value;
    setcandidatename(x);
  }
  const handlechange2=(e)=>{
    const y=e.target.value;
    setemail(y);
  }
  const handlechange3=(e)=>{
    const z=e.target.value;
    setpassword(z);
  }
  const registerUser=(e)=>{
    e.preventDefault();
    console.log(candidatename);
    console.log(email);
    console.log(password);
    localStorage.setItem(`${candidatename}`,candidatename);
    localStorage.setItem(`${email}`,email);
    setcandidatename("");
    setemail("");
    setpassword("");
  }
  
  const credentials=[candidatename];
  

  return (
    <>
    <div className='w-screen h-screen bg-black flex  gap-[1px] flex-wrap overflow-x-hidden '>

      
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
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
    <div className='hover:bg-green-400 h-20 w-20 transition-all'></div>
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
   
    <div className='absolute 2xl:w-[500px] xl:w-[500px] lg:w-[500px] md:w-[500px] sm:w-[500px] w-[300px] h-[600px] flex flex-col 
    items-center justify-center gap-[30px] 2xl:top-[20%] xl:top-[20%] lg:top-[20%] md:top-[20%] sm:top-[20%] top-[6%] 2xl:left-[40%] xl:left-[35%] lg:left-[27%] md:left-[25%] sm:left-[20%] left-[20%]'>
    <div>
    <h1 className='sm:text-[50px] '>Register Here</h1>
    <h1 className='text-center italic hover:tracking-wider transition-all'>CIT 7.0</h1>
    </div>
    <form action='' method='' onSubmit={registerUser} className='flex flex-col items-center justify-center gap-[30px] top-1/3 left-1/2'>
      <input required={true} type='text' placeholder='Enter Your Name' onChange={handlechange1} className='outline-none rounded 2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] px-[10px] font-sans 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all'/>
      <input required={true} type='password' placeholder='Enter E-mail' onChange={handlechange2} className='outline-none rounded 2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] px-[10px] font-sans 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all'/>
      <input required={true} type='password' placeholder='Enter Your Pass' onChange={handlechange3} className='outline-none rounded 2xl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[10px] py-[7px] 2xl:px-[20px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] px-[10px] font-sans 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] text-black placeholder:text-slate-600 placeholder:hover:tracking-tighter transition-all'/>
      <button className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[16px] py-[5px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 cursor-pointer'>Register</button>
    </form>
    </div>
    </div>
    </>
  )
}
export default Register