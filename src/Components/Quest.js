import React from 'react'

function Quest(props) {

    // console.log(props.questionimage)
  let smwidth="60vw";
  let smheight="60vh";
  let lgwidth="50vw";
  let lgheight="30vh";
  let normalwidth="70vw"
  let normalheight="40vh"
  if(props.questionimage===undefined){
  smwidth=0;
  smheight=0;
  lgwidth=0;
  lgheight=0;
  normalwidth=0
  normalheight=0
  }
  else{
    smwidth="60vw";
    smheight="60vh";
    lgwidth="50vw";
    lgheight="30vh";
    normalwidth="70vw"
    normalheight="40vh"
  }
  const inputOptionBox1=(e)=>{
    console.log(e.target.value);
  }
  const inputOptionBox2=(e)=>{
    console.log(e.target.value);
  }
  const inputOptionBox3=(e)=>{
    console.log(e.target.value);
  }
  const inputOptionBox4=(e)=>{
    console.log(e.target.value);
  }
  return (
    <>
    <div className='w-screen min-h-screen bg-[url("/public/assets/questionbg.webp")] bg-cover box-border bg-no-repeat bg-center 2xl:pt-[100px] lg:pt-[80px] md:pt-[70px] sm:pt-[50px] mb:pt-[30px] vmd:pt-[10px] border-white border-t-2 rounded-2xl '> 

{/* question div */}
    <div className='w-screen min-h-[15vh] p-5 flex justify-center '>
    {/* {Qustionarray.map((index,e)=>{
        return <p className='border-white border-2 '> { index}</p>
    })} */}

    <div>
      <p className='sm:w-[40px] sm:h-[40px] vmd:w-[30px] vmd:h-[30px] text-center bg-yellow-300 text-black font-extrabold px-5 rounded-full select-none'>{props.qustionNumber}</p>
      <p className='vmd:w-screen p-10 select-none'>{props.questionIntro}</p>
   
    <div className='flex items-center justify-center'>
    <img src={props.questionimage} alt={props.questionimage} className='lg:w-[50vw] lg:h-[30vh] sm:w-[60vw] min-sm:h-[0vh] w-[70vw] h-[40vh] select-none' />
    </div>

    <p className='w-[8vw] h-[5vh] text-center font-extrabold px-5 rounded-full select-none text-yellow-300'>{props.SubqustionNumber}</p>
    <p className=' vmd:w-screen p-10 text-yellow-300 select-none'>{props.question}
      </p>

    </div>
    </div>

    {/* option div there are 4 div */}
    <div className='flex flex-col items-center justify-center gap-6'>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>A</p>
    <input type='checkbox' value={props.option1} name="name" onClick={inputOptionBox1} readOnly={props.option1} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={props.option1} placeholder='' readOnly={true} className=' text-center text-black lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:min-h-[100px] sm:min-h-[70px] min-h-[40px] lg:text-[40px] sm:text-[32px] mb:text-[18px] vmd:text-[17px] border-2 border-white outline-none rounded-lg border-opacity-90 bg-[#3cb371] px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>B</p>
    <input type='checkbox'  name="name" onClick={inputOptionBox2} value={props.option2} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={props.option2} placeholder='' readOnly={true} className=' text-center text-black lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:min-h-[100px] sm:min-h-[70px] min-h-[40px] lg:text-[40px] sm:text-[32px] mb:text-[18px] vmd:text-[17px] border-2 border-white outline-none rounded-lg border-opacity-90 bg-[#3cb371] px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>C</p>
    <input type='checkbox' value={props.option3} name="name" onClick={inputOptionBox3} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={props.option3} placeholder='' readOnly={true} className=' text-center text-black lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:min-h-[100px] sm:min-h-[70px] min-h-[40px] lg:text-[40px] sm:text-[32px] mb:text-[18px] vmd:text-[17px] border-2 border-white outline-none rounded-lg border-opacity-90 bg-[#3cb371] px-3'/>
    </div>

    <div className='w-screen flex items-center justify-center vmd:gap-[10px]'>
    <p className='text-yellow-300 font-bold'>D</p>
    <input type='checkbox' value={props.option4} name="name" onClick={inputOptionBox4} readOnly={true} className='vmd:w-[10vw] sm:min-h-[40px] vmd:min-h-[20px] text-center text-blacksm:text-[22px] mb:text-[18px] vmd:text-[15px] border-2 outline-none rounded-full text-green-500'/>

    <input value={props.option4} placeholder='' readOnly={true} className=' text-center text-black lg:w-[40vw] sm:w-[55vw] mb:w-[55vw] vmd:w-[55vw] lg:min-h-[100px] sm:min-h-[70px] min-h-[40px] lg:text-[40px] sm:text-[32px] mb:text-[18px] vmd:text-[17px] border-2 border-white outline-none rounded-lg border-opacity-90 bg-[#3cb371] px-3'/>
    </div>

    </div>

</div>
    </>
  )
}

export default Quest