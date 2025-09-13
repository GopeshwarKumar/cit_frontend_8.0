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
    axios.get(`${process.env.REACT_APP_SECRET_KEY}/getandshowquestion`).then(res =>{
      // console.log(res)
      setquestionarray(res.data)
    }).catch(Err=>{

    }).finally(final =>{
    })
  },[])

  useEffect(()=>{
    axios.post(`${process.env.REACT_APP_SECRET_KEY}/appeared`,{userEmail,userName}).then(ress=>{
      console.log(ress)
      if (ress.data.message === 'User Appeared for test'){
        navigate("/home")
      }else {
        // toast.success('Good Luck')
      }

      
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

  axios.post(`${process.env.REACT_APP_SECRET_KEY}/saveanswers`,{ answers,userName,userEmail}).then(res=>{

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
      return <div key={c} className='w-full p-5'>
      
    <div>
    <p className=' overflow-hidden lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-black select-none text-wrap'>{c+1}. {w.question1}</p>
    </div>
    <div className={`${w.questionImage==="" ? "hidden" : ""} w-full flex items-center justify-center`}>
      <div className={`${w.questionImage===undefined ? "hidden" :""} w-[200px] h-[200px] `}><img src={w.questionImage} alt={w.questionImage}/></div>
    </div>
    {/* option div there are 4 div */}
    <form onSubmit={handleSubmit} id='formmm'>
      <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-black font-bold'>A</p>
    <input type='radio' value={w.option1} name="name" onClick={(e)=>{setAnswers(prev => ({ ...prev, [c]: e.target.value }))
    }} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-black sm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

    <input value={w.option1} readOnly className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400  text-white font-bold bg-gray-900 outline-none px-3 rounded-sm cursor-pointer'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-black font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
    <input type='radio' value={w.option2} name="name" onClick={(e)=>{setAnswers(prev => ({ ...prev, [c]: e.target.value }))
    }} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

    <input value={w.option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400  text-white font-bold bg-gray-900 outline-none px-3 rounded-sm cursor-pointer'/></div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-black font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
    <input type='radio' value={w.option3} name="name" onClick={(e)=>{setAnswers(prev => ({ ...prev, [c]: e.target.value }))
    }} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

    <input value={w.option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm cursor-pointer'/></div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-black font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
    <input type='radio' value={w.option4} name="name" onClick={(e)=>{setAnswers(prev => ({ ...prev, [c]: e.target.value }))
    }} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

    <input value={w.option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400  text-white font-bold bg-gray-900 outline-none px-3 rounded-sm cursor-pointer'/>
    </div>
    <button type="button" onClick={()=>{
        setAnswers(prev => ({
    ...prev,
    [c]: ''
  }));

  // Clear the selected radio button
  const radios = document.getElementsByName("name");
  radios.forEach(radio => {
    radio.checked = false;
  });
    }} className="text-center px-4 bg-red-500 text-white rounded">
  Clear
</button>


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






























// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Loader from './Loader'
// import { useNavigate } from 'react-router-dom'
//   import { GoStopwatch } from "react-icons/go";
// import {toast , ToastContainer} from 'react-toastify'
// // import { AuthenticationContext } from '../Auth/AuthProvide'

// function Quest(props) {
  
//   const navigate=useNavigate()
//   // const questauth=useContext(AuthenticationContext)

//   const [Answer1, setAnswer1] = useState()
//   const [Answer2, setAnswer2] = useState()
//   const [Answer3, setAnswer3] = useState()
//   const [Answer4, setAnswer4] = useState()
//   const [Answer5, setAnswer5] = useState()
//   const [Answer6, setAnswer6] = useState()
//   const [Answer7, setAnswer7] = useState()
//   const [Answer8, setAnswer8] = useState()
//   const [Answer9, setAnswer9] = useState()
//   const [Answer10, setAnswer10] = useState()
//   const [Answer11, setAnswer11] = useState()
//   const [Answer12, setAnswer12] = useState()
//   const [Answer13, setAnswer13] = useState()
//   const [Answer14, setAnswer14] = useState()
//   const [Answer15, setAnswer15] = useState()
//   const [Answer16, setAnswer16] = useState()
//   const [Answer17, setAnswer17] = useState()
//   const [Answer18, setAnswer18] = useState()
//   const [Answer19, setAnswer19] = useState()
//   const [Answer20, setAnswer20] = useState()
//   const [Answer21, setAnswer21] = useState()
//   const [Answer22, setAnswer22] = useState()
//   const [Answer23, setAnswer23] = useState()
//   const [Answer24, setAnswer24] = useState()
//   const [Answer25, setAnswer25] = useState()
//   const [Answer26, setAnswer26] = useState()
//   const [Answer27, setAnswer27] = useState()
//   const [Answer28, setAnswer28] = useState()
//   const [Answer29, setAnswer29] = useState()
//   const [Answer30, setAnswer30] = useState()
//   const [loader, setloader] = useState(false)

  
//   const name=localStorage.getItem("name")
//   const email=localStorage.getItem("email")

//   const GetAnswer=(e)=>{
//     e.preventDefault();
//     setloader(true)

//     let score=0
//     if(Answer1==="6 hours"){
//       score=score+4
//     }
//     if(Answer2==="Y"){
//       score=score+4
//     }
//     if(Answer3==="60 hours"){
//       score=score+4
//     }
//     if(Answer4==="physical"){
//       score=score+4
//     }
//     if(Answer5==="Raise : Commensurate"){
//       score=score+4
//     }
//     if(Answer6==="Africa"){
//       score=score+4
//     }
//     if(Answer7==="GrandSon"){
//       score=score+4
//     }
//     if(Answer8==="/ and +"){
//       score=score+4
//     }
//     if(Answer9==="35"){
//       score=score+4
//     }
//     if(Answer10==="Eminent"){
//       score=score+4
//     }
//     if(Answer11==="Keep a secret"){
//       score=score+4
//     }
//     if(Answer12==="physical"){
//       score=score+4
//     }
//     if(Answer13==="hung"){
//       score=score+4
//     }
//     if(Answer14==="taking an exam"){
//       score=score+4
//     }
//     if(Answer15==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer16==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer17==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer18==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer19==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer20==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer21==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer22==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer23==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer24==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer25==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer26==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer27==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer28==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer29==="AsiaAsia"){
//       score=score+4
//     }
//     if(Answer30==="AsiaAsia"){
//       score=score+4
//     }
    
//     axios.post("http://localhost:5000/test",{name,email,Answer1,Answer2,Answer3,Answer4,Answer5,Answer6,Answer7,Answer8,Answer9,Answer10,Answer11,Answer12,Answer13,Answer14,Answer15,Answer16,Answer17,Answer18,Answer19,Answer20,Answer21,Answer22,Answer23,Answer24,Answer25,Answer26,Answer27,Answer28,Answer29,Answer30,score}).then(res =>{
//       if(res.status===200 & res.data.message=== "Result saved !"){
//         toast.success('Result saved !',{})
//         navigate("/home")
//       }
//     }).catch(er =>{
//       // console.log(er)
//     }).finally(final =>{
//       setloader(false)
//     })
// // console.log(Answer1)
// // console.log(Answer2)
// // console.log(Answer3)
// // console.log(Answer4)
// // console.log(Answer5)
// // console.log(Answer6)
// // console.log(Answer7)
// // console.log(Answer8)
// // console.log(Answer9)
// // console.log(Answer10)
// // console.log(Answer11)
// // console.log(Answer12)
// // console.log(Answer13)
// // console.log(Answer14)
// // console.log(Answer15)
// // console.log(Answer16)
// // console.log(Answer17)
// // console.log(Answer18)
// // console.log(Answer19)
// // console.log(Answer20)
// // console.log(Answer21)
// // console.log(Answer22)
// // console.log(Answer23)
// // console.log(Answer24)
// // console.log(Answer25)
// // console.log(Answer26)
// // console.log(Answer27)
// // console.log(Answer28)
// // console.log(Answer29)
// // console.log(Answer30)
// // console.log(testemail)
//   }

//   let Question1="On Sunday the ratio of the speed of the boat in still water going upstream and downstream is 5:7. The difference between the time to cover upstream and downstream distance is 6 hours. Find the total time to cover the upstream and downstream distance"
//   let Question1option1="6 hours" //answer
//   let Question1option2="12 hours"
//   let Question1option3="18 hours"
//   let Question1option4="15 hours"

//   let Question2=
//   "In a family represented by the relationships X # Y @ Z $ W * V & U, where:P#Q means P is the mother of Q.P$Q means P is the brother of Q.P∗Q means P is the daughter of Q.P@Q means P is the husband of Q.P&Q means P is the son-in-law of Q .  Who is the paternal grandfather of VVV?"
//   let Question2option1="X"
//   let Question2option2="Y"
//   let Question2option3="U"
//   let Question2option4="CAN'T DETERMINED" //answer

//   let Question3="Contractor 1st and Contractor 2nd together can Paint HALL 14 in 96 hours. If Contractor 1st decreass his efficiency by 30%, and Contractor 2nd gains his efficiency by 10 %, the work is finished in 120 hours. If Contractor 1st works for his original efficiency and Contractor 2nd works for 1.5 times of his efficiency, they together can finish the painting of HALL 11 in how many hours?"
//   let Question3option1="40 hours"
//   let Question3option2="60 hours" //answer
//   let Question3option3="80 hours"
//   let Question3option4="120 hours"

//   let Question4="He has experienced ............. abuse"
//   let Question4option1="palpable"
//   let Question4option2="visible"
//   let Question4option3="physical" //answer
//   let Question4option4="Intangible"

//   let Question5=" ELEVATED : EXALTED "
//   let Question5option1="Promoted : Excellence"
//   let Question5option2="Raise : Commensurate" //answer
//   let Question5option3=" Dirty : Filthy"
//   let Question5option4="Disorderly : Unfaithful"

//   let Question6="In code language , REACTION is written as 9-22-26-24-7-18-12-13 and SCIENCE is written as 8-24-18-22-13-24-22. How will CHEMICAL be written in that language?"
//   let Question6option1="Asia"
//   let Question6option2="Europe"
//   let Question6option3="Africa" //answer
//   let Question6option4="America"

//   let Question7="If X is the father of A; A is the brother of B; and B is the sister of C, C is paternal uncle of D . How D is related to X ?"
//   let Question7option1="GrandSon" // answer
//   let Question7option2="Nephew"
//   let Question7option3="Niece"
//   let Question7option4="Mother"

//   let Question8="which of the following interchange of sign would make the given equation correct 990+10+28*2-9+10=130"
//   let Question8option1=" + and *"
//   let Question8option2=" * and -"
//   let Question8option3="/ and +" // answer
//   let Question8option4=" - and /"

//   let Question9="Select the missing number. 6,14,24,36,?"
//   let Question9option1="25"
//   let Question9option2="35" // answer
//   let Question9option3="45"
//   let Question9option4="50"

//   let Question10="The doctor directed the nurse to administer an ...... medicine to the patient"
//   let Question10option1="Eminent" // answer
//   let Question10option2="Alternative"
//   let Question10option3="insightful"
//   let Question10option4="official"

//   let Question11=". It is very dificult for her to ............."
//   let Question11option1="Keep a secret" // answer
//   let Question11option2="Touch a secret"
//   let Question11option3="Make a secret"
//   let Question11option4="Cry a secret"

//   let Question12="He has experienced ............. abuse"
//   let Question12option1="palpable"
//   let Question12option2="visible"
//   let Question12option3="physical" // answer
//   let Question12option4="Intangible"

//   let Question13="A faint mist ............ over the valley"
//   let Question13option1="hung" // answer
//   let Question13option2="swung"
//   let Question13option3="swayed"
//   let Question13option4="dangled"

//   let Question14="i am ............... after five years"
//   let Question14option1="making an exam"
//   let Question14option2="taking an exam" // answer
//   let Question14option3="keeping an exam"
//   let Question14option4="frying an exam"

//   let Question15="Where is india ?"
//   let Question15option1="AsiaAsia" // answer
//   let Question15option2="Europe"
//   let Question15option3="Africa"
//   let Question15option4="America"

//   let Question16="Where is india ?"
//   let Question16option1="AsiaAsia" // answer
//   let Question16option2="Europe"
//   let Question16option3="Africa"
//   let Question16option4="America"

//   let Question17="Where is india ?"
//   let Question17option1="AsiaAsia" // answer
//   let Question17option2="Europe"
//   let Question17option3="Africa"
//   let Question17option4="America"

//   let Question18="Where is india ?"
//   let Question18option1="AsiaAsia" // answer
//   let Question18option2="Europe"
//   let Question18option3="Africa"
//   let Question18option4="America"

//   let Question19="Where is india ?"
//   let Question19option1="AsiaAsia" // answer
//   let Question19option2="Europe"
//   let Question19option3="Africa"
//   let Question19option4="America"

//   let Question20="Where is india ?"
//   let Question20option1="AsiaAsia"
//   let Question20option2="Europe"
//   let Question20option3="Africa"
//   let Question20option4="America"

//   let Question21="Where is india ?"
//   let Question21option1="AsiaAsia"
//   let Question21option2="Europe"
//   let Question21option3="Africa"
//   let Question21option4="America"

//   let Question22="Where is india ?"
//   let Question22option1="AsiaAsia"
//   let Question22option2="Europe"
//   let Question22option3="Africa"
//   let Question22option4="America"

//   let Question23="Where is india ?"
//   let Question23option1="AsiaAsia"
//   let Question23option2="Europe"
//   let Question23option3="Africa"
//   let Question23option4="America"

//   let Question24="Where is india ?"
//   let Question24option1="AsiaAsia"
//   let Question24option2="Europe"
//   let Question24option3="Africa"
//   let Question24option4="America"

//   let Question25="Where is india ?"
//   let Question25option1="AsiaAsia"
//   let Question25option2="Europe"
//   let Question25option3="Africa"
//   let Question25option4="America"

//   let Question26="Where is india ?"
//   let Question26option1="AsiaAsia"
//   let Question26option2="Europe"
//   let Question26option3="Africa"
//   let Question26option4="America"

//   let Question27="Where is india ?"
//   let Question27option1="AsiaAsia"
//   let Question27option2="Europe"
//   let Question27option3="Africa"
//   let Question27option4="America"

//   let Question28="Where is india ?"
//   let Question28option1="AsiaAsia"
//   let Question28option2="Europe"
//   let Question28option3="Africa"
//   let Question28option4="America"

//   let Question29="Where is india ?"
//   let Question29option1="AsiaAsia"
//   let Question29option2="Europe"
//   let Question29option3="Africa"
//   let Question29option4="America"

//   let Question30="Where is india ?"
//   let Question30option1="AsiaAsia"
//   let Question30option2="Europe"
//   let Question30option3="Africa"
//   let Question30option4="America"


// // const [minutes, setMinutes] = useState(30);
// //   const [seconds, setSeconds] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       if (seconds > 0) {
// //         setSeconds(prev => prev - 1);
// //       } else {
// //         if (minutes === 0) {
// //           clearInterval(timer);
// //           alert("Time's up!");
// //         } else {
// //           setMinutes(prev => prev - 1);
// //           setSeconds(59);
// //         }
// //       }
// //     }, 1000);

// //     // return () => clearInterval(timer); // Cleanup on unmount
// //   }, [seconds, minutes]);

//   return (
//     <>
//     <ToastContainer/>
//     <div className='float-right px-4 py-2 top-0 sticky flex items-center gap-5 bg-green-400 rounded-md font-bold'>
//     <GoStopwatch className='animate-bounce font-bold'  />
//     <p>30 : 00</p>
//     </div>
//     <div className='w-screen overflow-hidden'>

//       {/* question div 1*/}
//     <div className='w-full bg-slate-900 p-5 mt-2'>
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>1. {Question1}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//     <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

// <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
// <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
// <input type='radio' value={Question1option1} name="name" onClick={(e)=>{setAnswer1(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

// <input value={Question1option1} readOnly className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
// </div>

// <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
// <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
// <input type='radio' value={Question1option2} name="name" onClick={(e)=>{setAnswer1(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

// <input value={Question1option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
// </div>

// <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
// <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
// <input type='radio' value={Question1option3} name="name" onClick={(e)=>{setAnswer1(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

// <input value={Question1option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
// </div>

// <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
// <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
// <input type='radio' value={Question1option4} name="name" onClick={(e)=>{setAnswer1(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

// <input value={Question1option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
// </div>

// <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>
// </div>
//     </form>
//     </div>

//     {/* question div 2*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>2. {Question2}</p>
//     </div>
    

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question2option1} name="name" onClick={(e)=>{setAnswer2(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question2option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' onClick={(e)=>{setAnswer2(e.target.value)}} name="name" value={Question2option2} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question2option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question2option3} name="name" onClick={(e)=>{setAnswer2(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question2option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question2option4} name="name" onClick={(e)=>{setAnswer2(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question2option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>
//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>
   
//     {/* question div 3*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>3. {Question3}</p>
//     </div>
    

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question3option1} name="name" onClick={(e)=>{setAnswer3(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question3option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question3option2} name="name" onClick={(e)=>{setAnswer3(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question3option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question3option3} name="name" onClick={(e)=>{setAnswer3(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question3option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question3option4} name="name" onClick={(e)=>{setAnswer3(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question3option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>
    
//     {/* question div 4*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>4. {Question4}</p>
//     </div>
    

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold'>A</p>
//     <input type='radio' value={Question4option1} name="name" onClick={(e)=>{setAnswer4(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question4option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question4option2} name="name" onClick={(e)=>{setAnswer4(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question4option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question4option3} name="name" onClick={(e)=>{setAnswer4(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question4option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question4option4} name="name" onClick={(e)=>{setAnswer4(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question4option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>
    

//     {/* question div 5*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>5. {Question5}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question5option1} name="name" onClick={(e)=>{setAnswer5(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question5option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question5option2} name="name" onClick={(e)=>{setAnswer5(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question5option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question5option3} name="name" onClick={(e)=>{setAnswer5(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question5option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question5option4} name="name" onClick={(e)=>{setAnswer5(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question5option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>
    

//     {/* question div 6*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>6. {Question6}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question6option1} name="name" onClick={(e)=>{setAnswer6(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question6option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question6option2} name="name" onClick={(e)=>{setAnswer6(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question6option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question6option3} name="name" onClick={(e)=>{setAnswer6(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question6option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question6option4} name="name" onClick={(e)=>{setAnswer6(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question6option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>

//     {/* question div 7*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>7. {Question7}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question7option1} name="name" onClick={(e)=>{setAnswer7(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question7option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question7option2} name="name" onClick={(e)=>{setAnswer7(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question7option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question7option3} name="name" onClick={(e)=>{setAnswer7(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question7option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question7option4} name="name" onClick={(e)=>{setAnswer7(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question7option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>
    

//     {/* question div 8*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>8. {Question8}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question8option1} name="name" onClick={(e)=>{setAnswer8(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question8option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question8option2} name="name" onClick={(e)=>{setAnswer8(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question8option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question8option3} name="name" onClick={(e)=>{setAnswer8(e.target.value)}}  readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question8option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question8option4} name="name" onClick={(e)=>{setAnswer8(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question8option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div> 
//     </form>
//     </div>


//     {/* question div 9*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>9. {Question9}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question9option1} name="name" onClick={(e)=>{setAnswer9(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question9option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question9option2} name="name" onClick={(e)=>{setAnswer9(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question9option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question9option3} name="name" onClick={(e)=>{setAnswer9(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question9option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question9option4} name="name" onClick={(e)=>{setAnswer9(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question9option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 10*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>10. {Question10}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question10option1} name="name" onClick={(e)=>{setAnswer10(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question10option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question10option2} name="name" onClick={(e)=>{setAnswer10(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question10option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question10option3} name="name" onClick={(e)=>{setAnswer10(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question10option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question10option4} name="name" onClick={(e)=>{setAnswer10(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question10option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 11*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>11. {Question11}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question11option1} name="name" onClick={(e)=>{setAnswer11(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question11option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question11option2} name="name" onClick={(e)=>{setAnswer11(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question11option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question11option3} name="name" onClick={(e)=>{setAnswer11(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question11option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question11option4} name="name" onClick={(e)=>{setAnswer11(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question11option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 12*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>12. {Question12}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question12option1} name="name" onClick={(e)=>{setAnswer12(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question12option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question12option2} name="name" onClick={(e)=>{setAnswer12(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question12option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question12option3} name="name" onClick={(e)=>{setAnswer12(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question12option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question12option4} name="name" onClick={(e)=>{setAnswer12(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question12option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 13*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>13. {Question13}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question13option1} name="name" onClick={(e)=>{setAnswer13(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question13option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question13option2} name="name" onClick={(e)=>{setAnswer13(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question13option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question13option3} name="name" onClick={(e)=>{setAnswer13(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question13option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question13option4} name="name" onClick={(e)=>{setAnswer13(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question13option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 14*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>14. {Question14}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question14option1} name="name" onClick={(e)=>{setAnswer14(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question14option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question14option2} name="name" onClick={(e)=>{setAnswer14(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question14option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question14option3} name="name" onClick={(e)=>{setAnswer14(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question14option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question14option4} name="name" onClick={(e)=>{setAnswer14(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question14option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 15*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>15. {Question15}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question15option1} name="name" onClick={(e)=>{setAnswer15(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question15option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question15option2} name="name" onClick={(e)=>{setAnswer15(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question15option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question15option3} name="name" onClick={(e)=>{setAnswer15(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question15option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question15option4} name="name" onClick={(e)=>{setAnswer15(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question15option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 16*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>16. {Question16}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question16option1} name="name" onClick={(e)=>{setAnswer16(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question16option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question16option2} name="name" onClick={(e)=>{setAnswer16(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question16option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question16option3} name="name" onClick={(e)=>{setAnswer16(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question16option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question16option4} name="name" onClick={(e)=>{setAnswer16(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question16option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 17*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>17. {Question17}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question17option1} name="name" onClick={(e)=>{setAnswer17(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question17option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question17option2} name="name" onClick={(e)=>{setAnswer17(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question17option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question17option3} name="name" onClick={(e)=>{setAnswer17(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question17option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question17option4} name="name" onClick={(e)=>{setAnswer17(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question17option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 18*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>18. {Question18}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question18option1} name="name" onClick={(e)=>{setAnswer18(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question18option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question18option2} name="name" onClick={(e)=>{setAnswer18(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question18option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question18option3} name="name" onClick={(e)=>{setAnswer18(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question18option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question18option4} name="name" onClick={(e)=>{setAnswer18(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question18option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 19*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>19. {Question19}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question19option1} name="name" onClick={(e)=>{setAnswer19(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question19option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question19option2} name="name" onClick={(e)=>{setAnswer19(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question19option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question19option3} name="name" onClick={(e)=>{setAnswer19(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question19option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question19option4} name="name" onClick={(e)=>{setAnswer19(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question19option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 20*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>20. {Question20}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question20option1} name="name" onClick={(e)=>{setAnswer20(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question20option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question20option2} name="name" onClick={(e)=>{setAnswer20(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question20option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question20option3} name="name" onClick={(e)=>{setAnswer20(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question20option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question20option4} name="name" onClick={(e)=>{setAnswer20(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question20option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>

//     {/* question div 21*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>21. {Question21}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question21option1} name="name" onClick={(e)=>{setAnswer21(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question21option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question21option2} name="name" onClick={(e)=>{setAnswer21(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question21option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question21option3} name="name" onClick={(e)=>{setAnswer21(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question21option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question21option4} name="name" onClick={(e)=>{setAnswer21(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question21option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>

    
//     {/* question div 22*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>22. {Question22}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question22option1} name="name" onClick={(e)=>{setAnswer22(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question22option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question22option2} name="name" onClick={(e)=>{setAnswer22(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question22option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question22option3} name="name" onClick={(e)=>{setAnswer22(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question22option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question22option4} name="name" onClick={(e)=>{setAnswer22(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question22option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 23*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>23. {Question23}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question23option1} name="name" onClick={(e)=>{setAnswer23(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question23option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question23option2} name="name" onClick={(e)=>{setAnswer23(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question23option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question23option3} name="name" onClick={(e)=>{setAnswer23(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question23option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question23option4} name="name" onClick={(e)=>{setAnswer23(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question23option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 24*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>24. {Question24}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question24option1} name="name" onClick={(e)=>{setAnswer24(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question24option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question24option2} name="name" onClick={(e)=>{setAnswer24(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question24option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question24option3} name="name" onClick={(e)=>{setAnswer24(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question24option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question24option4} name="name" onClick={(e)=>{setAnswer24(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question24option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 25*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>25. {Question25}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question25option1} name="name" onClick={(e)=>{setAnswer25(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question25option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question25option2} name="name" onClick={(e)=>{setAnswer25(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question25option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question25option3} name="name" onClick={(e)=>{setAnswer25(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question25option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question25option4} name="name" onClick={(e)=>{setAnswer25(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question25option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 26*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>26. {Question26}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question26option1} name="name" onClick={(e)=>{setAnswer26(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question26option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question26option2} name="name" onClick={(e)=>{setAnswer26(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question26option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question26option3} name="name" onClick={(e)=>{setAnswer26(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question26option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question26option4} name="name" onClick={(e)=>{setAnswer26(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question26option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 27*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>27. {Question27}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question27option1} name="name" onClick={(e)=>{setAnswer27(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question27option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question27option2} name="name" onClick={(e)=>{setAnswer27(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question27option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question27option3} name="name" onClick={(e)=>{setAnswer27(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question27option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question27option4} name="name" onClick={(e)=>{setAnswer27(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question27option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 28*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>28. {Question28}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question28option1} name="name" onClick={(e)=>{setAnswer28(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question28option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question28option2} name="name" onClick={(e)=>{setAnswer28(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question28option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question28option3} name="name" onClick={(e)=>{setAnswer28(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question28option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question28option4} name="name" onClick={(e)=>{setAnswer28(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question28option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 29*/}
//     <div className='w-full bg-slate-900 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>29. {Question29}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question29option1} name="name" onClick={(e)=>{setAnswer29(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question29option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question29option2} name="name" onClick={(e)=>{setAnswer29(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question29option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question29option3} name="name" onClick={(e)=>{setAnswer29(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question29option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question29option4} name="name" onClick={(e)=>{setAnswer29(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question29option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     </form>
//     </div>


//     {/* question div 30*/}
//     <div className='w-full bg-slate-950 p-5'>
      
//     <div>
//     <p className='lg:px-[20vw] md:px-[15vw] sm:px-[10vw] sm:text-[20px] mb:px-[5vw] lg:py-0 vmd:py-5 mb:text-[17px] vmd:text-[15px] text-yellow-300 select-none first-letter:text-white first-letter:text-[25px] '>30. {Question30}</p>
//     </div>

//     {/* option div there are 4 div */}
//     <form onSubmit={GetAnswer}>
//       <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>A</p>
//     <input type='radio' value={Question30option1} name="name" onClick={(e)=>{setAnswer30(e.target.value)}} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question30option1} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/>
//     </div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>B</p>
//     <input type='radio' value={Question30option2} name="name" onClick={(e)=>{setAnswer30(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question30option2} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>C</p>
//     <input type='radio' value={Question30option3} name="name" onClick={(e)=>{setAnswer30(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question30option3} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
//     <p className='text-yellow-300 font-bold sm:text-[25px] vmd:text-[20px]'>D</p>
//     <input type='radio' value={Question30option4} name="name" onClick={(e)=>{setAnswer30(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:h-[30px] vmd:h-[15px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

//     <input value={Question30option4} placeholder='' readOnly={true} className=' text-center xl:w-[20vw] lg:w-[25vw] sm:w-[40vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[30px] lg:text-[20px] sm:text-[20px] mb:text-[17px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3 rounded-sm'/></div>

//     <div className='flex items-center justify-between gap-4 mt-[5%]'>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-red-500 '>Clear</button>
//   <button className='sm:text-[20px] text-[16px] py-[1px] px-[15px] rounded-[20px] hover:opacity-60 bg-blue-500 '>Next</button>
// </div>

//     </div>
//     <div className='w-screen flex items-center justify-center mt-[5%]'>
//     {loader === false ? (<button type='submit' className='bg-yellow-300 px-[8px] py-[1px] text-black font-bold rounded-md transition-all active:text-green-500'>Submit</button>) :(<Loader></Loader>)}
//     </div>
//     </form>
//     </div>

// </div>
//     </>
//   )
// }

// export default Quest