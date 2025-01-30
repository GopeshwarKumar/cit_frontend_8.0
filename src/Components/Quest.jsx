import React, { useState } from 'react'
import axios from 'axios'

function Quest(props) {

  const [Answer1, setAnswer1] = useState()
  const [Answer2, setAnswer2] = useState()
  const [Answer3, setAnswer3] = useState()
  const [Answer4, setAnswer4] = useState()
  const [Answer5, setAnswer5] = useState()
  const [Answer6, setAnswer6] = useState()
  const [Answer7, setAnswer7] = useState()
  const [Answer8, setAnswer8] = useState()
  const [testemail, settestemail] = useState()
  const [formloader, setformloader] = useState("")
  // const [Answer9, setAnswer9] = useState()


  const GetAnswer=(e)=>{
    e.preventDefault()
    let score=0
    if(Answer1==="6 hours"){
      score=score+4
    }
    if(Answer2==="one"){
      score=score+4
    }
    if(Answer3==="60 hours"){
      score=score+4
    }
    if(Answer4==="physical"){
      score=score+4
    }
    if(Answer5==="Raise : Commensurate"){
      score=score+4
    }
    if(Answer6==="Asia"){
      score=score+4
    }
    if(Answer7==="Asia"){
      score=score+4
    }
    if(Answer8==="Asia"){
      score=score+4
    }
    let finalScore=score
    console.log(finalScore)
    axios.post("http://localhost:5000/test",{Answer1,Answer2,Answer3,Answer4,Answer5,Answer6,Answer7,Answer8,finalScore,testemail}).then(res =>{
      // console.log(res)
      setformloader("wait answer saving")
    }).catch(er =>{
      console.log(er)
    }).finally(a =>{
      setformloader("")
    })
// console.log(Answer1)
// console.log(Answer2)
// console.log(Answer3)
// console.log(Answer4)
// console.log(Answer5)
// console.log(Answer6)
// console.log(Answer7)
// console.log(Answer8)
// console.log(testemail)
  }
  let Question1="On Sunday the ratio of the speed of the boat in still water going upstream and downstream is 5:7. The difference between the time to cover upstream and downstream distance is 6 hours. Find the total time to cover the upstream and downstream distance"
  let Question1option1="6 hours"
  let Question1option2="12 hours"
  let Question1option3="18 hours"
  let Question1option4="15 hours"

  let Question2="If all the letters of the word “IDENTIFICATION” are arranged in alphabetical order from the left end, then how many consonants appear at the even-numbered position from the right end after the arrangement?"
  let Question2option1="One"
  let Question2option2="Two"
  let Question2option3="Three"
  let Question2option4="Four"

  let Question3="Contractor 1st and Contractor 2nd together can Paint HALL 14 in 96 hours. If Contractor 1st decreass his efficiency by 30%, and Contractor 2nd gains his efficiency by 10 %, the work is finished in 120 hours. If Contractor 1st works for his original efficiency and Contractor 2nd works for 1.5 times of his efficiency, they together can finish the painting of HALL 11 in how many hours?"
  let Question3option1="40 hours"
  let Question3option2="60 hours"
  let Question3option3="80 hours"
  let Question3option4="120 hours"

  let Question4="He has experienced ............. abuse"
  let Question4option1="palpable"
  let Question4option2="visible"
  let Question4option3="physical"
  let Question4option4="Intangible"

  let Question5=" ELEVATED : EXALTED "
  let Question5option1="Promoted : Excellence"
  let Question5option2="Raise : Commensurate"
  let Question5option3=" Dirty : Filthy"
  let Question5option4="Disorderly : Unfaithful"

  let Question6="In code language , REACTION is written as 9-22-26-24-7-18-12-13 and SCIENCE is written as 8-24-18-22-13-24-22. How will CHEMICAL be written in that language?"
  let Question6option1="Asia"
  let Question6option2="Europe"
  let Question6option3="Africa"
  let Question6option4="America"

  let Question7="Where is india ?"
  let Question7option1="Asia"
  let Question7option2="Europe"
  let Question7option3="Africa"
  let Question7option4="America"

  let Question8="Where is india ?"
  let Question8option1="Asia"
  let Question8option2="Europe"
  let Question8option3="Africa"
  let Question8option4="America"

  const usermail=localStorage.getItem("userNmaeEmail")
  return (
    <>
    {/* bg-[url("/public/assets/questionbg.webp")] */}
    <div className='w-screen flex flex-col items-center justify-center p-5 bg-slate-900'>
    <form onSubmit={GetAnswer} className='flex items-center justify-center flex-col '>
      <p>{usermail}</p>
      <input type="email" required name=""  placeholder="Enter Above E-Mail" onChange={(e)=>{settestemail(e.target.value)}} className='text-black outline-none px-3 rounded-md'/>
    </form>
    </div>
    <div className='w-screen min-h-screen bg-slate-900 bg-cover box-border bg-no-repeat bg-center py-10'> 

      {/* question div 1*/}
    <div className='w-screen min-h-[15vh]  '>
      
    <div>
    <p className='text-white font-extrabold px-5 rounded-full select-none'>1</p>
    {/* <p className='vmd:w-screen px-3 py-3 select-none sm:text-[22px] mb:text-[18px] vmd:text-[15px]'>text-center{props.questionIntro}</p> */}

    <p className='text-center font-extrabold px-5 rounded-full select-none text-yellow-300'>{props.SubqustionNumber}</p>
    <p className=' vmd:w-screen p-2  lg:px-[20vw] md:px-[15vw] sm:px-[10vw] text-yellow-300 select-none text-center leading-[28px] '>{Question1}</p>
    </div>


    {/* <div className='flex items-center justify-center'>
    <img src={props.questionimage} alt={props.questionimage} className='lg:w-[50vw] lg:h-[30vh] sm:w-[60vw] min-sm:h-[20vh] w-[70vw] h-[30vh] select-none' />
    </div> */}

    {/* </div> */}
    </div>

    {/* option div there are 4 div */}
    <form onSubmit={GetAnswer}>
    <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

<div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
<p className='text-yellow-300 font-bold'>A</p>
<input type='radio' value={Question1option1} name="name" onClick={(e)=>{setAnswer1(e.target.value)}} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-black sm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

<input value={Question1option1} readOnly className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
</div>

<div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
<p className='text-yellow-300 font-bold'>B</p>
<input type='radio' value={Question1option2} name="name" onClick={(e)=>{setAnswer1(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

<input value={Question1option2} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
</div>

<div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
<p className='text-yellow-300 font-bold'>C</p>
<input type='radio' value={Question1option3} name="name" onClick={(e)=>{setAnswer1(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

<input value={Question1option3} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
</div>

<div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
<p className='text-yellow-300 font-bold'>D</p>
<input type='radio' value={Question1option4} name="name" onClick={(e)=>{setAnswer1(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full cursor-pointer'/>

<input value={Question1option4} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
</div>
{/* <button>Clear</button> */}
</div>
    </form>

    {/* question div 2*/}
    <div className='w-screen min-h-[15vh] '>

    <div className=''>
    <p className='text-white font-extrabold px-5 rounded-full select-none'>{props.qustionNumber}2</p>

    <p className='text-center font-extrabold px-5 rounded-full select-none text-yellow-300'>{props.SubqustionNumber}</p>
    <p className=' vmd:w-screen p-2  lg:px-[20vw] md:px-[15vw] sm:px-[10vw] text-yellow-300 select-none text-center leading-[28px] '>{Question2}</p>
    </div>
    </div>

    {/* option div there are 4 div */}
    <form onSubmit={GetAnswer}>
      <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>A</p>
    <input type='radio' value={Question2option1} name="name" onClick={(e)=>{setAnswer2(e.target.value)}} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-black sm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full '/>

    <input value={Question2option1} className='text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>B</p>
    <input type='radio' onClick={(e)=>{setAnswer2(e.target.value)}} name="name" value={Question2option2} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full '/>

    <input value={Question2option2} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>C</p>
    <input type='radio' value={Question2option3} name="name" onClick={(e)=>{setAnswer2(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full '/>

    <input value={Question2option3} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>D</p>
    <input type='radio' value={Question2option4} name="name" onClick={(e)=>{setAnswer2(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question2option4} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    </div>
    </form>
   
    {/* question div 3*/}
    <div className='w-screen min-h-[15vh]  '>

    <div>
    <p className='text-white font-extrabold px-5 rounded-full select-none'>{props.qustionNumber}3</p>
    {/* <p className='vmd:w-screen px-3 py-3 select-none sm:text-[22px] mb:text-[18px] vmd:text-[15px]'>text-center{props.questionIntro}</p> */}

    <p className='text-center font-extrabold px-5 rounded-full select-none text-yellow-300'>
      {props.SubqustionNumber}</p>
      <p className=' vmd:w-screen p-2  lg:px-[15vw] md:px-[15vw] sm:px-[10vw] text-yellow-300 select-none text-center leading-[28px] '>
    {Question3}</p>
    </div>
    </div>

    {/* option div there are 4 div */}
    <form onSubmit={GetAnswer}>
      <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>A</p>
    <input type='radio' value={Question3option1} name="name" onClick={(e)=>{setAnswer3(e.target.value)}} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-black sm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full '/>

    <input value={Question3option1} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>B</p>
    <input type='radio' value={Question3option2} name="name" onClick={(e)=>{setAnswer3(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full '/>

    <input value={Question3option2} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>C</p>
    <input type='radio' value={Question3option3} name="name" onClick={(e)=>{setAnswer3(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question3option3} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>D</p>
    <input type='radio' value={Question3option4} name="name" onClick={(e)=>{setAnswer3(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question3option4} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    </div>
    </form>
    
    {/* question div 4*/}
    <div className='w-screen min-h-[15vh]  '>
    {/* lg:grid lg:grid-cols-2 */}
    {/* {Qustionarray.map((index,e)=>{
        return <p className='border-white border-2 '> { index}</p>
    })} */}

    {/* <div> */}
    <div>
    <p className='text-white font-extrabold px-5 rounded-full select-none'>
      {props.qustionNumber}4
      </p>
    {/* <p className='vmd:w-screen px-3 py-3 select-none sm:text-[22px] mb:text-[18px] vmd:text-[15px]'>text-center{props.questionIntro}</p> */}

    <p className='text-center font-extrabold px-5 rounded-full select-none text-yellow-300'>
      {props.SubqustionNumber}
      </p>
    <p className=' vmd:w-screen p-2  lg:px-[15vw] md:px-[15vw] sm:px-[10vw] text-yellow-300 select-none text-center leading-[28px] '>
{Question4}</p>
    </div>


    {/* <div className='flex items-center justify-center'>
    <img src={props.questionimage} alt={props.questionimage} className='lg:w-[50vw] lg:h-[30vh] sm:w-[60vw] min-sm:h-[20vh] w-[70vw] h-[30vh] select-none' />
    </div> */}

    {/* </div> */}
    </div>

    {/* option div there are 4 div */}
    <form onSubmit={GetAnswer}>
      <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>A</p>
    <input type='radio' value={Question4option1} name="name" onClick={(e)=>{setAnswer4(e.target.value)}} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-black sm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full '/>

    <input value={Question4option1} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>B</p>
    <input type='radio' value={Question4option2} name="name" onClick={(e)=>{setAnswer4(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question4option2} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>C</p>
    <input type='radio' value={Question4option3} name="name" onClick={(e)=>{setAnswer4(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full '/>

    <input value={Question4option3} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>D</p>
    <input type='radio' value={Question4option4} name="name" onClick={(e)=>{setAnswer4(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question4option4} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    </div>
    </form>
    

    {/* question div 5*/}
    <div className='w-screen min-h-[15vh]  '>
    {/* lg:grid lg:grid-cols-2 */}
    {/* {Qustionarray.map((index,e)=>{
        return <p className='border-white border-2 '> { index}</p>
    })} */}

    {/* <div> */}
    <div>
    <p className='text-white font-extrabold px-5 rounded-full select-none'>
      {props.qustionNumber}5</p>
    {/* <p className='vmd:w-screen px-3 py-3 select-none sm:text-[22px] mb:text-[18px] vmd:text-[15px]'>text-center{props.questionIntro}</p> */}

    <p className='text-center font-extrabold px-5 rounded-full select-none text-yellow-300'>
      {props.SubqustionNumber}
      </p>
      <p className=' vmd:w-screen p-2  lg:px-[15vw] md:px-[15vw] sm:px-[10vw] text-yellow-300 select-none text-center leading-[28px] '>{Question5}</p>
    </div>


    {/* <div className='flex items-center justify-center'>
    <img src={props.questionimage} alt={props.questionimage} className='lg:w-[50vw] lg:h-[30vh] sm:w-[60vw] min-sm:h-[20vh] w-[70vw] h-[30vh] select-none' />
    </div> */}

    {/* </div> */}
    </div>

    {/* option div there are 4 div */}
    <form onSubmit={GetAnswer}>
      <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>A</p>
    <input type='radio' value={Question5option1} name="name" onClick={(e)=>{setAnswer5(e.target.value)}} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-black sm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full '/>

    <input value={Question5option1} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>B</p>
    <input type='radio' value={Question5option2} name="name" onClick={(e)=>{setAnswer5(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question5option2} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>C</p>
    <input type='radio' value={Question5option3} name="name" onClick={(e)=>{setAnswer5(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question5option3} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>D</p>
    <input type='radio' value={Question5option4} name="name" onClick={(e)=>{setAnswer5(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question5option4} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    </div>
    </form>
    

    {/* question div 6*/}
    <div className='w-screen min-h-[15vh]  '>
    {/* lg:grid lg:grid-cols-2 */}
    {/* {Qustionarray.map((index,e)=>{
        return <p className='border-white border-2 '> { index}</p>
    })} */}

    {/* <div> */}
    <div>
    <p className='text-white font-extrabold px-5 rounded-full select-none'>{props.qustionNumber}6</p>
    {/* <p className='vmd:w-screen px-3 py-3 select-none sm:text-[22px] mb:text-[18px] vmd:text-[15px]'>text-center{props.questionIntro}</p> */}

    <p className='text-center font-extrabold px-5 rounded-full select-none text-yellow-300'>{props.SubqustionNumber}</p>
    <p className=' vmd:w-screen p-2  lg:px-[15vw] md:px-[15vw] sm:px-[10vw] text-yellow-300 select-none text-center leading-[28px] '>{Question6}</p>
    </div>


    {/* <div className='flex items-center justify-center'>
    <img src={props.questionimage} alt={props.questionimage} className='lg:w-[50vw] lg:h-[30vh] sm:w-[60vw] min-sm:h-[20vh] w-[70vw] h-[30vh] select-none' />
    </div> */}

    {/* </div> */}
    </div>

    {/* option div there are 4 div */}
    <form onSubmit={GetAnswer}>
      <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>A</p>
    <input type='radio' value={Question6option1} name="name" onClick={(e)=>{setAnswer6(e.target.value)}} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-black sm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full '/>

    <input value={Question6option1} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>B</p>
    <input type='radio' value={Question6option2} name="name" onClick={(e)=>{setAnswer6(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question6option2} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>C</p>
    <input type='radio' value={Question6option3} name="name" onClick={(e)=>{setAnswer6(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question6option3} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>D</p>
    <input type='radio' value={Question6option4} name="name" onClick={(e)=>{setAnswer6(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question6option4} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    </div>
    </form>

    {/* question div 7*/}
    <div className='w-screen min-h-[15vh]  '>
    {/* lg:grid lg:grid-cols-2 */}
    {/* {Qustionarray.map((index,e)=>{
        return <p className='border-white border-2 '> { index}</p>
    })} */}

    {/* <div> */}
    <div>
    <p className='text-white font-extrabold px-5 rounded-full select-none'>{props.qustionNumber}7</p>
    {/* <p className='vmd:w-screen px-3 py-3 select-none sm:text-[22px] mb:text-[18px] vmd:text-[15px]'>text-center{props.questionIntro}</p> */}

    <p className='text-center font-extrabold px-5 rounded-full select-none text-yellow-300'>
      {props.SubqustionNumber}</p>
      <p className=' vmd:w-screen p-2  lg:px-[15vw] md:px-[15vw] sm:px-[10vw] text-yellow-300 select-none text-center leading-[28px] '>{Question7}</p>
    </div>


    {/* <div className='flex items-center justify-center'>
    <img src={props.questionimage} alt={props.questionimage} className='lg:w-[50vw] lg:h-[30vh] sm:w-[60vw] min-sm:h-[20vh] w-[70vw] h-[30vh] select-none' />
    </div> */}

    {/* </div> */}
    </div>

    {/* option div there are 4 div */}
    <form onSubmit={GetAnswer}>
      <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>A</p>
    <input type='radio' value={Question7option1} name="name" onClick={(e)=>{setAnswer7(e.target.value)}} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-black sm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full '/>

    <input value={Question7option1} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>B</p>
    <input type='radio' value={Question7option2} name="name" onClick={(e)=>{setAnswer7(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question7option2} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>C</p>
    <input type='radio' value={Question7option3} name="name" onClick={(e)=>{setAnswer7(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question7option3} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>D</p>
    <input type='radio' value={Question7option4} name="name" onClick={(e)=>{setAnswer7(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question7option4} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    </div>
    </form>
    


    {/* question div 8*/}
    <div className='w-screen min-h-[15vh]  '>
    {/* lg:grid lg:grid-cols-2 */}
    {/* {Qustionarray.map((index,e)=>{
        return <p className='border-white border-2 '> { index}</p>
    })} */}

    {/* <div> */}
    <div>
    <p className='text-white font-extrabold px-5 rounded-full select-none'>{props.qustionNumber}8</p>
    {/* <p className='vmd:w-screen px-3 py-3 select-none sm:text-[22px] mb:text-[18px] vmd:text-[15px]'>text-center{props.questionIntro}</p> */}

    <p className='text-center font-extrabold px-5 rounded-full select-none text-yellow-300'>
      {props.SubqustionNumber}</p>
      <p className=' vmd:w-screen p-2  lg:px-[15vw] md:px-[15vw] sm:px-[10vw] text-yellow-300 select-none text-center leading-[28px] '>{Question8}</p>
    </div>


    {/* <div className='flex items-center justify-center'>
    <img src={props.questionimage} alt={props.questionimage} className='lg:w-[50vw] lg:h-[30vh] sm:w-[60vw] min-sm:h-[20vh] w-[70vw] h-[30vh] select-none' />
    </div> */}

    {/* </div> */}
    </div>

    {/* option div there are 4 div */}
    <form onSubmit={GetAnswer}>
      <div className='flex flex-col items-center justify-center gap-2 lg:mt-[5%]'>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>A</p>
    <input type='radio' value={Question8option1} name="name" onClick={(e)=>{setAnswer8(e.target.value)}} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-black sm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full '/>

    <input value={Question8option1} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>B</p>
    <input type='radio' value={Question8option2} name="name" onClick={(e)=>{setAnswer8(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question8option2} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>C</p>
    <input type='radio' value={Question8option3} name="name" onClick={(e)=>{setAnswer8(e.target.value)}}  readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question8option3} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>D</p>
    <input type='radio' value={Question8option4} name="name" onClick={(e)=>{setAnswer8(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={Question8option4} placeholder='' readOnly={true} className=' text-center lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:h-[40px] sm:h-[40px] h-[40px] lg:text-[20px] sm:text-[20px] mb:text-[18px] vmd:text-[14px] border-2 border-cyan-400 hover:opacity-60 text-white font-bold bg-gray-900 outline-none px-3'/>
    </div>

    </div>
    <div className='w-screen flex items-center justify-center mt-[5%]'>
    <button className='bg-yellow-300 px-[10px] py-[5px] text-black font-bold rounded-md transition-all active:text-green-500'>Submit</button>
    </div>
    </form>
    {formloader}
    

</div>
    </>
  )
}

export default Quest








// import React, { useState } from 'react'

// function Quest(props) {


//   const [Answer1, setAnswer1] = useState()
//   const [Answer2, setAnswer2] = useState()
//   const [Answer3, setAnswer3] = useState()
//   const [Answer4, setAnswer4] = useState()
  
//   const GetAnswer=(e)=>{
//     e.preventDefault()
//     console.log("Hello")
//     console.log(Answer1,Answer2,Answer3,Answer4)
//   }
//   return (
//     <>
//     <div className='w-screen min-h-screen bg-[url("/public/assets/questionbg.webp")] bg-cover box-border bg-no-repeat bg-center 2xl:pt-[100px] lg:pt-[80px] md:pt-[70px] sm:pt-[50px] mb:pt-[30px] vmd:pt-[10px] border-white border-t-2 rounded-2xl '> 

// {/* question div */}
//     <div className='w-screen min-h-[15vh] p-5 flex justify-center '>
//     {/* {Qustionarray.map((index,e)=>{
//         return <p className='border-white border-2 '> { index}</p>
//     })} */}

//     <div>
//       <p className='sm:w-[40px] sm:h-[40px] vmd:w-[30px] vmd:h-[30px] text-center bg-yellow-300 text-black font-extrabold px-5 rounded-full select-none'>{props.qustionNumber}</p>
//       <p className='vmd:w-screen p-10 select-none'>{props.questionIntro}</p>
   
//     <div className='flex items-center justify-center'>
//     <img src={props.questionimage} alt={props.questionimage} className='lg:w-[50vw] lg:h-[30vh] sm:w-[60vw] min-sm:h-[0vh] w-[70vw] h-[40vh] select-none' />
//     </div>

//     <p className='w-[8vw] h-[5vh] text-center font-extrabold px-5 rounded-full select-none text-yellow-300'>{props.SubqustionNumber}</p>
//     <p className=' vmd:w-screen p-10 text-yellow-300 select-none'>{props.question}
//       </p>

//     </div>
//     </div>

//     {/* option div there are 4 div */}
//     <form type='submit' onSubmit={GetAnswer}>
//     <div className='flex flex-col items-center justify-center gap-6'>

// <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
// <p className='text-yellow-300 font-bold'>A</p>
// <input type='radio' value={props.option1} name="name" onClick={(e)=>{setAnswer1(e.target.value)}} readOnly={props.option1} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

// <input value={props.option1} placeholder='' readOnly={true} className=' text-center text-black lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:min-h-[100px] sm:min-h-[70px] min-h-[40px] lg:text-[40px] sm:text-[32px] mb:text-[18px] vmd:text-[17px] border-2 border-white outline-none rounded-lg border-opacity-90 bg-[#3cb371] px-3'/>
// </div>

// <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
// <p className='text-yellow-300 font-bold'>B</p>
// <input type='radio'  name="name" onClick={(e)=>{setAnswer2(e.target.value)}} value={props.option2} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

// <input value={props.option2} placeholder='' readOnly={true} className=' text-center text-black lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:min-h-[100px] sm:min-h-[70px] min-h-[40px] lg:text-[40px] sm:text-[32px] mb:text-[18px] vmd:text-[17px] border-2 border-white outline-none rounded-lg border-opacity-90 bg-[#3cb371] px-3'/>
// </div>

// <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
// <p className='text-yellow-300 font-bold'>C</p>
// <input type='radio' value={props.option3} name="name" onClick={(e)=>{setAnswer3(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

// <input value={props.option3} placeholder='' readOnly={true} className=' text-center text-black lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:min-h-[100px] sm:min-h-[70px] min-h-[40px] lg:text-[40px] sm:text-[32px] mb:text-[18px] vmd:text-[17px] border-2 border-white outline-none rounded-lg border-opacity-90 bg-[#3cb371] px-3'/>
// </div>

// <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
// <p className='text-yellow-300 font-bold'>D</p>
// <input type='radio' value={props.option4} name="name" onClick={(e)=>{setAnswer4(e.target.value)}} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

// <input value={props.option4} placeholder='' readOnly={true} className=' text-center text-black lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:min-h-[100px] sm:min-h-[70px] min-h-[40px] lg:text-[40px] sm:text-[32px] mb:text-[18px] vmd:text-[17px] border-2 border-white outline-none rounded-lg border-opacity-90 bg-[#3cb371] px-3'/>
// </div>
// <button className='bg-yellow-300 px-[10px] py-[5px] text-black font-bold rounded-md hover:rounded-2xl transition-all  select-none'>Submit</button>
// </div>
//     </form>

// </div>
//     </>
//   )
// }

// export default Quest


