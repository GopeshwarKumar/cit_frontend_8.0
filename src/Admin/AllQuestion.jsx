import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {toast , ToastContainer} from 'react-toastify'
import Loader from '../Components/Loader'
import { GiTireIronCross } from "react-icons/gi";

function AllQuestion() {

    const [questionlist, setquestionlist] = useState([])
    const [deletequestion, setdeletequestion] = useState("")
    const [active, setactive] = useState(false)

        const [question1, setquestion1 ] = useState()
        const [questionImage, setquestionImage ] = useState()
        const [option1, setoption1 ] = useState()
        const [option2, setoption2 ] = useState()
        const [option3, setoption3 ] = useState()
        const [option4, setoption4 ] = useState()
        const [answer, setanswer] = useState()
        const [QuestionId, setQuestionId] = useState()
    const [activeUpdateform, setactiveUpdateform] = useState(false)


    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SECRET_KEY}/getandshowquestion`).then(res =>{
            setquestionlist(res.data)
        }).catch(er=>{
            toast.warn('Error found !')
        })
    },[])

    const fetchQuestion=async()=>{
        await axios.get(`${process.env.REACT_APP_SECRET_KEY}/getandshowquestion`).then(res =>{
            setquestionlist(res.data)
        }).catch(er=>{
            toast.warn('Error found !')
        })
    }
  return (
    <>
    <ToastContainer className={`text-[15px]`}/>
    <h1 className='text-center font-bold'>All Questions List</h1>
    <div className='w-screen px-[3vw] flex flex-row justify-between'>
        <div className='flex flex-col items-center justify-center'>
            {questionlist.map((e,x)=>{
            return <div key={x} className='sm:text-[20px] vmd:text-[16px] mt-3 p-5'>
                <p>{x+1}. {e.question1}</p>
                <div className={`w-[200px] h-[200px]`}>
                <img src={e.questionImage} alt={e.questionImage}/></div>
                <p>{e.option1}</p>
                <p>{e.option2}</p>
                <p>{e.option3}</p>
                <p>{e.option4}</p>

                <div className='flex items-center gap-4'>
                <button 
                onClick={async(w)=>{
                setactive(true)
                setdeletequestion(e.question1)
                // console.log(deletequestion)
                axios.post(`${process.env.REACT_APP_SECRET_KEY}/deletequestion`,{deletequestion}).then(res=>{
                    console.log(res)
                    if(res.data.status===200 && res.data.message==="Question Deleted"){
                        toast.success(res.data.message)
                        setdeletequestion("")
                    }else{
                        toast.success(res.data.message)
                    }
                }).catch(err=>{
                    setactive(false)
                }).finally(final =>{
                    setactive(false)
                    fetchQuestion()
                })

                }} className='text-white text-center sm:text-[17px] text-[14px] py-[4px] px-[15px] rounded-md hover:opacity-60 bg-[#c31111] cursor-pointer hover:tracking-wider transition-all duration-150'>{active ? <Loader></Loader> :'Delete'}</button>

                <button onClick={(w)=>{
                    setactiveUpdateform(true)
                    setquestion1(e.question1)
                    setoption1(e.option1)
                    setoption2(e.option2)
                    setoption3(e.option3)
                    setoption4(e.option4)
                    setquestionImage(e.questionImage)
                    setanswer(e.answer)
                    setQuestionId(e._id)
                }} className='text-white text-center sm:text-[17px] text-[14px] py-[4px] px-[15px] rounded-md hover:opacity-60 bg-[#17ce76] cursor-pointer hover:tracking-wider transition-all duration-150 '>Update</button>
                </div>
            </div>
        })}
        </div>
{activeUpdateform===true ? 
        <form 
        onSubmit={async(e)=>{
            e.preventDefault()

            axios.post(`${process.env.REACT_APP_SECRET_KEY}/updatequestion`,{QuestionId,question1,questionImage,option1,option2,option3,option4,answer}).then(res=>{
                
                        toast.success(res.data.messsage)
                    }).catch(err=>{
                        toast.warn(err.data.messsage)
                    }).finally(final=>{
                        setactiveUpdateform(false)
                        setquestion1("")
                        setoption1("")
                        setoption2("")
                        setoption3("")
                        setoption4("")
                        setquestionImage("")
                        setanswer("")
                        setQuestionId("")
                    })
        }} className="h-[80vh] sticky top-0 p-8 bg-[#82b0c1ef] rounded-lg shadow-xl space-y-4">
        <h2 className="text-2xl font-bold text-yellow-300 text-center">Update Question</h2>
        <div onClick={()=>{setactiveUpdateform(false)}} className='text-red-600 font-extrabold hover:rotate-45 transition-all duration-150 cursor-pointer absolute top-0 right-0 p-4 '>
            <GiTireIronCross/>
        </div>

  {/* Question TextArea */}
  <div>
    <label className="block text-yellow-200 mb-1 font-medium">Question</label>
    <textarea
      value={question1} required
      rows={3} cols={50}
      typeof="text"
      placeholder="Enter the question"
      onChange={(e) => setquestion1(e.target.value)}
      className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '
    />
  </div>

  {/* Options */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block text-[18px] text-yellow-200 mb-1 font-medium">Option A</label>
      <input
        value={option1} required
        onChange={(e) => setoption1(e.target.value)}
        placeholder="Option A"
        className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '
      />
    </div>
    <div>
      <label className="block text-[18px] text-yellow-200 mb-1 font-medium">Option B</label>
      <input
        value={option2} required
        onChange={(e) => setoption2(e.target.value)}
        placeholder="Option B"
        className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '
      />
    </div>
    <div>
      <label className="block text-[18px] text-yellow-200 mb-1 font-medium">Option C</label>
      <input
        value={option3} required
        onChange={(e) => setoption3(e.target.value)}
        placeholder="Option C"
        className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '
      />
    </div>
    <div>
      <label className="block text-[18px] text-yellow-200 mb-1 font-medium">Option D</label>
      <input
        value={option4} required
        onChange={(e) => setoption4(e.target.value)}
        placeholder="Option D"
        className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '
      />
    </div>
  </div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Correct Answer */}
  <div>
    <label className="block text-[18px] text-yellow-200 mb-1 font-medium">Correct Answer</label>
    <input
      value={answer} required
      onChange={(e) => setanswer(e.target.value)}
      placeholder="Type the correct option (e.g., Option A)"
      className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '
    />
  </div>

  {/* Question Image */}
    <div>
    <label className="block text-[18px] text-yellow-200 mb-1 font-medium">Question Image</label>
    <input
      value={questionImage}
      typeof="text"
      placeholder="Image Link only"
      onChange={(e) => setquestionImage(e.target.value)}
      className='outline-none rounded py-[5px] px-[10px] font-sans placeholder:text-[16px] lg:text-[20px] text-[16px] text-black  placeholder:text-slate-600 placeholder:hover:tracking-tighter placeholder:duration-200 '
    />
  </div>
</div>

  {/* Submit Button & Loader */}
  <div className="flex justify-center">
      <input
        type="submit"
        value="Update"
        className="bg-green-500 hover:bg-green-600 text-white font-bold sm:text-[16px] vmd:text-[14px] py-1 px-3 rounded-md cursor-pointer transition duration-200"
      />
  </div>
        </form> : '' }
        
    </div>
    </>
  )
}

export default AllQuestion