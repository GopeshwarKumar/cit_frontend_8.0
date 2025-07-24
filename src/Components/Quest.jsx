import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {toast,ToastContainer} from 'react-toastify'
import Loader from './Loader'
import { PiTimerLight } from 'react-icons/pi'
import {useNavigate} from 'react-router-dom'

function Quest() {

  const navigate=useNavigate()

  const [active, setactive] = useState(false)
  const [questionarray, setquestionarray] = useState([])
  
  useEffect(()=>{
    axios.get(`https://cit-backend-8-0.onrender.com/getandshowquestion`).then(res =>{
      // console.log(res)
      setquestionarray(res.data)
    }).catch(Err=>{

    }).finally(final =>{

    })
  },[])

  const [answers, setAnswers] = useState({});
  
  const userName=localStorage.getItem('name')
  const userEmail=localStorage.getItem('email')

  // Automatically submit after 10 seconds
// const autoSubmitTimeout=setTimeout(() => {
//     const form = document.getElementById("formmm");
//     if (form) {
//         form.requestSubmit(); // Triggers the onsubmit handler
//     }
    
// }, 15000); // 10 seconds

  const handleSubmit = async(e) => {
  e.preventDefault()
  // clearTimeout(autoSubmitTimeout)
  setactive(true)

  axios.post(`https://cit-backend-8-0.onrender.com/saveanswers`,{ answers,userName,userEmail}).then(res=>{

    res.data.message==='Answer saved' ? toast.success(res.data.message) :toast.warn(res.data.message)
    if(res.status===200 && res.data.message==='Answer saved'){
      navigate('/home')
    }
  }).catch(err=>{
    toast.warn(err)
  }).finally(final=>{
  setactive(false);
  })
}

  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer =
      timeLeft > 0 &&
      setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [timeLeft]);

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };


  return (
    <>
    <ToastContainer className={`text-[14px]`}/>
    {timeLeft===300 ? toast.warn("5 minutes left"): ""}
    <div className={`${timeLeft<300 ? "text-red-600" :""} flex items-center justify-end gap-3 p-4 sticky top-0  px-[5%]`}>
        <PiTimerLight className={`${timeLeft<300 ? "text-red-600" :""} font-extrabold text-[45px] text-blue-600 animate-bounce`}/>
        {formatTime(timeLeft)}
    </div>
    <form onSubmit={handleSubmit}>
    
    {questionarray.map((w,c)=>{
      return <div key={c} className='w-full bg-slate-950 p-5 odd:bg-slate-800'>
      
    <div>
    <p className=' overflow-hidden lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none text-wrap'>{c+1}. {w.question1}</p>
    </div>
    <div className={`${w.questionImage==="" ? "hidden" : ""} w-full flex items-center justify-center`}>
      <div className={`${w.questionImage===undefined ? "hidden" :""} w-[200px] h-[200px] `}><img src={w.questionImage} alt={w.questionImage}/></div>
    </div>
    {/* option div there are 4 div */}
    <form onSubmit={handleSubmit} id='formmm'>
      <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>A</p>
    <input type='radio' value={w.option1} name="name" onClick={(e)=>{setAnswers(prev => ({ ...prev, [c]: e.target.value }))
    }} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

    <input value={w.option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
    <input type='radio' value={w.option2} name="name" onClick={(e)=>{setAnswers(prev => ({ ...prev, [c]: e.target.value }))
    }} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

    <input value={w.option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
    <input type='radio' value={w.option3} name="name" onClick={(e)=>{setAnswers(prev => ({ ...prev, [c]: e.target.value }))
    }} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

    <input value={w.option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
    <input type='radio' value={w.option4} name="name" onClick={(e)=>{setAnswers(prev => ({ ...prev, [c]: e.target.value }))
    }} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

    <input value={w.option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
    </div>

    </div>
    </form>
    </div>
    })}
    <div className='w-screen p-3 flex items-center justify-center'>
      {active === false?(<button onSubmit={handleSubmit} type='submit' className='bg-yellow-300 px-[8px] py-[1px] font-bold text-slate-900 rounded-md transition-all active:text-green-500'>Submit</button>):(<Loader></Loader>)}
    </div>
    </form>
    </>
  )
}

export default Quest
